import React, { createContext, useState } from 'react';

export const contactModalContext = createContext();

export function ContactModalProvider({ children }) {

  const [contactModal, setContactModal] = useState(false);

  return (
    <contactModalContext.Provider value={[contactModal, setContactModal]}>
      {children}
    </contactModalContext.Provider>
  );
};
