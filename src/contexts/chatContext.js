import React, { createContext, useState } from 'react';

export const chatContext = createContext();

export function ChatProvider({ children }) {

  const [chat, setChat] = useState(false);

  return (
    <chatContext.Provider value={[chat, setChat]}>
      {children}
    </chatContext.Provider>
  );
};
