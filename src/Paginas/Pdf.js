import { PDFViewer } from '@react-pdf/renderer';
import MyPDF from  '../Pdf/Docu';
import { Link } from "react-router-dom";

const App = () => (
    <div style={{minHeight:"100vhh"}}>
      <Link to='/usuarios'>
        <button type="button" className="btn btn-outline-primary my-2">Volver</button>
        </Link>
      <h1>Comprobante de terminos y condiciones</h1>
      <PDFViewer style={{width:"100%", height:"90vh"}}>
        <MyPDF />
      </PDFViewer>
    </div>
  );
  
  export default App;