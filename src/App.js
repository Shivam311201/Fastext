import React from 'react';
import Main from "./components/Landing/Main";
import { UserProvider } from "./contexts/userContext";

export default function App() {
  return (
    <UserProvider>
      <Main />
    </UserProvider>
  );
}
