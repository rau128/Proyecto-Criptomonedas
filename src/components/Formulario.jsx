import { useEffect } from "react";
import { criptoArray, monedas } from "../data";
import useCriptoContext from "../hooks/useCriptoContext";
import useInput from "../hooks/useInput";

const Formulario = ({ setInformacion }) => {
  let { setInfo, info } = useCriptoContext();
  const [Moneda] = useInput(monedas, "moneda");
  const [Criptomoneda] = useInput(criptoArray, "criptomoneda");
  const { infoDatos, setInfoDatos } = useCriptoContext();

  useEffect(() => {
    const ajax = async () => {
      const solicitud = await fetch(
        `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`
      );
      const { Data } = await solicitud.json();

      setInfo(Data);
    };

    ajax();
  }, []);

  info.forEach((el) => {
    let { Name, FullName } = el.CoinInfo;
    criptoArray.push({ Name, FullName });
  });

  const mmg = {
    criptomoneda: "",
    moneda: "",
  };

  const buscarDatos = (informacion, nombre) => {
    if (nombre === "criptomoneda") {
      mmg.criptomoneda = informacion;
    }
    if (nombre === "moneda") {
      mmg.moneda = informacion;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ajax = async () => {
      const solicitud = await fetch(
        `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${mmg.criptomoneda}&tsyms=${mmg.moneda}`
      );
      const resultado = await solicitud.json();

      const { HIGHDAY, LASTUPDATE, LOWDAY, PRICE, IMAGEURL } =
        resultado.RAW[mmg.criptomoneda][mmg.moneda];
      setInformacion({ HIGHDAY, LASTUPDATE, LOWDAY, PRICE, IMAGEURL });
    };

    ajax();
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
          <Criptomoneda buscarDatos={buscarDatos} />
        </div>
        <div className="d-flex flex-column gap-2 fs-5 mb-3 mb-md-4">
          <label htmlFor="moneda" className="mb-3">
            Moneda
          </label>
          <Moneda buscarDatos={buscarDatos} />
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
