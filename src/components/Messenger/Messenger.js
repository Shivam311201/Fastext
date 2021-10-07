import React from 'react';
import "../../styles/Messenger/Messenger.css";
import Chat from "../Chat/Chat";
import Friends from "../Friends/Friends";

export default function Messenger() {
  return (
    <div className="Messenger">
      <Friends />
      <Chat />
    </div>
  );
};
