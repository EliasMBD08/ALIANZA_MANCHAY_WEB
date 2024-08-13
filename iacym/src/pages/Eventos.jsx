import React, { useEffect, useState } from "react";
import { Typography } from "@material-tailwind/react";
import { CardEvento } from "../components/CardEvento.jsx";
import { obtenerEventosApi } from "../apis/data.js";
import { useHeaderTitle } from "../context/HeaderTitleContext";

export const Eventos = () => {
  const { setTituloHeader } = useHeaderTitle();
  const [datos, setDatos] = useState(null);
  const [error, setError] = useState(null);

  const data_header = {
    titulo: "EVENTOS",
    url_img: "/images/header_redes.webp",
  };

  useEffect(() => {
    setTituloHeader(data_header);

    return () => setTituloHeader("");
  }, [setTituloHeader]);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const response = await obtenerEventosApi();
        setDatos(response);
      } catch (err) {
        setError("Error al obtener los datos");
        console.error(err);
      }
    };

    obtenerDatos();
  }, []);

  const renderEventos = (titulo, eventos, color) => (
    <div
      className="container-fluid mx-auto"
      style={color ? { backgroundColor: color } : {}}
    >
      <div className="container p-6 md:pt-12 mx-auto text-center">
        <Typography variant="h3" color={color ? "white" : "black"}>
          {titulo}
        </Typography>
        <div className="flex justify-center my-6 md:p-6">
          {eventos && eventos.length > 0 ? (
            <div className="max-w-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 gap-y-16">
              {eventos.map((evento, index) => (
                <CardEvento key={index} data={evento} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <Typography variant="h5" color={color ? "white" : "black"}>
                No hay eventos disponibles en este momento.
              </Typography>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {error && <div>{error}</div>}
      {datos ? (
        <>
          {renderEventos("PRÓXIMOS EVENTOS", datos.false?.Retiro || [])}
          {renderEventos("CAMPAMENTOS", datos.false?.Campamento || [], "#0378A6")}
          {renderEventos("RETIROS", datos.true?.Retiro || [])}
        </>
      ) : (
        <div>Cargando...</div>
      )}
    </>
  );
};
