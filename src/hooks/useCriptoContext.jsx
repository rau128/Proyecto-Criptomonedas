import { useContext } from "react";
import { criptoContext } from "../context/CriptoContext";

const useCriptoContext = () => {
  return useContext(criptoContext);
};

export default useCriptoContext;
