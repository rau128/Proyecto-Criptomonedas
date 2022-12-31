import { useState } from "react";
import useCriptoContext from "./useCriptoContext";

const useInput = (datos, nombre) => {
  function Input({ buscarDatos }) {
    const [name, setName] = useState("");
    const { infoDatos, setInfoDatos } = useCriptoContext();

    function handleChange(e) {
      setName(e.target.value);

      // setInfoDatos({ ...infoDatos, [e.target.name]: e.target.value });
      buscarDatos(e.target.value, nombre);
    }

    return (
      <select value={name} onChange={handleChange} name={nombre}>
        <option value="">--Selecione--</option>
        {datos.slice(0, 10).map((el) => {
          return (
            <option key={el.Name} value={el.Name}>
              {el.FullName}
            </option>
          );
        })}
      </select>
    );
  }

  return [Input];
};

export default useInput;
