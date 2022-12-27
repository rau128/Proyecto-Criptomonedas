import { useContext } from "react";
import { criptoContext } from "../context/CriptoContext";

const useCriptoData = () => {
  return useContext(criptoContext);
};

export default useCriptoData;
