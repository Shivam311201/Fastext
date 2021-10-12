import React, { createContext, useState } from 'react';

export const listContext = createContext();

export function ListProvider({ children }) {

  const [list, setList] = useState({});

  return (
    <listContext.Provider value={[list, setList]}>
      {children}
    </listContext.Provider>
  );
};
