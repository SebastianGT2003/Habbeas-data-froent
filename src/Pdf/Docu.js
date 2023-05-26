
import React, { useState, useEffect } from "react";
import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';
import logoEmpresa from '../Imagenes/Logo empresa.PNG';


function MyPDF() {
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: '#ffffff',
      padding: 40,
      flex: 1,
      backgroundImage: '../Imagenes/Logo empresa.PNG',
      backgroundSize: 'cover',
    
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      textTransform: 'uppercase',
      textDecoration: 'underline',

    },
    section: {
      marginBottom: 20,
    },
    paragraph: {
      fontSize: 12,
      marginBottom: 10,
      lineHeight: 1.5,
    },
    user: {
      fontSize: 12,
      marginBottom: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

  const getData = (key) => {
    return localStorage.getItem(key);
  };

  const nombre = getData('usuarionombre');
  const tipo_doc = getData('tipo_doc');
  const documento = getData('usuariocedula');
  const fecha = getData('fecha');
  const publicidad = getData('publicidad');

  

  return (
    <Document>
      <Page style={styles.page}>
        <View>
          <Text style={styles.title}>Términos y condiciones de la pyme</Text>
          <View style={styles.section}>
          <Text style={styles.paragraph}>
              Yo {nombre} con tipo de documento {tipo_doc} {documento} acepto todos los terminos y condiciones de la pyme en la que me encuentro
              registrado desde el dia {fecha} con la publicidad al  {publicidad}%
            </Text>
            <Text style={styles.paragraph}>
              Acepta recibir de vez en cuando nuestros mensajes y materiales de promoción, por correo postal, correo electrónico o cualquier otro formulario de contacto que nos proporciones (incluido tu número de teléfono para llamadas o mensajes de texto). Si no deseas recibir dichos materiales o avisos de promociones, simplemente avísanos en cualquier momento.
            </Text>
            <Text style={styles.paragraph}>
              Usamos la información que recopilamos para ofrecerte una experiencia personalizada, incluidos anuncios, además de los otros fines que se detallan más adelante.
            </Text>
            <Text style={styles.paragraph}>
              Para ofrecer servicios de medición, de análisis y comerciales: Mucha gente confía en nuestros Productos para dirigir o promover sus negocios. Los ayudamos a medir qué tan bien están funcionando sus anuncios y otro contenido. Para comunicarnos contigo: Nos comunicamos contigo mediante los datos que nos proporcionaste, como la información de contacto que ingresaste en tu perfil. Para realizar investigaciones e innovar para el bienestar social: Utilizamos la información que tenemos, la información de investigadores y conjuntos de datos de fuentes públicas, grupos profesionales y grupos sin fines de lucro para realizar y respaldar la investigación.
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default MyPDF;
