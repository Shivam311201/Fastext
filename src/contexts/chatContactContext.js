import React, { createContext, useState } from 'react';

export const chatContactContext = createContext();

export function ChatContactProvider({ children }) {

  const [chatContact, setChatContact] = useState({});

  return (
    <chatContactContext.Provider value={[chatContact, setChatContact]}>
      {children}
    </chatContactContext.Provider>
  );
};
