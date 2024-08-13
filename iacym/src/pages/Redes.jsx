import React, { useEffect, useState } from "react";

import { useHeaderTitle } from "../context/HeaderTitleContext";

import { CardMinisterial } from "../components/CardMinisterial.jsx";
import { obtenerMinisteriosApi } from "../apis/data.js";

export function Redes() {
  const { setTituloHeader } = useHeaderTitle();
  const [datos, setDatos] = useState([]);
  const [error, setError] = useState(null);

  const info_ministerios = [
    {
      titulo: "ZONA NIC",
      desc: `The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.`,
      dia: "Martes",
      horario: "8:00 pm",
      redes_sociales: {
        facebook: "https://facebook.com",
        wsp: "https://google.com",
        tiktok: "https://tiktok.com",
      },
    },
  ];

  const data_header = {
    titulo: "REDES",
    url_img: "/images/header_redes.webp",
  };

  useEffect(() => {
    setTituloHeader(data_header);

    return () => setTituloHeader("");
  }, [setTituloHeader]);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const response = await obtenerMinisteriosApi();
        setDatos(response);
      } catch (err) {
        setError("Error al obtener los datos");
        console.error(err);
      }
    };

    obtenerDatos();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="max-w-100 py-16 md:py-32 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 gap-y-16">
        {datos.map((element) => (
          <CardMinisterial key={element.id} info_ministerio={element} />
        ))}
      </div>
    </div>
  );
}
