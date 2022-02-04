import React from "react";
import { useDispatch, useSelector } from "react-redux";
import campo from "../cancha.svg";

export default function Titulares() {
  //Acceder state del store
  const titulares = useSelector((state) => state.jugadores.titulares);
  console.log(titulares);

  return (
    <section>
      <h2>Titulares</h2>
      <div className="cancha">
        {titulares.map((titular) => (
          <article key={titular.id} className="titular">
            <div>
              <img src={titular.foto} alt={titular.nombre} />
              <button>X</button>
            </div>
            <p>{titular.nombre}</p>
          </article>
        ))}
        <img src={campo} alt="campo de fútbol" />
      </div>
    </section>
  );
}
