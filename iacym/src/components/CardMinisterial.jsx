import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

import { ImageComponent } from "./Imagen.jsx";
import { TooltipContainer } from "../components/Tooltip.jsx";


export function CardMinisterial({ info_ministerio }) {

  let url_img = `/images/ministerios/${info_ministerio.siglas}.webp`

  return (
    <Card>
      <CardHeader 
        color="blue-gray" 
        className="flex justify-center items-center max-h-48"
      >
        <ImageComponent datos={info_ministerio.file} />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
          {info_ministerio.nombre}
        </Typography>
        <div className="container text-center font-light">
          <Typography className="font-normal">
            {info_ministerio.desc}
          </Typography>
          <div className="bg-gray-700 rounded-full text-white p-2 mt-4">
            <Typography>
              {info_ministerio.dia_reunion} - {info_ministerio.hora_ini}
            </Typography>
          </div>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <div className="grid justify-items-center ">
          <TooltipContainer info_redes_sociales={info_ministerio.redes_sociales} />
        </div>
      </CardFooter>
    </Card>
  );
}

