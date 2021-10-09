import React from 'react';
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
