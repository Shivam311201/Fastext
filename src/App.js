import React from 'react';
import Main from "./components/Landing/Main";
import { ListProvider } from "./contexts/listContext";
import { UserProvider } from "./contexts/userContext";
import { ChatProvider } from "./contexts/chatContext";

export default function App() {
  return (
    <UserProvider><ChatProvider><ListProvider>
      <Main />
    </ListProvider></ChatProvider></UserProvider>
  );
}
