import React from "react";
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
import { PopUp } from "../components/PopUp.jsx";

export const CardValor = ({ data }) => {
  return (
    <Card className="w-56">
      <CardBody className="text-center">
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {data.titulo}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <PopUp data={data} />
      </CardFooter>
    </Card>
  );
};
