import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from "./TermsOfUse";

function Map_usuarios() {

  const [userList, setUserList]= useState([]);

  const usuarios_registrados = async (setUserList) => {
    const { data } = await axios.get("/api/usuario/usuarios_registrados");
    console.log(data);
    setUserList(data);
  };


  useEffect(()=>{

    usuarios_registrados(setUserList).catch(console.error)
  },[])
  




  return (
    <div>
      <div class="col col-12 mt-3">
        <button
          type="button"
          class="btn btn-danger mr-4 position-absolute top-5 end-0"
          /* onClick={sesio_administrador.cerrar_sesion_admin} */
        >
          Cerrar sesion
        </button>
      </div>
      

      <div class="container">
        <h1>Usuarios registrados en tu pagina:</h1>
        <div class="row-4 mt-4">
          <div class="col">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Documento</th>
                  <th>Nombre</th>
                  <th>Nivel de publicidad</th>
                  <th>Fecha de aceptacion de terminos y condiciones</th>
                </tr>
              </thead>
              <tbody>
                {userList.map((user, index) => (
                  <tr key={index}>
                    <th>{user.numerodoc}</th>
                    <th>{user.nombre}</th>
                    <th>{user.publicidad}</th>
                    <th>{user.fecha_actual}</th>
              
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map_usuarios;
