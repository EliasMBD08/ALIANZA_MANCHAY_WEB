import React, { useState, useEffect } from "react";
import { Skeleton } from "primereact/skeleton";

// Componente para el texto o contenido superpuesto
const ContentOverlay = ({ children, isVisible }) => {
  return (
    <div
      className={`absolute top-[50%] left-0 w-full text-center transition-all duration-[1500ms] ease-in-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
    >
      {children}
    </div>
  );
};

// Componente para cada slide expandible
const ExpandableBox = ({ imageUrl, content, shadow }) => {
  const [expanded, setExpanded] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [urlImagen, setUrlImagen] = useState("");
  const [htmlContent, setHtmlContent] = useState(null);

  useEffect(() => {
    // Desactivar la visibilidad del contenido
    setClicked(false);

    // Retraso para asegurar la transición de ocultar antes de mostrar el nuevo contenido
    setTimeout(() => {
      // Actualiza la URL de la imagen y el contenido HTML
      setUrlImagen(imageUrl);
      setHtmlContent(content);

      // Activa la expansión de la imagen
      setExpanded(true);

      // Activa la visibilidad del contenido con un pequeño retraso
      setTimeout(() => setClicked(true), 800); // 800ms para reiniciar la transición
    }, 1200); // 1800ms para la transición de ocultar contenido
  }, [imageUrl, content]);

  return urlImagen ? (
    <div className="w-full h-full relative">
      <div
        style={{ backgroundImage: `url(${urlImagen})` }}
        className={`w-full h-full bg-center bg-cover text-center transition-all duration-[2000ms] ease-in-out z-2 ${
          expanded ? "scale-100" : "scale-100"
        }`}
      ></div>
      {/* Fondo negro transparente condicional */}
      {shadow && (
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-8"></div>
      )}
      <ContentOverlay isVisible={clicked}>{htmlContent}</ContentOverlay>
    </div>
  ) : (
    <Skeleton height="100rem"></Skeleton>
  );
};

// Componente principal del carrusel
export const Carousel = ({
  slides,
  interval = 8000,
  shadow = false,
  showDots = false,
  ...props
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, interval); // Cambia el slider automáticamente basado en el intervalo dado

    return () => clearInterval(autoSlide); // Limpia el intervalo cuando el componente se desmonta
  }, [currentIndex, interval]);

  return (
    <div
      style={{
        position: "relative",
        margin: "auto",
        overflow: "hidden",
        minHeight: "200px",
        width: "100%",
        height: "100%",
      }}
      {...props}
    >
      <ExpandableBox
        imageUrl={slides[currentIndex].url}
        content={slides[currentIndex].content}
        shadow={shadow}
      />

      {/* Flecha Izquierda */}
      <div
        className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-4  text-white cursor-pointer"
        onClick={prevSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-[25px] w-[25px]"
          viewBox="0 0 320 512"
        >
          <path
            fill="white"
            d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
          />
        </svg>
      </div>

      {/* Flecha Derecha */}
      <div
        className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-4  text-white cursor-pointer"
        onClick={nextSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-[25px] w-[25px]"
          viewBox="0 0 320 512"
        >
          <path
            fill="white"
            d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
          />
        </svg>
      </div>

      {/* Puntos de Navegación */}
      {showDots && (
        <div className="flex absolute top-[95%] left-1/2 transform -translate-x-1/2">
          {slides.map((_, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`cursor-pointer h-[10px] w-[10px] rounded-full mx-1 ${
                slideIndex === currentIndex ? "bg-black" : "bg-gray-200"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
