import React from 'react';

export default function Friend({ name, userName, userID, friendshipID, onClick }) {
  return (
    <div className="Friend" onClick={() => onClick(name, userName, userID, friendshipID)}>
      <div>{name} ( {userName} )</div>
    </div>
  );
}
