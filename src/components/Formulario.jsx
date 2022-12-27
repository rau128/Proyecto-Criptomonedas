import useCriptomonedas from "../hooks/useCriptomonedas";
import Criptomonedas from "./Monedas";

const Formulario = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Consultando criptomoneda");
  };

  return (
    <form
      className="mb-5 d-flex flex-column text-white"
      onSubmit={handleSubmit}
    >
      <legend>
        Consulta Tu <span className="text-warning"> Cripto Favorita</span>
      </legend>
      <fieldset className="d-flex flex-column justify-content-md-around ">
        <div className="d-flex flex-column gap-2 fs-5 mb-3">
          <label htmlFor="criptomoneda" className="mb-3 ">
            Criptomoneda
          </label>
          <input type="text" placeholder="Criptomoneda" className="mt-md-1" />
        </div>
        <div className="d-flex flex-column gap-2 fs-5 mb-3 mb-md-4">
          <label htmlFor="moneda" className="mb-3">
            Moneda
          </label>
          {useCriptomonedas()}
        </div>

        <input
          type="submit"
          value={"Consultar Criptomoneda"}
          className="w-100 p-2 mt-3 mt-md-0  fs-md-3 fs-5 btn btn-outline-warning"
        />
      </fieldset>
    </form>
  );
};

export default Formulario;
