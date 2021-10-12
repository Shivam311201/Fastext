import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { userContext } from "../../contexts/userContext";
import OptionsModal from "./OptionsModal";
import UserNameModal from "./UserNameModal";
import ContactModal from "./ContactModal";
import RequestsModal from "./RequestsModal";

export default function Header() {

  const auth = firebase.auth();
  const [user, setUser] = useContext(userContext);
  const [optionsModal, setOptionsModal] = useState(false);
  const [contactModal, setContactModal] = useState(false);
  const [userNameModal, setUserNameModal] = useState(false);
  const [requestsModal, setRequestsModal] = useState(false);

  return (<>
    <div className="Header">
      <div style={{ color: "lightgrey" }}>{user.name.split(" ")[0]} ({user.userName})</div>
      <button onClick={() => setOptionsModal(true)}>Options</button>
      <button onClick={async () => {
        await auth.signOut();
        setUser({});
      }}>
        Log out
      </button>
      {optionsModal && < OptionsModal setModal={setOptionsModal} setContactModal={setContactModal} setUserNameModal={setUserNameModal} setRequestsModal={setRequestsModal} />}
      {contactModal && <ContactModal setModal={setContactModal} />}
      {userNameModal && <UserNameModal setModal={setUserNameModal} />}
      {requestsModal && <RequestsModal setModal={setRequestsModal} />}
    </div>
  </>);
}
