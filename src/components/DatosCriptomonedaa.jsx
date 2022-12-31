const DatosCriptomonedaa = ({ informacion }) => {
  const { HIGHDAY, LASTUPDATE, LOWDAY, PRICE, IMAGEURL } = informacion;
  console.log(IMAGEURL);
  return (
    <div className="d-flex flex-column justify-content-space-around">
      <h1 className="text-center text-white">Informacion</h1>

      <div className="d-flex aling-items-center justify-content-center text-white flex-column">
        <div>
          <p className="text-success">
            Precio: <span className="text-warning">{PRICE}</span>
          </p>
          <p className="text-success">
            Precio Mas Alto Del Dia:{" "}
            <span className="text-warning">{HIGHDAY}</span>
          </p>
          <p className="text-success">
            Precio Mas Bajo Del Dia:{" "}
            <span className="text-warning">{LOWDAY}</span>
          </p>
          <p className="text-success">
            Ultima Actualizacion Del Precio:{" "}
            <span className="text-warning">{LASTUPDATE}</span>
          </p>
        </div>

        <img
          src={`https://cryptocompare.com/${IMAGEURL}`}
          alt={IMAGEURL}
          className={"imgcoin"}
        />
      </div>
    </div>
  );
};

export default DatosCriptomonedaa;
