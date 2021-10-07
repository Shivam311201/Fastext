import React from 'react';
import Main from "./components/Landing/Main";
import { ChatProvider } from "./contexts/chatContext";
import { ContactModalProvider } from "./contexts/contactModalContext";
import { UserProvider } from "./contexts/userContext";
import { UserNameModalProvider } from "./contexts/userNameModalContext";

export default function App() {
  return (
    <UserProvider><ContactModalProvider><ChatProvider><UserNameModalProvider>
      <Main />
    </UserNameModalProvider></ChatProvider></ContactModalProvider></UserProvider>
  );
}
