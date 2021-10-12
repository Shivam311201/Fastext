import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/firestore";
import { userContext } from "../../contexts/userContext";

export default function Request({ userName, name, senderID }) {

  const db = firebase.firestore();
  const [user, setUser] = useContext(userContext);

  async function confirmRequest() {
    const senderRef = db.collection("users").doc(senderID);
    const senderData = (await senderRef.get()).data();
    await db.collection("friends").add({
      friend1: user,
      friend2: senderData,
    });
  };

  return (
    <div className="Request">
      <div className="Info">{name}</div>
      <div className="Info">( {userName} )</div>
      <div className="Confirm" onClick={() => confirmRequest()}>Add</div>
    </div >
  );
}
