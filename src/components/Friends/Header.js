import React, { useContext } from 'react';
import "../../styles/Friends/Header.css";
import { contactModalContext } from "../../contexts/contactModalContext";
import ContactModal from "./ContactModal";
import { userNameModalContext } from "../../contexts/userNameModalContext";
import UserNameModal from "./UserNameModal";
import { userContext } from "../../contexts/userContext";

export default function Header() {

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
    </div>
    {contactModal && <ContactModal />}
    {userNameModal && <UserNameModal />}
  </>);
}
