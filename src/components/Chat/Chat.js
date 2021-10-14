import React, { useContext, useState, useEffect, useRef } from 'react';
import firebase from "firebase/app";
import "firebase/firestore";
import { chatContactContext } from "../../contexts/chatContactContext";
import { userContext } from "../../contexts/userContext";

export default function Chat() {

  const db = firebase.firestore();
  const [user, setUser] = useContext(userContext);
  const [chat, setChat] = useState([]);
  const [chatContact, setChatContact] = useContext(chatContactContext);
  const chatContainerRef = useRef(null);
  const messageInputRef = useRef(null);

  useEffect(() => {
    const unsubscribe = db.collection("friendship").doc(chatContact.friendshipID).collection("chat").onSnapshot((snapshotQuery) => {
      const allMessages = snapshotQuery.docs.map((doc) => doc.data());
      allMessages.sort((firstMessage, secondMessage) => firstMessage.sentAt - secondMessage.sentAt);
      setChat(allMessages);
      chatContainerRef.current?.scrollTo({
        top: chatContainerRef.current?.clientHeight
      });
    });

    return () => unsubscribe();
  }, [chatContact]);

  async function sendMessage(content) {
    const messageRef = await db.collection("friendship").doc(chatContact.friendshipID).collection("chat").add({
      sentAt: Date.now(),
      senderName: user.name,
      senderUserName: user.userName,
      senderID: user.userID,
      recieverName: chatContact.name,
      recieverUserName: chatContact.userName,
      recieverID: chatContact.userID,
      content,
    });
    await messageRef.update({
      messageID: messageRef.id
    });

    messageInputRef.current.value = "";

  };

  if (chatContact.userName) return (
    <div className="Chat">
      <div className="ChatContainer"
        ref={chatContainerRef}
      >
        {chat.map((message) => (<div>
          <div>{message.senderName}: {message.content}</div>
        </div>))}

      </div>
      <div className="InputDiv">
        <input
          type="text"
          placeholder="Enter a new message"
          ref={messageInputRef}
        />
        <button onClick={async () => {
          await sendMessage(messageInputRef.current.value);
        }}>Send</button>
      </div>
    </div>
  );

  return (
    <div className="Chat"></div>
  );
}
