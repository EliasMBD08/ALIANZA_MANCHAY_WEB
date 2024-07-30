import React, { useRef, useEffect } from "react";
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
// import { Button } from 'primereact/button';
import { Button } from "@material-tailwind/react";

import { useHeaderTitle } from "../context/HeaderTitleContext";

import { CardCurso } from "../components/CardCurso.jsx";

export const Escuela = () => {
  const stepperRef = useRef(null);
  const { setTituloHeader } = useHeaderTitle();

  const cursos = {
    nivel_1: [
      {
        nombre: "Panorama Biblico",
        desc: "Es un curso básico para nuevos creyentes en el cual se les da un estudio panorámico de toda la Biblia. Introduce la Biblia sección por sección enseñando las verdades principales de cada parte y dando una visión panorámica de la obra de Dios desde Génesis hasta Apocalipsis - de «creación a nueva creación».",
        url_image: "/images/cursos/panorama_biblico.webp",
      },
      {
        nombre: "Cimientos",
        desc: "Aprenderás que la Biblia es muy importante para comprender el camino que se debe seguir a fin de agradar a Dios.",
        url_image: "/images/cursos/cimientos.webp",
      },
      {
        nombre: "Panorama Biblico",
        desc: "Es un curso básico para nuevos creyentes en el cual se les da un estudio panorámico de toda la Biblia. Introduce la Biblia sección por sección enseñando las verdades principales de cada parte y dando una visión panorámica de la obra de Dios desde Génesis hasta Apocalipsis - de «creación a nueva creación».",
        url_image: "/images/cursos/panorama_biblico.webp",
      },
      {
        nombre: "Cimientos",
        desc: "Aprenderás que la Biblia es muy importante para comprender el camino que se debe seguir a fin de agradar a Dios.",
        url_image: "/images/cursos/cimientos.webp",
      },
      {
        nombre: "Panorama Biblico",
        desc: "Es un curso básico para nuevos creyentes en el cual se les da un estudio panorámico de toda la Biblia. Introduce la Biblia sección por sección enseñando las verdades principales de cada parte y dando una visión panorámica de la obra de Dios desde Génesis hasta Apocalipsis - de «creación a nueva creación».",
        url_image: "/images/cursos/panorama_biblico.webp",
      },
      {
        nombre: "Cimientos",
        desc: "Aprenderás que la Biblia es muy importante para comprender el camino que se debe seguir a fin de agradar a Dios.",
        url_image: "/images/cursos/cimientos.webp",
      },
      {
        nombre: "Panorama Biblico",
        desc: "Es un curso básico para nuevos creyentes en el cual se les da un estudio panorámico de toda la Biblia. Introduce la Biblia sección por sección enseñando las verdades principales de cada parte y dando una visión panorámica de la obra de Dios desde Génesis hasta Apocalipsis - de «creación a nueva creación».",
        url_image: "/images/cursos/panorama_biblico.webp",
      },
      {
        nombre: "Cimientos",
        desc: "Aprenderás que la Biblia es muy importante para comprender el camino que se debe seguir a fin de agradar a Dios.",
        url_image: "/images/cursos/cimientos.webp",
      },
    ],
  };

  const data_header = {
    titulo: "ESCUELA",
    url_img: "/images/header_escuela.webp",
  };

  useEffect(() => {
    setTituloHeader(data_header);

    return () => setTituloHeader("");
  }, [setTituloHeader]);

  return (
    <div className="container mx-auto">
      <div className="card py-12 md:py-24">
        <Stepper
          ref={stepperRef}
          style={{ flexBasis: "50rem" }}
          orientation="vertical"
        >
          <StepperPanel header="Nivel I">
            <div className="flex flex-column">
              <div className="border-2 border-dashed border-surface-border rounded-lg bg-surface-ground p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-5 font-medium justify-items-center">
                {cursos.nivel_1.map((curso, index) => (
                  <CardCurso key={index} curso={curso} />
                ))}
              </div>
            </div>
            <div className="flex py-4">
              <Button
                variant="gradient"
                color="blue"
                size="md"
                className="flex items-center gap-2"
                onClick={() => stepperRef.current.nextCallback()}
              >
                Siguiente{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
                {/* <i className="pi pi-arrow-right"></i> */}
              </Button>
            </div>
          </StepperPanel>
          <StepperPanel header="Nivel II">
            <div className="flex flex-column">
              <div className="border-2 border-dashed border-surface-border rounded-lg bg-surface-ground p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-5 font-medium justify-items-center">
                {cursos.nivel_1.map((curso, index) => (
                  <CardCurso key={index} curso={curso} />
                ))}
              </div>
            </div>
            <div className="flex py-4 gap-2">
              <Button
                variant="gradient"
                color="blue-gray"
                size="md"
                className="flex items-center gap-2"
                onClick={() => stepperRef.current.prevCallback()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                  />
                </svg>
                Atras {/* <i className="pi pi-arrow-right"></i> */}
              </Button>
              <Button
                variant="gradient"
                color="blue"
                size="md"
                className="flex items-center gap-2"
                onClick={() => stepperRef.current.nextCallback()}
              >
                Siguiente{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </div>
          </StepperPanel>
          <StepperPanel header="Nivel III">
            <div className="flex flex-column">
              <div className="border-2 border-dashed border-surface-border rounded-lg bg-surface-ground p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-5 font-medium justify-items-center">
                {cursos.nivel_1.map((curso, index) => (
                  <CardCurso key={index} curso={curso} />
                ))}
              </div>
            </div>
            <div className="flex py-4 gap-2">
              <Button
                variant="gradient"
                color="blue-gray"
                size="md"
                className="flex items-center gap-2"
                onClick={() => stepperRef.current.prevCallback()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                  />
                </svg>
                Atras {/* <i className="pi pi-arrow-right"></i> */}
              </Button>
              <Button
                variant="gradient"
                color="blue"
                size="md"
                className="flex items-center gap-2"
                onClick={() => stepperRef.current.nextCallback()}
              >
                Siguiente{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
                {/* <i className="pi pi-arrow-right"></i> */}
              </Button>
            </div>
          </StepperPanel>
          <StepperPanel header="Nivel IV">
            <div className="flex flex-column">
              <div className="border-2 border-dashed border-surface-border rounded-lg bg-surface-ground p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-5 font-medium justify-items-center">
                {cursos.nivel_1.map((curso, index) => (
                  <CardCurso key={index} curso={curso} />
                ))}
              </div>
            </div>
            <div className="flex py-4 gap-2">
              <Button
                variant="gradient"
                color="blue-gray"
                size="md"
                className="flex items-center gap-2"
                onClick={() => stepperRef.current.prevCallback()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                  />
                </svg>
                Atras {/* <i className="pi pi-arrow-right"></i> */}
              </Button>
            </div>
          </StepperPanel>
        </Stepper>
      </div>
    </div>
  );
};
