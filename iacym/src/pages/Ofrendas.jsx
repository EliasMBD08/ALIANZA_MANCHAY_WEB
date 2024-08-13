import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { obtenerCuentasBancariasApi } from "../apis/data.js";
import { useHeaderTitle } from "../context/HeaderTitleContext";

export const Ofrendas = () => {
  const { setTituloHeader } = useHeaderTitle();
  const [datos, setDatos] = useState([]);
  const [error, setError] = useState(null);

  const data_header = {
    titulo: "OFRENDAS",
    url_img: "/images/header_redes.webp",
  };

  useEffect(() => {
    setTituloHeader(data_header);

    return () => setTituloHeader("");
  }, [setTituloHeader]);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const response = await obtenerCuentasBancariasApi();
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
      <div className="flex justify-center my-12 md:my-24 ">
        <div className="max-w-100 grid grid-rows-2 gap-10 gap-y-16 justify-items-center">
          {datos.map((cuenta, index) => (
            <Card
              key={index}
              className="w-full mx-auto max-w-[58rem] flex-column md:flex-row p-5 md:p-0"
            >
              <CardHeader
                shadow={false}
                floated={false}
                className="flex justify-center m-0 w-full shrink-0 md:w-1/3 md:rounded-r-none p-8 my-auto"
              >
                <img
                  src={`/images/logos/${cuenta.banco}.svg`}
                  alt={`logo ${cuenta.banco}`}
                  className="w-full max-w-[12rem] object-cover "
                />
              </CardHeader>
              <CardBody className="w-full md:w-2/3 my-auto text-center">
                <Typography
                  variant="h3"
                  color="black"
                  className="mb-2 font-bold"
                >
                  {cuenta.tipo} en {cuenta.moneda}
                </Typography>
                <Typography
                  variant="h4"
                  color="black"
                  className="mb-2 font-bold"
                >
                  {cuenta.nro_cuenta}
                </Typography>
                <Typography
                  variant="h5"
                  color="black"
                  className="mb-2 font-bold"
                >
                  Código interbancario
                </Typography>
                <Typography color="black" className="mb-2 font-normal">
                  {cuenta.nro_cuenta_inter}
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
