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

export const CardEvento = ({ data }) => {
  return (
    <Card className="p-0 w-[12rem]">
      <CardHeader floated={false} shadow={false} className="m-0">
        <img src={data.url_img} alt="" className="object-cover p-0" />
      </CardHeader>
      <CardBody>
        <Typography variant="h4">{data.titulo}</Typography>
        <Typography className="font-bold">{data.ministerio}</Typography>
        <Typography >{data.fecha}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link to={data.url_evento}>
          <Button>Ver más</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
