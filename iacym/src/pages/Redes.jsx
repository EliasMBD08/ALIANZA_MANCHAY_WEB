import React, { useEffect } from "react";

import { useHeaderTitle } from "../context/HeaderTitleContext";

import { CardMinisterial } from "../components/CardMinisterial.jsx";
import { Button } from "primereact/button";

export function Redes() {
  const { setTituloHeader } = useHeaderTitle();

  const info_ministerios = [
    {
      titulo: "ZONA NIC",
      desc: `The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.`,
      dia: "Martes",
      horario: "8:00 pm",
      url_img:
        "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      redes_sociales: {
        facebook: "https://facebook.com",
        wsp: "https://google.com",
        tiktok: "https://tiktok.com",
      },
    },
    {
      titulo: "CONECTADOS",
      desc: `The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.`,
      dia: "Martes",
      horario: "8:00 pm",
      url_img:
        "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      redes_sociales: {
        facebook: "https://facebook.com",
        wsp: "https://google.com",
        tiktok: "https://tiktok.com",
      },
    },
    {
      titulo: "PJ",
      desc: `The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.`,
      dia: "Martes",
      horario: "8:00 pm",
      url_img:
        "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      redes_sociales: {
        facebook: "https://facebook.com",
        wsp: "https://google.com",
        tiktok: "https://tiktok.com",
      },
    },
    {
      titulo: "JAP",
      desc: `The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.`,
      dia: "Martes",
      horario: "8:00 pm",
      url_img:
        "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      redes_sociales: {
        facebook: "https://facebook.com",
        wsp: "https://google.com",
        tiktok: "https://tiktok.com",
      },
    },
    {
      titulo: "VARONES",
      desc: `The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.`,
      dia: "Martes",
      horario: "8:00 pm",
      url_img:
        "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      redes_sociales: {
        facebook: "https://facebook.com",
        wsp: "https://google.com",
      },
    },
    {
      titulo: "DAMAS",
      desc: `The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.`,
      dia: "Martes",
      horario: "8:00 pm",
      url_img:
        "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      redes_sociales: {
        facebook: "https://facebook.com",
        wsp: "https://google.com",
      },
    },
    {
      titulo: "MATRIMONIOS",
      desc: `The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.`,
      dia: "Martes",
      horario: "8:00 pm",
      url_img:
        "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      redes_sociales: {
        facebook: "https://facebook.com",
        wsp: "https://google.com",
        tiktok: "https://tiktok.com",
      },
    },
    {
      titulo: "SAN JUDAS",
      desc: `The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.`,
      dia: "Martes",
      horario: "8:00 pm",
      url_img:
        "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      redes_sociales: {
        facebook: "https://facebook.com",
        wsp: "https://google.com",
      },
    },
  ];

  const data_header = {
    titulo: "REDES",
    url_img: "/images/header_redes.webp",
  };

  useEffect(() => {
    setTituloHeader(data_header);

    return () => setTituloHeader("");
  }, [setTituloHeader]);
  return (
    <div className="container mx-auto">
      <div className="max-w-100 py-16 md:py-32 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 gap-y-16">
        {info_ministerios.map((element) => (
          <CardMinisterial key={element.titulo} info_ministerio={element} />
        ))}
      </div>
    </div>
  );
}
