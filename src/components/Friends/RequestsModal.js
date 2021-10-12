import React, { useState, useContext, useEffect } from 'react';
import firebase from "firebase/app";
import "firebase/firestore";
import { userContext } from "../../contexts/userContext";

export default function RequestsModal({ setModal }) {

  const db = firebase.firestore();
  const [user, setUser] = useContext(userContext);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    (async () => {

    })();
  }, []);

  return (
    <div className="ModalBackground">
      <div className="RequestsModal">
        <div className="CloseButton" onClick={() => setModal(false)} >X</div>
        <div className="Title">Requests</div>
        <div className="RequestList">

        </div>
      </div>
    </div>
  );
}
