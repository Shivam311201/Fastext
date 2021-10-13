import React from 'react';
import Chat from "../Chat/Chat";
import FriendsTab from "../Friends/FriendsTab";

export default function Messenger() {
  return (
    <div className="Messenger">
      <FriendsTab />
      <Chat />
    </div>
  );
};
