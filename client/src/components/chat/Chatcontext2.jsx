import React, { createContext, useState } from 'react';

// Create the context
export const Chatcontext2 = createContext();

// Create a provider component
export const Chatcontext2Provider = ({ children }) => {
  const [firstId, setFirstId] = useState(null); // Initialize firstId state
  const [sent, setSent] = useState(false); // Initialize firstId state

  // Value object containing the state and setter
  const value = {
    firstId,
    setFirstId,
    sent, setSent
  };

  // Provide the context value to the children components
  return <Chatcontext2.Provider value={value}>{children}</Chatcontext2.Provider>;
};
