import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import MyPDF from "../Pdf/Docu";

function Map_usuarios() {

  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [renderizarComponente, setRenderizarComponente] = useState(false);

  const [busqueda, setBusqueda]= useState("");


  const usuarios_registrados = async (setUserList) => {
    const { data } = await axios.get("/api/usuario/usuarios_registrados");
    console.log(data);
    setUserList(data);
  };

  const navegador = useNavigate();

  const mostrar_pdf = (user) => {
    var otra = parseInt(user.publicidad,10)
    localStorage.setItem("usuarionombre", user.nombre,"publicidad",otra)
    localStorage.setItem("fecha",user.fecha_actual)
    localStorage.setItem("usuariocedula",user.numerodoc)
    localStorage.setItem("tipo_doc",user.tipo_documento)
    setSelectedUser(user);
    console.log(user.fecha_actual);
    setRenderizarComponente(true);
    MyPDF(user);
    navegador("/pdf");
    
  };


  const Busqueda = (e) =>{
    setBusqueda(e.target.value)
    console.log(e.target.value)
  }

  let resultado = []
  if(!busqueda){
    resultado = userList
  }else{
    resultado = userList.filter( (dato) =>
    dato.numerodoc.toLowerCase().includes(busqueda.toLocaleLowerCase()))
  }

  useEffect(() => {
    usuarios_registrados(setUserList);
  }, []);


  return (
    <div>
      <div className="col col-12 mt-3 text-center">
      </div>
      <div class="d-flex flex-row-reverse">
        <div>
        <Link to='/admin'>
        <button type="button" className="btn btn-outline-primary">Cerrar sesion</button>
        </Link>
        </div>
</div>
      <div className="container">
        <h1>Usuarios registrados en tu pagina:</h1>
        <div>
        <input
          className="form-control inputBuscar"
          value={busqueda}
          placeholder="Búsqueda de usuario por documento de identidad "
          onChange={Busqueda}
        />
        </div>
        <div className="row-4 mt-4 text-center">
          <div className="col">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Documento</th>
                  <th>Nombre</th>
                  <th>Nivel de publicidad</th>
                  <th>Fecha de aceptación de términos y condiciones</th>
                </tr>
              </thead>
              <tbody>
                {resultado.map((user, index) => (
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
