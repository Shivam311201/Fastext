import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/firestore";
import { userContext } from "../../contexts/userContext";

export default function Request({ userName, name, senderID, setRequests }) {

  const db = firebase.firestore();
  const [user, setUser] = useContext(userContext);

  async function confirmRequest() {
    const userRef = db.collection("users").doc(user.userID);
    const senderRef = db.collection("users").doc(senderID);
    const { id } = await userRef.collection("friends").add({
      name,
      userName,
      contactID: senderID
    });
    await senderRef.collection("friends").doc(id).set({
      name: user.name,
      userName: user.userName,
      contactID: user.userID,
      friendshipID: id
    });

    await userRef.collection("friends").doc(id).update({
      friendshipID: id
    });

    alert("Contact added as a Friend");

    const requestDoc = await userRef.collection("requests").where("userName", "==", userName).get();
    requestDoc.forEach(async (snapshot) => await snapshot.ref.delete());

    setRequests((prevRequests) => prevRequests.filter((request) => request.userName != userName));

    // await db.collection("chats").doc(id).set({});
  };

  return (
    <div className="Request">
      <div className="Info">{name}</div>
      <div className="Info">( {userName} )</div>
      <div className="Confirm" onClick={() => confirmRequest()}>Add</div>
    </div >
  );
}
