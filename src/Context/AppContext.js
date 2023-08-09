import { createContext, useRef } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  // Refs
  const iydContainerRef = useRef(null);
  const aboutAIESECRef = useRef(null);

  return (
    <AppContext.Provider value={{ iydContainerRef, aboutAIESECRef }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
