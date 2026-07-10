import { useState } from "react";
import Tarjeta from "./components/Tarjeta";
import "./styles/main.scss";

import fotoLuna from "./assets/luna.jpg";
import fotoNosotros from "./assets/nosotros.jpg";
import fotoAlma from "./assets/alma.jpg";

const altLuna = "Imagen de perra color negro, herencia de pitbull, orejona, le falta un ojito, con un juguete en la boca.";
const altNosotros = "Imagen de una pareja abrazados, ella rubia de ojos claros, él castaño con barba y rulos.";
const altAlma = "Imagen de perra cachorra, color negro, con las patitas blancas de adelante como botitas, acostada.";

function App() {

  return (
    <>
      <h1>Mi Familia</h1>
      <section className="contenedor-tarjetas">
        <Tarjeta
          nombre={"Luna"}
          profesion={"Perrhija: Primera bebé"}
          imagen={fotoLuna}
          alt={altLuna}
          descripcion={
            "Bebé perruna que integra la familia desde el 05/03/2023"

          }
        />
        <Tarjeta
          nombre={"Seba y Andy"}
          profesion={"Padres"}
          imagen={fotoNosotros}
          alt={altNosotros}
          descripcion={
            "Pareja formal, a punto de contraer matrimonio el 03/07/26"
          }
        />
        <Tarjeta
          nombre={"Alma"}
          profesion={"Perrhija: Segunda bebé"}
          imagen={fotoAlma}
          alt={altAlma}
          descripcion={
            "Bebé perruna que integra la familia desde el 26/05/2026"
          }
        />
      </section>
    </>
  );
}

export default App;
