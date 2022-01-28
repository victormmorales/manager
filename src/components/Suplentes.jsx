import React from "react";

export default function Suplentes({ suplentes }) {
  return (
    <section>
      <h2>Suplentes</h2>
      {/* <div className="suplentes">
            {suplentes.map(({ id, foto, nombre }) => (
              <article key={id} className="suplente">
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
