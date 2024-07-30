import React from "react";
import { BrowserRouter } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "primereact/resources/themes/soho-light/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
// import "primeflex/primeflex.css"; // flex
import "./App.css";

import { Rutas } from "./routes/Rutas.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container-fluid m-0 p-0 wrapper d-flex align-items-stretch">
          <Rutas />
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
