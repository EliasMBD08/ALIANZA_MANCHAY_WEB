import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const CardEvento = ({ data }) => {
  // Validación y valores predeterminados
  if (!data) return null;

  let url_img = `/images/eventos/${data.tipo.toLowerCase()}/${data.nombre_archivo}.webp`;
  let url_evento = `/eventos/${data.nombre_archivo}`;
  let fecha_evento = data.fecha

  return (
    <Card className="p-0 w-[12rem]">
      <CardHeader floated={false} shadow={false} className="m-0">
        <img src={url_img} alt={`${data.ministerio.siglas} image`} className="object-cover p-0" />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" className="font-semibold">{data.nombre}</Typography>
        {/* <Typography className="font-bold">{data.ministerio.siglas}</Typography> */}
        <Typography className="font-bold">{data.ministerio.poblacion}</Typography>
        <Typography>{fecha_evento}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link to={url_evento}>
          <Button>Ver más</Button>
        </Link>
      </CardFooter>
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
