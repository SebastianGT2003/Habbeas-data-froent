import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

import reportWebVitals from './reportWebVitals';


import Usuarios from './Paginas/Usuarios';
import InicioSesion from './Paginas/Inicio';
import Registro from './Paginas/Registro';
import PDF from './Paginas/Pdf'
import InicioAdmin from './Paginas/InicioAdmin';


import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
      <Routes>
        <Route path="/" element={<InicioSesion/>} />
        <Route path="/admin" element={<InicioAdmin/>} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/pdf" element={<PDF />} />
      </Routes>
    </Router>
);
reportWebVitals();


