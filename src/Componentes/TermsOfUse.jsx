import React, { useEffect, useState } from "react";
import "../Estilos/Componentes.css";
function App() {
  //😔🤩🫡
  const [data, setData] = useState(0);
  const [emoji, setEmoji] = useState("😔");

  useEffect(() => {
    if (data == 0) {
      setEmoji("😔");
    } else if (data == 50) {
      setEmoji("🫡");
    } else if (data == 100) {
      setEmoji("🤩");
    }
  }, [data]);
  const [show, setShow] = useState(true);
  

  const handleClose = () => {
    localStorage.setItem("publicidad", data)
    console.log(data)
    setShow(false);
  };

  return (
    <div>
      {show && (
        <div className="position- absolute top-50 start-50 translate-middle">
           <div
          className="modal-dialog modal-xl"
          style={{
            height:"auto",
            width:"120vh",
            display:"flex"
          }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title h4" id="exampleModalFullscreenLabel">
                Terms Of Use OFFCORSS
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleClose}
              ></button>
            </div>
            <div className="modal-body">
              <div className="btn-group" style={{ width: "100%" }}>
                <button
                  type="button"
                  className="btn btn-danger dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ width: "100%" }}
                >
                  ¿Con que frecuencia desea conocer sobre las distintas
                  promociones y nuevo contenido que ofrece la empresa?
                </button>

                <div
                  className="dropdown-menu p-4 text-body-secondary"
                  style={{
                    width: "100%",
                    backgroundColor: "#F87878",
                    margin: "0 auto",
                    textAlign: "center",
                  }}
                >
                  <p>
                    Acepta recibir de vez en cuando nuestros mensajes y
                    materiales de promoción, por correo postal, correo
                    electrónico o cualquier otro formulario de contacto que nos
                    proporciones (incluido tu número de teléfono para llamadas o
                    mensajes de texto). Si no deseas recibir dichos materiales o
                    avisos de promociones, simplemente avísanos en cualquier
                    momento.
                  </p>
                  <label htmlFor="temp">
                    {" "}
                    Selecciona la frecuencia en la que deseas recibir nuestros
                    mensajes:
                  </label>
                  <br />
                  <div style={{ fontSize: "70px" }}>{emoji}</div>

                  <input
                    type="range"
                    style={{ width: "40%", margin: "auto" }}
                    className={data > 50 ? "heigh" : "less"}
                    list="markers"
                    min={0}
                    step={50}
                    max={100}
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    id="temp"
                    name="temp"
                  />

                  <datalist className="datalist" id="markers">
                    <option className="option" value="0" label="Poco" />
                    <option className="option" value="50" label="Moderado" />
                    <option className="option" value="100" label="Frecuente" />
                  </datalist>
                </div>
              </div>

              <div className="btn-group" style={{ width: "100%" }}>
                <button
                  type="button"
                  style={{ backgroundColor: "#00a0a0" }}
                  className="btn dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ¿Cómo usamos tu información ?
                </button>

                <div
                  className="dropdown-menu p-4 text-body-secondary"
                  style={{
                    width: "100%",
                    backgroundColor: "#00fafa",
                    margin: "0 auto",
                    textAlign: "center",
                  }}
                >
                  <p>
                    Usamos la información que recopilamos para ofrecerte una
                    experiencia personalizada, incluidos anuncios, además de los
                    otros fines que se detallan más adelante.
                  </p>{" "}
                  <br />
                  <p>
                    {" "}
                    Para ofrecer servicios de medición, de análisis y
                    comerciales: Mucha gente confía en nuestros Productos para
                    dirigir o promover sus negocios. Los ayudamos a medir qué
                    tan bien están funcionando sus anuncios y otro contenido.
                    Para comunicarnos contigo: Nos comunicamos contigo mediante
                    los datos que nos proporcionaste, como la información de
                    contacto que ingresaste en tu perfil. Para realizar
                    investigaciones e innovar para el bienestar social:
                    Utilizamos la información que tenemos, la información de
                    investigadores y conjuntos de datos de fuentes públicas,
                    grupos profesionales y grupos sin fines de lucro para
                    realizar y respaldar la investigación.
                  </p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleClose}
              >
                {" "}
                Acepto términos y condiciones
              </button>
            </div>
          </div>
        </div>


        </div>
       
      )}

    </div>
      
  );
}

export default App;
