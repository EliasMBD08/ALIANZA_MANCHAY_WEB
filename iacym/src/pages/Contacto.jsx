import React, { useEffect } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

import { useHeaderTitle } from "../context/HeaderTitleContext";

export const Contacto = () => {
  const { setTituloHeader } = useHeaderTitle();

  const data_header = {
    titulo: "CONTACTO",
    url_img: "/images/header_redes.webp",
  };

  useEffect(() => {
    setTituloHeader(data_header);

    return () => setTituloHeader("");
  }, [setTituloHeader]);
  return (
    <div className="container mx-auto">
      <div className="flex justify-center my-12 md:my-24 ">
        <div className="max-w-100 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 gap-y-16 justify-items-center">
          <Card className="w-72 py-5 bg-gradient-to-b from-light-blue-900 to-blue-gray-900 shadow-lg">
            <CardBody className="text-center my-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="text-white fill-current mx-auto mb-3"
                style={{ width: "50px", height: "50px" }}
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <Typography variant="h5" color="white" className="mb-2">
                Nuestra localización
              </Typography>
              <Typography color="white" className="">
                Av. Malásquez Mz. A3 Lt. 5b Paradero Naranjos
              </Typography>
              <Typography color="white" className="">
                Huertos de Manchay Pachacamac
              </Typography>
            </CardBody>
          </Card>
          <Card className="w-72 py-5 bg-gradient-to-b from-light-blue-900 to-blue-gray-900 shadow-lg">
            <CardBody className="text-center my-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="text-white fill-current mx-auto mb-3"
                style={{ width: "50px", height: "50px" }}
              >
                <path d="M256 48C141.1 48 48 141.1 48 256l0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40C0 114.6 114.6 0 256 0S512 114.6 512 256l0 144.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24l-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40L464 256c0-114.9-93.1-208-208-208zM144 208l16 0c17.7 0 32 14.3 32 32l0 112c0 17.7-14.3 32-32 32l-16 0c-35.3 0-64-28.7-64-64l0-48c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64l0 48c0 35.3-28.7 64-64 64l-16 0c-17.7 0-32-14.3-32-32l0-112c0-17.7 14.3-32 32-32l16 0z" />
              </svg>
              <Typography variant="h5" color="white" className="mb-2">
                Número telefónico
              </Typography>
              <Link to="/">
                <Typography color="white" className="">
                  (01) 25686519
                </Typography>
              </Link>
            </CardBody>
          </Card>
          <Card className="w-72 py-5 bg-gradient-to-b from-light-blue-900 to-blue-gray-900 shadow-lg">
            <CardBody className="text-center my-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="text-white fill-current mx-auto mb-3"
                style={{ width: "50px", height: "50px" }}
              >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
              <Typography variant="h5" color="white" className="mb-2">
                Nuestra localización
              </Typography>
              <Typography color="white" className="">
                informes@alianzamanchay.org
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
      <Card className="my-12 md:my-24 p-0">
        <CardBody className="p-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1379.2539808645943!2d-76.87595316203495!3d-12.103979652953036!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1722286039962!5m2!1ses-419!2spe"
          className="w-full h-[30rem] rounded-xl"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </CardBody>
      </Card>
    </div>
  );
};
