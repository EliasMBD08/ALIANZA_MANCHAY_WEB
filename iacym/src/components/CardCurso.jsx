import React from "react";
import { ScrollPanel } from "primereact/scrollpanel";

import { ImageComponent } from "./Imagen.jsx";

import "../assets/scss/cardsCursos.scss";

export const CardCurso = ({ curso }) => {

  return (
    <div className="card-curso relative rounded-lg flex items-center justify-center transition-all overflow-hidden hover:shadow-lg">
      <div
        className="h-full bg-no-repeat bg-center bg-cover"
      >
        <ImageComponent datos={curso.file} />
      </div>
      <div className="card-curso__content absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 w-full h-full p-5 box-border bg-white">
        <p className="m-0 font-bold text-2xl text-gray-700">{curso.nombre}</p>
        <ScrollPanel
          style={{ width: "100%", height: "140px" }}
          className="my-2.5 text-gray-500 text-sm"
        >
          <p>{curso.desc}</p>
        </ScrollPanel>
      </div>
    </div>
  );
};
