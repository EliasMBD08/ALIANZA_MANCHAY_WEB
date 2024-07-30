import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";


export function CardServicio({ data }) {
  return (
    <Link to={data.url_page} className="mr-4 cursor-pointer py-0 font-medium">
      <Card className="w-80 ">
        <CardHeader floated={false} className="h-80">
          <img
            src={data.url_img}
            alt="profile-picture"
            className="h-full object-cover"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {data.titulo}
          </Typography>
        </CardBody>
      </Card>
    </Link>
  );
}
