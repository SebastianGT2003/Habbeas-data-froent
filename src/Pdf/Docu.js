
import React, { useState } from "react";
import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';




const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  section: {
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 12,
    marginBottom: 5,
  },
  user: {
    fontSize: 12,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});



const MyPDF = ({ user }) => (
  <Document>
      <View>
        <Text style={styles.title}>Términos y condiciones de la pyme</Text>
        <View style={styles.section}>
          <Text style={styles.paragraph}>
            ¿Con qué frecuencia desea conocer sobre las distintas promociones y
            nuevo contenido que ofrece la empresa?
          </Text>
          <Text style={styles.paragraph}>
            Acepta recibir de vez en cuando nuestros mensajes y materiales de
            promoción, por correo postal, correo electrónico o cualquier otro
            formulario de contacto que nos proporciones (incluido tu número de
            teléfono para llamadas o mensajes de texto). Si no deseas recibir
            dichos materiales o avisos de promociones, simplemente avísanos en
            cualquier momento.
          </Text>
          <Text style={styles.paragraph}>
            Usamos la información que recopilamos para ofrecerte una experiencia
            personalizada, incluidos anuncios, además de los otros fines que se
            detallan más adelante.
          </Text>
          <Text style={styles.paragraph}>
            Para ofrecer servicios de medición, de análisis y comerciales: Mucha
            gente confía en nuestros Productos para dirigir o promover sus
            negocios. Los ayudamos a medir qué tan bien están funcionando sus
            anuncios y otro contenido. Para comunicarnos contigo: Nos
            comunicamos contigo mediante los datos que nos proporcionaste, como
            la información de contacto que ingresaste en tu perfil. Para
            realizar investigaciones e innovar para el bienestar social:
            Utilizamos la información que tenemos, la información de
            investigadores y conjuntos de datos de fuentes públicas, grupos
            profesionales y grupos sin fines de lucro para realizar y respaldar
            la investigación.
          </Text>
        </View>
        <Text style={styles.user}>
          Estos términos y condiciones fueron aceptados por {user ? user.nombre : '...'} con documento {user ? user.tipo_documento : '...'}
          en la fecha {user ? user.fecha_actual : '...'} con un tipo de publicidad {user ? user.publicidad : '...'}
        </Text>
      </View>

  </Document>
);

export default MyPDF;
