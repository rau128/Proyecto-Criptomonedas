// import { createContext, useState } from "react";

// export const criptoContext = createContext();

// const CriptoContextProvider = ({ children }) => {
//   const [info, setInfo] = useState([]);
//   return (
//     <criptoContext.Provider
//       value={{
//         info,
//         setInfo,
//       }}
//     >
//       {children}
//     </criptoContext.Provider>
//   );
// };

// export default CriptoContextProvider;

// ////////////////////////////

import { createContext, useState } from "react";

export const criptoContext = createContext();

const CriptoContextProvider = ({ children }) => {
  const [info, setInfo] = useState([]);
  const [infoDatos, setInfoDatos] = useState({ criptomoneda: "", moneda: "" });

  return (
    <criptoContext.Provider
      value={{
        info,
        setInfo,
        infoDatos,
        setInfoDatos,
      }}
    >
      {children}
    </criptoContext.Provider>
  );
};

export default CriptoContextProvider;
