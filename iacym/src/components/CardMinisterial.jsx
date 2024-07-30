import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import { TooltipContainer } from "../components/Tooltip.jsx";

export function CardMinisterial({ info_ministerio }) {
  return (
    <Card className="">
      <CardHeader color="blue-gray" className="relative inset-0 bg-no-repeat bg-center bg-cover h-56"
      style={{ backgroundImage: `url(${info_ministerio.url_img})` }}
      ><span></span>
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
          {info_ministerio.titulo}
        </Typography>
        <div className="container text-center font-light">
          {info_ministerio.desc}
          <div className="bg-gray-700 rounded-full text-white p-2 mt-4">{info_ministerio.dia} - {info_ministerio.horario}</div>
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
