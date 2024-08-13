import PropTypes from 'prop-types';
import {
  Typography,
} from "@material-tailwind/react";

export function HeaderPage({ data }) {

  if (!data) {
    return null; // Maneja el caso en el que data es undefined o null
  }

  return (
    <div className="relative bg-black p-10 py-16">
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${data.url_img})` }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex items-center justify-center text-center w-full h-full">
        <div className="font-bold text-4xl text-white z-10">
        <Typography variant='h2' >
          {data.titulo}
        </Typography>
        </div>
      </div>
    </div>
  );
}

HeaderPage.propTypes = {
  data: PropTypes.shape({
    url_img: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
  }).isRequired,
};