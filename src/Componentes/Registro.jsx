import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from "./TermsOfUse";

function Registro() {
  //Hokks
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [celular, setCelular] = useState("");
  const [aceptaterminos, setAceptaterminos] = useState(false);
  const [tipo_documento, setTipo_documento] = useState("");
  const [numerodoc, setNumerodoc] = useState("");

  const [publicidad, setPublicidad] = useState("");

  ////
  var today = new Date();

  // get today's date in `MM/DD/YYYY` format
  var now = today.toLocaleDateString('es-CO');

  const opciones = [
    { value: 'cc', text: 'CC - Cédula de ciudadanía' },
    { value: 'ce', text: 'CE - Cédula de extranjería' },
    { value: 'pa', text: 'PA - Pasaporte' }
  ]

  const navegador = useNavigate();
  

  const getData = () => {
    return localStorage.getItem("publicidad");
  }

  const publi = () => {
    setPublicidad(getData());
    var otra = parseInt(publicidad, 10)

    if (otra == 0) {
      setPublicidad("Poca");
    } else if (otra == 100) {
      setPublicidad("Frecuente");
    } else if (otra == 50) {
      setPublicidad("Moderada");
    }

  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setAceptaterminos(!aceptaterminos);
  };

  function registrarusuario(event) {
    event.preventDefault();
    var usuario = {
      nombre: nombre,
      tipo_documento: tipo_documento,
      numerodoc: numerodoc,
      fecha_n: fecha,
      celular: celular,
      correo: correo,
      contraseña: contraseña,
      aceptaterminos: aceptaterminos,
      fecha_actual: now,
      publicidad: publicidad

    };
    console.log(usuario);

    axios
      .post("/api/usuario/registrar", usuario)
      .then((res) => {
        if (res.data === "Usuario registrado correctamente") {
          alert(res.data);
          navegador("/");
        } else if (res.data === "El usuario ya existe") {
          alert(res.data);
        }
      })
      .then((err) => {
        console.log(err);
      });
  }

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
            <h1 className="text-primary fw-bold mb-0 fs-2">Nuevo usuario</h1>
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
            <form className="needs-validation" onSubmit={registrarusuario}>
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
                <select
                  className="form-select"
                  id="tipo_documento"
                  name="tipo_documento"
                  value={tipo_documento}
                  onChange={(e) => {
                    setTipo_documento(e.target.value);
                  }}
                  required
                  aria-label="Tipo de documento"
                >
                  <option defaultValue> Tipo de documento </option>
                  {opciones.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.text}
                    </option>
                  ))}
                </select>

                <label htmlFor="floatingPassword">Tipo de documento</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control rounded-3"
                  id="floatingInput"
                  placeholder="Numero de doc"
                  value={numerodoc}
                  onChange={(e) => {
                    setNumerodoc(e.target.value);
                  }}
                  required
                />
                <label htmlFor="floatingPassword">Número de documento</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="date"
                  className="form-control rounded-3"
                  id="floatingInput"
                  placeholder="Fecha de nacimiento"
                  value={fecha}
                  onChange={(e) => {
                    setFecha(e.target.value);
                  }}
                  required
                />

                <label htmlFor="floatingPassword">Fecha de nacimiento</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control rounded-3"
                  id="floatingCelular"
                  placeholder="Celular"
                  value={celular}
                  onChange={(e) => {
                    setCelular(e.target.value);
                  }}
                  required
                />
                <label htmlFor="floatingInput">Celular</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control rounded-3"
                  id="floatingInput"
                  placeholder="nombre@ejemplo.com"
                  value={correo}
                  onChange={(e) => {
                    setCorreo(e.target.value);
                  }}
                  required
                />
                <label htmlFor="floatingInput">Correo</label>
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
                <label htmlFor="floatingPassword">Contraseña</label>
              </div>


              <div >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />{" "}
                Acepta los términos y condiciones
                {isChecked && <Modal />}
              </div>
              <button
                type="submit"
                className="btn btn-lg rounded-3 w-100 mb-2 btn-outline-primary"
                disabled={!isChecked}
                onClick={publi}
              >
                Registarme
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registro;
