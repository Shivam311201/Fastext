import React, { createContext, useState } from 'react';

export const userNameModalContext = createContext();

export function UserNameModalProvider({ children }) {

  const [userNameModal, setUserNameModal] = useState(false);

  return (
    <userNameModalContext.Provider value={[userNameModal, setUserNameModal]}>
      {children}
    </userNameModalContext.Provider>
  );
};
