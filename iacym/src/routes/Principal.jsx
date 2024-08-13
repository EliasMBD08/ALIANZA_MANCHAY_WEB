import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import { NavBar } from "../components/NavBar.jsx";
import { HeaderPage } from "../components/HeaderPage.jsx";
import { FooterPage } from "../components/FooterPage.jsx";

import { useHeaderTitle } from "../context/HeaderTitleContext.jsx";

export const Principal = () => {
  const { tituloHeader } = useHeaderTitle();
  const location = useLocation();
  return (
    <div className="container-fluid p-0">
      <NavBar />
      {location.pathname !== "/" && <HeaderPage data={tituloHeader} />}
      <div className="relative p-0 mx-auto">
        <Outlet /> {/* Renderiza las rutas hijas */}
      </div>
      <FooterPage />
    </div>
  );
};
