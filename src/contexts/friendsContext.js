import React, { createContext, useState } from 'react';

export const friendsContext = createContext();

export function FriendsProvider({ children }) {

  const [friends, setFriends] = useState([]);

  return (
    <friendsContext.Provider value={[friends, setFriends]}>
      {children}
    </friendsContext.Provider>
  );
};
