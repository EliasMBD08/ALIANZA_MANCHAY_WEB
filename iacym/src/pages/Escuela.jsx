import React, { useRef, useEffect, useState } from "react";
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import { obtenerCursosApi } from "../apis/data.js";
import { Button } from "@material-tailwind/react";
import { useHeaderTitle } from "../context/HeaderTitleContext";
import { CardCurso } from "../components/CardCurso.jsx";

export const Escuela = () => {
  const stepperRef = useRef(null);
  const { setTituloHeader } = useHeaderTitle();
  const [datos, setDatos] = useState({
    nivel_1: [],
    nivel_2: [],
    nivel_3: [],
    nivel_4: [],
  });
  const [error, setError] = useState(null);

  const data_header = {
    titulo: "ESCUELA",
    url_img: "/images/header_escuela.webp",
  };

  useEffect(() => {
    setTituloHeader(data_header);

    return () => setTituloHeader({});
  }, [setTituloHeader]);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const response = await obtenerCursosApi();
        setDatos(response);
      } catch (err) {
        setError("Error al obtener los datos");
        console.error(err);
      }
    };

    obtenerDatos();
  }, []);

  // Verificar si 'datos' no es null o undefined antes de mapear
  const niveles = datos && typeof datos === 'object' ? Object.keys(datos) : [];

  return (
    <div className="container mx-auto">
      <div className="card py-12 md:py-24">
        {error && <p className="text-red-500 text-center">{error}</p>}
        <Stepper
          ref={stepperRef}
          style={{ flexBasis: "50rem" }}
          orientation="vertical"
        >
          {niveles.map((nivel) => (
            <StepperPanel header={`Nivel ${nivel.split("_")[1]}`} key={nivel}>
              <div className="flex flex-column">
                <div className="border-2 border-dashed border-surface-border rounded-lg bg-surface-ground p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-5 font-medium justify-items-center">
                  {datos[nivel] && datos[nivel].length > 0 ? (
                    datos[nivel].map((curso) => (
                      <CardCurso key={curso.id} curso={curso} />
                    ))
                  ) : (
                    <p>No hay cursos disponibles</p>
                  )}
                </div>
              </div>
              <div className="flex py-4 gap-2">
                {parseInt(nivel.split("_")[1]) > 1 && (
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
                    Atras
                  </Button>
                )}
                {parseInt(nivel.split("_")[1]) < 4 && (
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
                )}
              </div>
            </StepperPanel>
          ))}
        </Stepper>
      </div>
    </div>
  );
};
