import Formulario from "./Formulario";
import Imagen from "./Imagen";

const Main = () => {
  return (
    <main className="d-flex flex-column flex-md-row justify-content-center align-items-center align-items-md-start  gap-md-5">
      <Formulario />

      <Imagen />
    </main>
  );
};

export default Main;
