import React from 'react';

export default function OptionsModal({ setModal, setUserNameModal, setContactModal, setRequestsModal }) {

  return (<>
    <div className="ModalBackground">
      <div className="OptionsModal">
        <div className="CloseButton" onClick={() => setModal(false)}>X</div>
        <button onClick={() => setContactModal(true) || setModal(false)} >Add Contacts</button>
        <button onClick={() => setUserNameModal(true) || setModal(false)} >Set Username</button>
        <button onClick={() => setRequestsModal(true) || setModal(false)}>Open Requests</button>
      </div>
    </div>
  </>);
}
