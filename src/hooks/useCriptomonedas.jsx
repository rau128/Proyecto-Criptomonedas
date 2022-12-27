import { ajax, monedas } from "../data";

const useCriptomonedas = () => {
  const handleChange = (e) => {
    ajax(e.target.value);
  };

  return (
    <>
      <select onChange={handleChange} value="">
        <option value="">--Seleccione--</option>
        {monedas.map((moneda) => {
          return (
            <option key={moneda.id} value={moneda.id}>
              {moneda.moneda}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default useCriptomonedas;
