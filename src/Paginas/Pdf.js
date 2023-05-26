import { PDFViewer } from '@react-pdf/renderer';
import MyPDF from  '../Pdf/Docu';
const App = () => (
    <div style={{minHeight:"100vhh"}}>
      <h1>Comprobante de terminos y condiciones de la pyme</h1>
      <PDFViewer style={{width:"100%", height:"90vh"}}>
        <MyPDF />
      </PDFViewer>
    </div>
  );
  
  export default App;