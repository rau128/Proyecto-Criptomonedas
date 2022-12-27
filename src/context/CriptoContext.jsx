import { createContext, useState } from "react";

export const criptoContext = createContext();

const CriptoContextProvider = ({ children }) => {
  const [info, setInfo] = useState([]);
  return (
    <criptoContext.Provider
      value={{
        info,
        setInfo,
      }}
    >
      {children}
    </criptoContext.Provider>
  );
};

export default CriptoContextProvider;
