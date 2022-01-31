import { stat } from "fs";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerJugadoresAction } from "../actions/jugadoresActions";
//Actions REDUX
import { agregarJugadorActionTitular } from "../actions/jugadoresActions";

// const jugadores = [
//   { id: 17, nombre: "Jugador1", foto: "Jugador1" },
//   { id: 20, nombre: "Jugador2", foto: "Jugador2" },
// ];

export default function Jugadores() {
  const dispatch = useDispatch();

  useEffect(() => {
    //consultar API
    const cargarJugadores = () => dispatch(obtenerJugadoresAction());
    cargarJugadores();
  }, []);

  //Acceder state del store
  const jugadores = useSelector((state) => state.jugadores);
  console.log(jugadores);

  const cargando = useSelector((state) => state.jugadores.loading);
  const error = useSelector((state) => state.jugadores.error);

  //manda llamar action de jugadorAction
  const agregarJugador = (jugador) =>
    dispatch(agregarJugadorActionTitular(jugador));
  //cuando el usuario añade un jugador
  const agregarJugadorTitular = (jugador) => {
    agregarJugador(jugador);
  };

  return (
    <section>
      <h2>Jugadores</h2>
      <div className="contenedor-jugadores">
        {jugadores.map((jugador) => (
          <article key={jugador.id} className="jugador">
            <img src={jugador.foto} alt={jugador.nombre} />
            <h3>{jugador.nombre}</h3>

            <div>
              <button onClick={() => agregarJugadorTitular(jugador)}>
                Titular
              </button>
              <button>Suplente</button>
            </div>
          </article>
        ))}
      </div>
      {cargando ? <p>Cargando...</p> : null}

      {error ? <p>Hubo un error</p> : null}
    </section>
  );
}
