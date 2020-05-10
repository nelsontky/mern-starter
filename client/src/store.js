import React, { createContext, useContext, useReducer } from "react";

import rootReducer from "./reducers";

const initialState = {};
const StateContext = createContext(initialState);

export const StateProvider = ({ children }) => {
  return (
    <StateContext.Provider value={useReducer(rootReducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
