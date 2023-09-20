// creact a context ( warehouse)
// provider
// consumer

import React from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value="Try kro" >{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
