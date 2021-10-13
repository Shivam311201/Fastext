import React, { createContext, useState } from 'react';

export const filteredFriendsContext = createContext();

export function FilteredFriendsProvider({ children }) {

  const [filteredFriends, setFilteredFriends] = useState([]);

  return (
    <filteredFriendsContext.Provider value={[filteredFriends, setFilteredFriends]}>
      {children}
    </filteredFriendsContext.Provider>
  );
};
