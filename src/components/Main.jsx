import { useState } from "react";
import DatosCriptomonedaa from "./DatosCriptomonedaa";
import Formulario from "./Formulario";
import Imagen from "./Imagen";

const Main = () => {
  const [informacion, setInformacion] = useState({});

  return (
    <main className="d-flex flex-column flex-md-row justify-content-center align-items-center align-items-md-start  gap-md-5">
      <Formulario setInformacion={setInformacion} />

      {Object.keys(informacion).length > 0 ? (
        <DatosCriptomonedaa informacion={informacion} />
      ) : (
        <Imagen />
      )}
    </main>
  );
};

export default Main;
