import React, { useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

import { Carousel } from "../components/Carousel.jsx";
// import { Carrusel } from "../components/Carrusel.jsx";
import { CardValor } from "../components/CardValor.jsx";
import { CardServicio } from "../components/CardServicio.jsx";

import { useHeaderTitle } from "../context/HeaderTitleContext";

export function Home() {
  const { setTituloHeader } = useHeaderTitle();

  const slides = [
    {
      url: "/images/carrusel/banner-1.webp",
      content: <h2 className="px-12 text-white text-2xl">Afirmaremos su crecimiento espiritual</h2>,
    },
    {
      url: "/images/carrusel/banner-2.webp",
      content: <h2 className="px-12 text-white text-2xl">Ministraremos a todas las familias, restaurándolas para Cristo</h2>,
    },
    {
      url: "/images/carrusel/banner-3.webp",
      content: <h2 className="px-12 text-white text-2xl">Alcanzaremos el mundo predicando el evangelio a toda criatura</h2>,
    },
    {
      url: "/images/carrusel/banner-4.webp",
      content: <h2 className="px-12 text-white text-2xl">Nutriremos a la gente con la palabra de Dios, la oración y un ministerio</h2>,
    },
  ];

  const valores = [
    {
      titulo: "RELACIÓN CON DIOS",
      ref: "Mateo 22:37",
      desc: "Amarás al Señor tu Dios con todo tu corazón, y con toda tu alma, y con toda tu mente.",
    },
    {
      titulo: "RELACIÓN CON LA FAMILIA",
      ref: "Efesios 5:31",
      desc: "Por esto dejará el hombre a su padre y a su madre, y se unirá a su mujer, y los dos serán una sola carne.",
    },
    {
      titulo: "RELACIÓN CON EL PROJIMO",
      ref: "Mateo 22:39",
      desc: "Amarás a tu prójimo como a ti mismo.",
    },
    {
      titulo: "RELACIÓN CON LA IGLESIA",
      ref: "Hebreos 10:25",
      desc: "No dejando de congregarnos, como algunos tienen por costumbre, sino exhortándonos; y tanto más, cuanto veis que aquel día se acerca.",
    },
  ];

  const servicios = [
    {titulo: "Nuestras Redes", url_img: "/images/header_redes.webp", url_page: "/redes"},
    {titulo: "Nuestras Escuelas", url_img: "/images/header_escuela.webp", url_page: "/escuela"},
    {titulo: "Eventos", url_img: "/images/header_eventos.webp", url_page: "/eventos"}
  ]

  useEffect(() => {
    setTituloHeader("Home");

    return () => setTituloHeader("");
  }, [setTituloHeader]);
  return (
    <>
      <div className="container-fluid mx-auto h-screen max-h-[700px] ">
      <Carousel shadow={true} slides={slides} showDots={true} interval={8000}  />
      {/* <Carrusel /> */}
    </div>
      <div className="container mx-auto my-12 md:my-24">
        <Card className="w-full mx-auto max-w-[58rem] flex-column md:flex-row p-5 md:p-0">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-full shrink-0 md:w-1/2 md:rounded-r-none"
          >
            <img
              src="/images/pastor.webp"
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography
              variant="h3"
              color="blue-gray"
              className="mb-2 font-black"
            >
              DE MANCHAY AL MUNDO
            </Typography>
            <Typography color="gray" className="mb-8 font-normal">
              Nuestra misión es vivir para la gloria de Dios, sirviendo a Cristo
              Jesús, en el poder del Espíritu Santo y de esa forma restaurar
              familias para el reino de Dios. Y nuestra visión es extender el
              evangelio de Jesucristo intencionalmente, salvando y restaurando
              familias, haciéndolas discípulas de Cristo en Manchay, en sus
              zonas de influencia y hasta lo último de la Tierra.
            </Typography>
            <Typography color="gray" className="mb-8 font-light italic">
              Pr. Elias Vega
            </Typography>
          </CardBody>
        </Card>
      </div>
      <div className="container-fluid mx-auto my-12 md:my-24 py-20 text-center"
        style={{ backgroundColor: "#0378A6" }}
      >
        <div className="container mx-auto">
          <Typography variant="h3" color="white" className="mb-2 font-black">
            NUESTROS VALORES
          </Typography>
          <Typography color="white" className="mb-2 font-normal">
            <b>Hechos 5:42</b> Y todos los días, en el templo y por las casas,
            no cesaban de enseñar y predicar a Jesucristo.
          </Typography>
          <div className="flex justify-center mt-14">
            <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-5">
              {valores.map((valor, index) => (
                <CardValor key={index} data={valor} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-12 md:my-24 text-center"
      >
        <div className="container mx-auto">
          <Typography variant="h3" color="gray" className="mb-2 font-black">
           VENIMOS A SERVIR AL SEÑOR
          </Typography>
          <Typography color="gray" className="mb-2 font-normal">
           Hemos venido a servir y compartir
          </Typography>
          <div className="flex justify-center mt-14">
            <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-5">
              {servicios.map((valor, index) => (
                <CardServicio key={index} data={valor} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
