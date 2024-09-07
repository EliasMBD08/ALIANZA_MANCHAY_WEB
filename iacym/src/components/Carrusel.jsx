import { Carousel } from "@material-tailwind/react";
import {
  Typography,
} from "@material-tailwind/react";

import "../assets/scss/general.scss"

export const Carrusel = () => {
  return (
    <Carousel
      className="top-0 p-0"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      // autoplay={true}
      loop={true}
      transition={{ type: "tween", duration: 1 }}
    >
      <div className="relative h-screen w-full flex justify-center items-center">
        <img
          src="/images/carrusel/banner-1.webp"
          alt="image 1"
          className="h-full w-full object-cover image-zoom"
        />
        <div className="w-full h-full absolute z-2" style={{ backgroundColor: "rgb(0,0,0,0.3)" }}></div>
        <div className="container absolute z-15 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-56  text-center text-slide-up">
          <Typography variant="h2" color="white" className="font-black">
            Afirmaremos su crecimiento espiritual
          </Typography>
        </div>
      </div>
      <div className="relative h-screen w-full flex justify-center items-center">
        <img
          src="/images/carrusel/banner-2.webp"
          alt="image 2"
          className="h-full w-full object-cover image-zoom"
        />
        <div className="w-full h-full absolute z-2" style={{ backgroundColor: "rgb(0,0,0,0.3)" }}></div>
        <div className="container absolute z-15 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-56  text-center text-slide-up">
          <Typography variant="h2" color="white" className="font-black">
            Ministraremos a todas las familias, restaurándolas para Cristo
          </Typography>
        </div>
      </div>
      <div className="relative h-screen w-full flex justify-center items-center">
        <img
          src="/images/carrusel/banner-3.webp"
          alt="image 3"
          className="h-full w-full object-cover image-zoom"
        />
        <div className="w-full h-full absolute z-2" style={{ backgroundColor: "rgb(0,0,0,0.3)" }}></div>
        <div className="container absolute z-15 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-56  text-center text-slide-up">
          <Typography variant="h2" color="white" className="font-black">
            Alcanzaremos el mundo predicando el evangelio a toda criatura
          </Typography>
        </div>
      </div>
      <div className="relative h-screen w-full flex justify-center items-center">
        <img
          src="/images/carrusel/banner-4.webp"
          alt="image 4"
          className="h-full w-full object-cover image-zoom"
        />
        <div className="w-full h-full absolute z-2" style={{ backgroundColor: "rgb(0,0,0,0.3)" }}></div>
        <div className="container absolute z-15 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-56  text-center text-slide-up">
          <Typography variant="h2" color="white" className="font-black">
            Nutriremos a la gente con la palabra de Dios, la oración y un ministerio
          </Typography>
        </div>
      </div>
    </Carousel>
  );
}