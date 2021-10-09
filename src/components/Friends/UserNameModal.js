import React, { useState, useContext, useRef, useEffect } from 'react';
import firebase from "firebase/app";
import "firebase/firestore";
import { userContext } from "../../contexts/userContext";

export default function UserNameModal({ setModal }) {

  const db = firebase.firestore();
  const [userName, setUserName] = useState("");
  const [user, setUser] = useContext(userContext);
  const userNameSearchRef = useRef(null);

  useEffect(() => {
    (async () => {
      setUserName(user.userName);
    })();
  }, []);

  async function findUserName(userName) {
    const userQuery = await db.collection("users").where("userName", "==", userName).get();
    if (userQuery.size) return true;
    else return false;
  };

  return (
    <div className="ModalBackground">
      <div className="UserNameModal">
        <div className="CloseButton" onClick={() => setModal(false)}>X
        </div>
        <div className="InputDiv">
          <input
            ref={userNameSearchRef}
            type="text"
            placeholder="Enter UserName"
            value={userName}
            onChange={(event) => setUserName(event.currentTarget.value.toLowerCase().trim())}
          />
          <button onClick={async () => {
            if (userName) {
              const foundUserName = await findUserName(userName);
              if (foundUserName) alert("Username already exists");
              else {
                setUser((oldUser) => ({ ...oldUser, userName: userName }));
                const doc = await db.collection("users").doc(user.userID).update({
                  userName: userName
                });
                setModal(false);
              };
            } else alert("Username can not be empty");
          }}>Set</button>
        </div>
      </div>
    </div>
  );
}
