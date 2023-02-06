import React, { createContext, useReducer } from "react";
import bountyReducer from "./bountyReducer";

const initialState = {
  bounties: []
};

export const BountyContext = createContext(initialState);

export const BountyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bountyReducer, initialState);

  return (
    <BountyContext.Provider value={{ state, dispatch }}>
      {children}
    </BountyContext.Provider>
  );
};
