// MyContext.js
import React, { createContext, useState } from 'react';

const MyContext = createContext();

export function MyProvider({ children }) {
  const [myState, setMyState] = useState("");

  return (
    <MyContext.Provider value={{ myState, setMyState }}>
      {children}
    </MyContext.Provider>
  );
}

export default MyContext;
