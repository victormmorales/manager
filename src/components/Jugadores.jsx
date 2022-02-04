import React, { useEffect, createRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerJugadoresAction } from "../actions/jugadoresActions";
//Actions REDUX
import { agregarJugadorActionTitular } from "../actions/jugadoresActions";

export default function Jugadores() {
  const dispatch = useDispatch();

  useEffect(() => {
    //consultar API
    const cargarJugadores = () => dispatch(obtenerJugadoresAction());
    cargarJugadores();
    // eslint-disable-next-line
  }, []);

  const gridJugadores = createRef();

  useEffect(() => {
    setScrollContainer();
    document.addEventListener("click", setScrollContainer);
    // eslint-disable-next-line
  }, []);

  // Función que fija el tamaño del grid de los jugadores
  const setScrollContainer = (desktop = true) => {
    let container = gridJugadores.current;
    if (container) {
      const generatedGrid = () => {
        let items = container.getElementsByClassName("jugador");
        let itemsLength = items.length;
        let bp = window.matchMedia("(min-width: 640px)").matches
          ? window.matchMedia("(min-width: 1024px)").matches
            ? 4
            : 2
          : 1;

        const getWidth = () => {
          let n = bp + (itemsLength > bp ? 0.3 : 0);
          return (itemsLength / n) * 100;
        };
        return `
                display: grid;
                grid-template-columns: repeat(${itemsLength}, 225px);
                grid-gap: 1rem;
                width : ${getWidth()}%;
              `;
      };
      let styles =
        !desktop && window.matchMedia("(min-width: 1024px)").matches
          ? `display: grid; grid-row-gap: 1rem;`
          : generatedGrid();
      container.setAttribute("style", styles);
    }
  };

  //Acceder state del store
  const jugadores = useSelector((state) => state.jugadores.jugadores);

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
        <div ref={gridJugadores} onClick={() => setScrollContainer.bind(this)}>
          {jugadores.length === 0 ? (
            <p className="error">No hay ningún Jugador</p>
          ) : (
            jugadores.map((jugador) => (
              <article key={jugador.id} className="jugador">
                <img src={jugador.foto} alt={jugador.nombre} />
                <h3>
                  {jugador.id}. {jugador.nombre}
                </h3>
                <p className={jugador.posicion ? jugador.posicion : null}>
                  {jugador.posicion}
                </p>

                <div>
                  <button onClick={() => agregarJugadorTitular(jugador)}>
                    Titular
                  </button>
                  <button>Suplente</button>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
      {cargando ? <p className="cargando">Cargando...</p> : null}

      {error ? <p className="error">Hubo un error</p> : null}
    </section>
  );
}
