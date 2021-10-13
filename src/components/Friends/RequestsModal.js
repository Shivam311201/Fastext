import React, { useState, useContext, useEffect } from 'react';
import firebase from "firebase/app";
import "firebase/firestore";
import { userContext } from "../../contexts/userContext";
import Request from "./Request";

export default function RequestsModal({ setModal }) {

  const db = firebase.firestore();
  const [user, setUser] = useContext(userContext);
  const [requests, setRequests] = useState([]);
  const [filteredRequests, setFilteredRequests] = useState([]);

  useEffect(() => {
    (async () => {
      const requestsDoc = await db.collection("users").doc(user.userID).collection("requests").get();
      requestsDoc.forEach((snapshot) => setRequests((prevRequests) => [...prevRequests, snapshot.data()]));
      setFilteredRequests(requests);
    })();
  }, []);

  useEffect(() => {
    setFilteredRequests(requests);
  }, [requests]);

  function filterRequests(userName) {
    if (userName) setFilteredRequests(requests.filter((request) => request.userName >= userName));
    else setFilteredRequests(requests);
  };

  return (
    <div className="ModalBackground">
      <div className="RequestsModal">
        <div className="CloseButton" onClick={() => setModal(false)} >X</div>
        <div className="InputDiv">
          <input
            type="text"
            placeholder="Search Requests"
            onChange={(event) => filterRequests(event.currentTarget.value)}
          />

        </div>
        <div className="RequestList">
          {filteredRequests.map((request, index) => <Request userName={request.userName} name={request.name} senderID={request.senderID} key={index.toString()} setRequests={setRequests} />)}
        </div>
      </div>
    </div>
  );
}
