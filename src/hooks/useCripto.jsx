const useCripto = (monedas) => {
  return (
    <>
      <select>
        <option value="">--Seleccione--</option>

        {monedas.map((moneda) => {
          return <option value={moneda.id}>{moneda.moneda}</option>;
        })}
      </select>
    </>
  );
};

export default useCripto;
