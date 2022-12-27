import { monedas } from "../data";
const Criptomonedas = () => {
  return (
    <>
      <select>
        <option value="">--Seleccione--</option>
        {monedas.map((peso) => {
          return (
            <option key={peso.id} value={peso.id}>
              {peso.moneda}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Criptomonedas;
