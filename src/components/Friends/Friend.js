import React from 'react';

export default function Friend({ name, userName, contactID, friendshipID, onClick }) {
  return (
    <div className="Friend" onClick={() => onClick(name, userName, contactID, friendshipID)}>
      <div>{name} ( {userName} )</div>
    </div>
  );
}
