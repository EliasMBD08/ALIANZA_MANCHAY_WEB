import React, { useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import { CardEvento } from "../components/CardEvento.jsx";

import { useHeaderTitle } from "../context/HeaderTitleContext";

export const Eventos = () => {
  const { setTituloHeader } = useHeaderTitle();

  const proximos_eventos = [

  ]

  const retiros = [
    {
      titulo: "ENEC",
      url_img: "/images/eventos/retiros/enec-1.webp",
      url_evento: "/eventos/enec-1",
      ministerio: "Niños",
      fecha: "2024-03"
    },
    {
      titulo: "EJEC",
      url_img: "/images/eventos/retiros/enec-1.webp",
      url_evento: "/eventos/enec-1",
      ministerio: "Jóvenes",
      fecha: "2024-03"
    },
    {
      titulo: "EVEC",
      url_img: "/images/eventos/retiros/enec-1.webp",
      url_evento: "/eventos/enec-1",
      ministerio: "Varones",
      fecha: "2024-03"
    },
    {
      titulo: "EMEC",
      url_img: "/images/eventos/retiros/enec-1.webp",
      url_evento: "/eventos/enec-1",
      ministerio: "Damas",
      fecha: "2024-03"
    },
  ];

  const campamentos = [
    {
      titulo: "ENEC",
      url_img: "/images/eventos/retiros/enec-1.webp",
      url_evento: "/eventos/enec-1",
      ministerio: "Niños",
      fecha: "2024-03"
    },
    {
      titulo: "EJEC",
      url_img: "/images/eventos/retiros/enec-1.webp",
      url_evento: "/eventos/enec-1",
      ministerio: "Jóvenes",
      fecha: "2024-03"
    },
    {
      titulo: "EVEC",
      url_img: "/images/eventos/retiros/enec-1.webp",
      url_evento: "/eventos/enec-1",
      ministerio: "Varones",
      fecha: "2024-03"
    },
    {
      titulo: "EMEC",
      url_img: "/images/eventos/retiros/enec-1.webp",
      url_evento: "/eventos/enec-1",
      ministerio: "Damas",
      fecha: "2024-03"
    },
  ];

  const data_header = {
    titulo: "EVENTOS",
    url_img: "/images/header_redes.webp",
  };

  useEffect(() => {
    setTituloHeader(data_header);

    return () => setTituloHeader("");
  }, [setTituloHeader]);
  return (
    <>
      <div className="container-fluid mx-auto">
        <div className="container p-6 md:pt-12 mx-auto text-center">
          <Typography variant="h3">
            PROXIMOS EVENTOS
          </Typography>
          <div className="flex justify-center my-6 md:p-6 ">
            <div className="max-w-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 gap-y-16">
              {campamentos.map((campamento, index) => (
                <CardEvento key={index} data={campamento} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mx-auto" style={{ backgroundColor: "#0378A6" }}>
        <div className="container p-6 md:pt-12 mx-auto text-center">
          <Typography variant="h3" color="white">RETIROS</Typography>
          <div className="flex justify-center my-6 md:p-6 ">
            <div className="max-w-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 gap-y-16">
              {retiros.map((retiro, index) => (
                <CardEvento key={index} data={retiro} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mx-auto">
        <div className="container p-6 md:pt-12 mx-auto text-center">
          <Typography variant="h3">
            CAMPAMENTOS
          </Typography>
          <div className="flex justify-center my-6 md:p-6 ">
            <div className="max-w-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 gap-y-16">
              {campamentos.map((campamento, index) => (
                <CardEvento key={index} data={campamento} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
