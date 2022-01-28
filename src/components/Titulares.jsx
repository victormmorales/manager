import React from "react";

export default function Titulares({ titulares }) {
  return (
    <section>
      <h2>Titulares</h2>
      {/* <div className="cancha">
        {titulares.map(({ id, foto, nombre }) => (
          <article key={id} className="titular">
            <div>
              <img src={foto} alt={nombre} />
              <button>X</button>
            </div>
            <p>{nombre}</p>
          </article>
        ))}
      </div> */}
    </section>
  );
}
