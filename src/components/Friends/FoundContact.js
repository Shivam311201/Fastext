import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/firestore";
import { userContext } from "../../contexts/userContext";

export default function FoundContact({ name, userName }) {

  const db = firebase.firestore();
  const [user, setUser] = useContext(userContext);

  async function addContact() {

    if (userName == user.userName) {
      alert("Can not add yourself as a Friend");
      return;
    }

    let existingRecievedRequest;
    const existingRecievedRequestDoc = await db.collection("users").doc(user.userID).collection("requests").where("userName", "==", userName).get();
    existingRecievedRequestDoc.forEach((snapshot) => existingRecievedRequest = snapshot.data());

    if (existingRecievedRequest) {
      alert("User had already sent you a request");
      return;
    }

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

    let existingSentRequest;
    const existingSentRequestDoc = await db.collection("users").doc(reciever.userID).collection("requests").where("userName", "==", user.userName).get();
    existingSentRequestDoc.forEach((snapshot) => existingSentRequest = snapshot.data());

    if (existingSentRequest) {
      alert("Already request sent");
      return;
    };

    await db.collection("users").doc(reciever.userID).collection("requests").add({
      userName: user.userName,
      name: user.name,
      senderID: user.userID
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
