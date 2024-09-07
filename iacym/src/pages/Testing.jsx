import React from "react";
import { Carousel } from "../components/Carousel.jsx";

export function Testing() {
  const slides = [
    {
      url: "/images/carrusel/banner-1.webp",
      content: <h2 className="text-white text-2xl">Este es el Slide 1</h2>,
    },
    {
      url: "/images/carrusel/banner-2.webp",
      content: <h2 className="text-white text-2xl">Bienvenido al Slide 2</h2>,
    },
    {
      url: "/images/carrusel/banner-3.webp",
      content: <p className="text-white text-lg">Explora el Slide 3</p>,
    },
    {
      url: "/images/carrusel/banner-4.webp",
      content: (
        <div>
          <h3 className="text-white">Slide 4</h3>
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white">
            Click Aquí
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="container-fluid mx-auto h-[200px] ">
      <Carousel className="" slides={slides} interval={8000}  />
    </div>
  );
}
