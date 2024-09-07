import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ImageComponent } from "./Imagen.jsx";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const CardEvento = ({ data }) => {
  if (!data) return null;

  return (
    <Card className="p-0 w-[12rem]">
      <CardHeader floated={false} shadow={false} className="m-0 p-0 max-h-32">
        <ImageComponent datos={data.file} />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" className="font-semibold">
          {data.siglas}
        </Typography>
        <Typography className="font-bold">
          {data.ministerio.poblacion}
        </Typography>
        <Typography className="font-light">{data.ministerio.siglas}</Typography>
        <Typography>{data.fecha}</Typography>
      </CardBody>
      {/* <CardFooter className="pt-0">
        <Link to={url_evento}>
          <Button>Ver más</Button>
        </Link>
      </CardFooter> */}
    </Card>
  );
};

// Validación de PropTypes
CardEvento.propTypes = {
  data: PropTypes.shape({
    tipo: PropTypes.string.isRequired,
    fecha: PropTypes.string.isRequired,
    ministerio: PropTypes.shape({
      siglas: PropTypes.string.isRequired,
      poblacion: PropTypes.string.isRequired,
    }).isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
