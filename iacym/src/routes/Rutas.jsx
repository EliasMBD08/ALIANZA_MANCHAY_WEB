import React from "react";
import { Routes, Route } from "react-router-dom";

import { Principal } from "./Principal.jsx";
import { Home } from "../pages/Home.jsx";
import { Redes } from "../pages/Redes.jsx";
import { Escuela } from "../pages/Escuela.jsx";
import { Eventos } from "../pages/Eventos.jsx";
import { Contacto } from "../pages/Contacto.jsx";
import { Ofrendas } from "../pages/Ofrendas.jsx";

import { NotificationProvider } from "../context/NotificationContext.jsx";
import { ConfirmDialogProvider } from "../context/ConfirmDialogContext.jsx";
import { HeaderTitleProvider } from "../context/HeaderTitleContext.jsx";

export function Rutas() {
  return (
    <>
      <NotificationProvider>
        <ConfirmDialogProvider>
          <HeaderTitleProvider>
            <Routes>
              <Route path="/" element={<Principal layout={true} />}>
                <Route path="" element={<Home />} />
                <Route path="redes" element={<Redes />} />
                <Route path="escuela" element={<Escuela />} />
                <Route path="eventos" element={<Eventos />} />
                <Route path="contacto" element={<Contacto />} />
                <Route path="ofrendas" element={<Ofrendas />} />
              </Route>
            </Routes>
          </HeaderTitleProvider>
        </ConfirmDialogProvider>
      </NotificationProvider>
    </>
  );
}
