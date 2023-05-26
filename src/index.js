import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

import reportWebVitals from './reportWebVitals';


import Registros_pag from './Paginas/Mapeo';
import InicioSesion from './Paginas/Inicio';
import Registro from './Paginas/Registro';
import PDF from './Paginas/Pdf'


import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<InicioSesion/>} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/admin/registros" element={<Registros_pag />} />
        <Route path="/pdf" element={<PDF />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
reportWebVitals();


