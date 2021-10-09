import React from 'react';

export default function OptionsModal({ setModal }) {
  return (
    <div className="ModalBackground">
      <div className="OptionsModal">
        <div className="CloseButton" onClick={() => setModal(false)}>X</div>

        <button>Add Contacts</button>
        <button>Set UserName</button>
      </div>
    </div>
  );
}
