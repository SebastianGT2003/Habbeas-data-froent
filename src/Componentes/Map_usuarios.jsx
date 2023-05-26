import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from "./TermsOfUse";
import MyPDF from "../Pdf/Docu";

function Map_usuarios() {
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [renderizarComponente, setRenderizarComponente] = useState(false);


  const usuarios_registrados = async (setUserList) => {
    const { data } = await axios.get("/api/usuario/usuarios_registrados");
    console.log(data);
    setUserList(data);
  };

  const navegador = useNavigate();

  useEffect(() => {
    usuarios_registrados(setUserList).catch(console.error);

    
  }, []);

  const mostrar_pdf = (user) => {
    localStorage.setItem("usuarionombre", user.nombre,"publicidad",user.publicidad)
    localStorage.setItem("fecha",user.fecha_actual)
    localStorage.setItem("usuariocedula",user.numerodoc)
    localStorage.setItem("tipo_doc",user.tipo_documento)
    setSelectedUser(user);
    console.log(user.fecha_actual);
    setRenderizarComponente(true);
    MyPDF(user);
    navegador("/pdf");
    
  };

  return (
    <div>
      <div className="col col-12 mt-3">
        <button
          type="button"
          className="btn btn-danger mr-4 position-absolute top-5 end-0"
        >
          Cerrar sesion
        </button>
      </div>

      <div className="container">
        <h1>Usuarios registrados en tu pagina:</h1>
        <div className="row-4 mt-4">
          <div className="col">
            <table className="table table-striped">
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
                    <td>{user.numerodoc}</td>
                    <td>{user.nombre}</td>
                    <td>{user.publicidad}</td>
                    <td>{user.fecha_actual}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-dark btn-sm"
                        onClick={() => mostrar_pdf(user)}
                      >
                        Ver PDF
                      </button>
                      
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
          </div>
        </div>
      </div>
      <div>{renderizarComponente && <MyPDF user={selectedUser} />}</div>
    </div>
  );
}

export default Map_usuarios;
