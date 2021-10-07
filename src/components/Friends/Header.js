import React, { useContext } from 'react';
import "../../styles/Friends/Header.css";
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory } from "react-router-dom";
import { contactModalContext } from "../../contexts/contactModalContext";
import ContactModal from "./ContactModal";
import { userNameModalContext } from "../../contexts/userNameModalContext";
import UserNameModal from "./UserNameModal";
import { userContext } from "../../contexts/userContext";

export default function Header() {

  const auth = firebase.auth();
  const [user, setUser] = useContext(userContext);
  const [contactModal, setContactModal] = useContext(contactModalContext);
  const [userNameModal, setUserNameModal] = useContext(userNameModalContext);
  return (<>
    <div className="Header">
      <div>{user.name.split(" ")[0]} ({user.userName})</div>
      <button onClick={() => setContactModal(true)}>
        Add Contact
      </button>
      <button onClick={() => setUserNameModal(true)}>
        Set Username
      </button>
      <button onClick={async () => {
        await auth.signOut();
        setUser({});
      }}>
        Log out
      </button>
    </div>
    {contactModal && <ContactModal />}
    {userNameModal && <UserNameModal />}
  </>);
}
