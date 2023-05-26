import axios from "axios";
import React, { useState } from "react";
import {Link, useNavigate } from "react-router-dom";

function InicioSesion() {
  //Hooks
  const [nombre, setNombre] = useState("");
  const [contraseña, setContraseña] = useState("");
  // Navegador de rutas
  const navegador = useNavigate();

  const validar_usuario = (ev) => {
    ev.preventDefault();
    if (nombre == 'admin' && contraseña == 'admin123'){
      alert('Inicio de secion correcto')
      navegador("/usuarios")
    }else{
      alert('Nombre o correo incorrecto')
    }
  };

  return (
    <div
      className="modal modal-signin position-static d-block py-5"
      tabIndex="-1"
      role="dialog"
      id="modalSignin"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content rounded-4 shadow">
          <div className="modal-header p-5 pb-4 border-bottom-0">
            <h1 className="text-primary fw-bold mb-0 fs-2">Administrador</h1>
            <Link to="/">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </Link>
          </div>
          <div className="modal-body p-5 pt-0">
            <form className="needs-validation"  onSubmit={validar_usuario}>
            <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control rounded-3"
                  id="floatingInput"
                  placeholder="Nombre"
                  value={nombre}
                  onChange={(e) => {
                    setNombre(e.target.value);
                  }}
                  required
                />
                <label htmlFor="floatingPassword">Nombre</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control rounded-3"
                  id="floatingPassword"
                  placeholder="Contraseña"
                  value={contraseña}
                  onChange={(e) => {
                    setContraseña(e.target.value);
                  }}
                  required
                />
                <label htmlFor="floatingPassword">Contreseña</label>
              </div>
              <button
                className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                type="submit"
              >
                Inicio sesión
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InicioSesion;
