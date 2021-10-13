import React, { useContext, useEffect } from 'react';
import firebase from "firebase/app";
import "firebase/firestore";
import { friendsContext } from "../../contexts/friendsContext";
import { userContext } from "../../contexts/userContext";
import Friend from "./Friend";
import { filteredFriendsContext } from "../../contexts/filteredFriendsContext";
import { chatContactContext } from "../../contexts/chatContactContext";

export default function List() {

  const db = firebase.firestore();
  const [user, setUser] = useContext(userContext);
  const [friends, setFriends] = useContext(friendsContext);
  const [filteredFriends, setFilteredFriends] = useContext(filteredFriendsContext);
  const [chatContact, setChatContact] = useContext(chatContactContext);

  useEffect(() => {
    (async () => {
      const friendsDoc = await db.collection("users").doc(user.userID).collection("friends").get();
      friendsDoc.forEach((snapshot) => setFriends((prevFriends) => [...prevFriends, snapshot.data()]));
    })();
  }, []);

  useEffect(() => {
    setFilteredFriends(friends);
  }, [friends]);

  async function openChat(name, userName, contactID, friendshipID) {
    setChatContact({
      name,
      userName,
      contactID,
      friendshipID
    });
  };

  return (
    <div className="List">
      {filteredFriends.map((friend, index) => <Friend name={friend.name} userName={friend.userName} contactID={friend.contactID} onClick={openChat} friendshipID={friend.friendshipID} key={index.toString()} />)}
    </div>
  );
}
