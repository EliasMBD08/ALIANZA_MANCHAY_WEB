import React, { useState, useEffect } from "react";
import { Image } from "primereact/image";
import { getGeneralMediaApi } from "../apis/Index.js";

export const ImageComponent = ({ datos }) => {
  const [ruta_imagen, setRutaImagen] = useState("");
  const [mensaje_error, setMensajeError] = useState("");

  useEffect(() => {
    const obtenerArchivo = async () => {
      try {
        if (datos.url) {
          const api = await getGeneralMediaApi();
          const baseURL = api.defaults.baseURL;
          const url_imagen = `${baseURL}${datos.url}`          
          setRutaImagen(url_imagen);
        } else {
          setMensajeError(datos.error);
        }
      } catch (error) {
        console.error("Error al obtener el archivo:", error);
        setMensajeError("No hay imagen asociada");
      }
    };

    obtenerArchivo()

    return 

  }, [datos]);

  return (
    <>
      {ruta_imagen ? (
          <Image src={ruta_imagen} alt="Imagen" preview  />
      ) : (
        <>{mensaje_error}</>
      )}
    </>
  );
};
