import React, { useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

import { useHeaderTitle } from "../context/HeaderTitleContext";

export const Ofrendas = () => {
  const { setTituloHeader } = useHeaderTitle();

  const data_header = {
    titulo: "OFRENDAS",
    url_img: "/images/header_redes.webp",
  };

  useEffect(() => {
    setTituloHeader(data_header);

    return () => setTituloHeader("");
  }, [setTituloHeader]);
  return (
    <div className="container mx-auto">
      <div className="flex justify-center my-12 md:my-24 ">
        <div className="max-w-100 grid grid-rows-2 gap-10 gap-y-16 justify-items-center">
          <Card className="w-full mx-auto max-w-[58rem] flex-column md:flex-row p-5 md:p-0">
            <CardHeader
              shadow={false}
              floated={false}
              className="flex justify-center m-0 w-full shrink-0 md:w-1/3 md:rounded-r-none p-8 my-auto"
            >
              <img
                src="/images/logos/bbva.svg"
                alt="card-image"
                className="w-full max-w-[12rem] object-cover "
              />
            </CardHeader>
            <CardBody className="w-full md:w-2/3 my-auto text-center">
              <Typography variant="h3" color="black" className="mb-2 font-bold">
                Cuenta corriente en Soles
              </Typography>
              <Typography variant="h4" color="black" className="mb-2 font-bold">
              193-0052844-0-76
              </Typography>
              <Typography variant="h5" color="black" className="mb-2 font-bold">
                Código interbancario
              </Typography>
              <Typography color="black" className="mb-2 font-normal">
              002-193-000052844076-11
              </Typography>
            </CardBody>
          </Card>
          <Card className="w-full mx-auto max-w-[58rem] flex-column md:flex-row p-5 md:p-0">
            <CardHeader
              shadow={false}
              floated={false}
              className="flex justify-center  m-0 w-full shrink-0 md:w-1/3 md:rounded-r-none p-8 my-auto"
            >
              <img
                src="/images/logos/bcp.svg"
                alt="card-image"
                className="w-full max-w-[12rem] object-cover"
              />
            </CardHeader>
            <CardBody className="w-full md:w-2/3 my-auto text-center">
              <Typography variant="h3" color="black" className="mb-2 font-bold">
                Cuenta corriente en soles
              </Typography>
              <Typography variant="h4" color="black" className="mb-2 font-bold">
              193-0052844-0-76
              </Typography>
              <Typography variant="h5" color="black" className="mb-2 font-bold">
                Código interbancario
              </Typography>
              <Typography color="black" className="mb-2 font-normal">
              002-193-000052844076-11
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};
