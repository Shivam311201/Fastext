import React, { useState, useContext, useRef } from 'react';
import "../../styles/Friends/ContactModal.css";
import firebase from "firebase/app";
import "firebase/firestore";
import { contactModalContext } from "../../contexts/contactModalContext";

export default function ContactModal() {

  const db = firebase.firestore();
  const [foundContacts, setFoundContacts] = useState([]);
  const [contactModal, setContactModal] = useContext(contactModalContext);
  const contactSearchRef = useRef(null);

  async function findContact(email) {
    setFoundContacts([]);
    const foundContactsRef = await db.collection("users").where("email", "==", email).get();
    // foundContactsRef.forEach((contact) => setFoundContacts((prevContacts) => [...prevContacts, contact.data()]));
    foundContactsRef.forEach((contact) => console.log(contact.data()));
  };

  return (
    <div className="ModalBackground">
      <div className="ContactModal">
        <div className="CloseButton" onClick={() => setContactModal(false)}>X</div>
        <div className="InputDiv">
          <input
            type="text"
            placeholder="Search by Email"
            ref={contactSearchRef}
          />
          <button onClick={() => findContact(contactSearchRef.current.value)}>Search</button>
        </div>
        <div className="FoundContactsList">
          {foundContacts.map((contact) => <div className="FoundContact">
            {contact?.name}
          </div>)}
        </div>
      </div>
    </div>
  );
};
