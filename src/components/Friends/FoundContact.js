import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/firestore";
import { userContext } from "../../contexts/userContext";

export default function FoundContact({ name, userName }) {

  const db = firebase.firestore();
  const [user, setUser] = useContext(userContext);

  async function addContact() {
    let reciever;
    const recieverDoc = await db.collection("users").where("userName", "==", userName).get();
    recieverDoc.forEach((snapshot) => reciever = snapshot.data());

    let existingFriend;
    const existingFriendDoc = await db.collection("users").doc(reciever.userID).collection("friends").where("userName", "==", user.userName).get();
    existingFriendDoc.forEach((snapshot) => existingFriend = snapshot.data());

    if (existingFriend) {
      alert("Already added");
      return;
    };

    let existingRequest;
    const existingRequestDoc = await db.collection("users").doc(reciever.userID).collection("requests").where("by", "==", user.userName).get();
    existingRequestDoc.forEach((snapshot) => existingRequest = snapshot.data());

    if (existingRequest) {
      alert("Already request sent");
      return;
    };

    await db.collection("users").doc(reciever.userID).collection("requests").add({
      by: user.userName
    });
    alert("Request sent");
  };

  return (
    <div className="FoundContact">
      <div className="Info">{name}</div>
      <div className="Info">( {userName} )</div>
      <div className="AddContact" onClick={() => addContact()}>Add</div>
    </div >
  );
}
