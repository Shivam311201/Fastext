import React from 'react';
import Main from "./components/Landing/Main";
import { FriendsProvider } from "./contexts/friendsContext";
import { UserProvider } from "./contexts/userContext";
import { ChatContactProvider } from "./contexts/chatContactContext";
import { FilteredFriendsProvider } from "./contexts/filteredFriendsContext";

export default function App() {
  return (
    <UserProvider><ChatContactProvider><FriendsProvider><FilteredFriendsProvider>
      <Main />
    </FilteredFriendsProvider></FriendsProvider></ChatContactProvider></UserProvider>
  );
}
