export const monedas = [
  {
    moneda: "España",
    id: "eur",
  },
  {
    moneda: "Brazil",
    id: "brl",
  },
  {
    moneda: "Estados Unidos",
    id: "usd",
  },
  {
    moneda: "Republica Dominicana",
    id: "dop",
  },
  {
    moneda: "Mexico",
    id: "mxn",
  },
];

// https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD

export function ajax(moneda) {
  const cargarCritpos = async () => {
    const solicitud = await fetch(
      `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=${moneda}`
    );
    const { Data } = await solicitud.json();
    console.log(Data);
  };

  cargarCritpos();
}
