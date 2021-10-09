import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { userContext } from "../../contexts/userContext";
import OptionsModal from "./OptionsModal";

export default function Header() {

  const auth = firebase.auth();
  const [user, setUser] = useContext(userContext);
  const [optionsModal, setOptionsModal] = useState(false);

  return (<>
    <div className="Header">
      <div>{user.name.split(" ")[0]} ({user.userName})</div>
      {/* <button onClick={() => setContactModal(true)}>
        Add Contact
      </button>
      <button onClick={() => setUserNameModal(true)}>
        Set Username
      </button> */}
      <button onClick={() => setOptionsModal(true)}>Options</button>
      <button onClick={async () => {
        await auth.signOut();
        setUser({});
      }}>
        Log out
      </button>
    </div>
    {optionsModal && < OptionsModal setModal={setOptionsModal} />}
  </>);
}
