import React, { useContext, useState, useEffect } from 'react';
import firebase from "firebase/app";
import "firebase/firestore";
import { chatContactContext } from "../../contexts/chatContactContext";

export default function Chat() {

  const db = firebase.firestore();
  const [chat, setChat] = useState([]);
  const [chatContact, setChatContact] = useContext(chatContactContext);

  useEffect(() => {
    (async () => {
      if (chatContact.friendshipID) {
        const chatDoc = await db.collection("friendship").doc(chatContact.friendshipID).collection("chat").get();
        chatDoc.forEach((snapshot) => setChat((prevMessages) => [...prevMessages, snapshot.data()]));
      };
    })();
  }, [chatContact]);

  if (chatContact.userName) return (
    <div className="Chat">
      <div className="ChatContainer">

      </div>
      <div className="InputDiv">
        <input
          type="text"
          placeholder="Enter a new message"
        />
        <button>Send</button>
      </div>
    </div>
  );

  return (
    <div className="Chat"></div>
  );
}
