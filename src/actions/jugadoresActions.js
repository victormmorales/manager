import {
  AGREGAR_JUGADOR,
  AGREGAR_JUGADOR_EXITO,
  AGREGAR_JUGADOR_ERROR,
  COMENZAR_DESCARGA_JUGADORES,
  DESCARGA_JUGADORES_EXITO,
  DESCARGA_JUGADORES_ERROR,
} from "../types";
import clienteAxios from "../config/axios";

//AÑADIR JUGADORES A TITULARES
export function agregarJugadorActionTitular(jugador) {
  return async (dispatch) => {
    dispatch(agregarJugador());

    try {
      //insertar en API
      await clienteAxios.post("/jugadores", jugador);

      dispatch(agregarJugadorExito(jugador));
    } catch (error) {
      console.log(error);
      dispatch(agregarJugadorError());
    }
  };
}

const agregarJugador = () => ({
  type: AGREGAR_JUGADOR,
});

const agregarJugadorExito = (jugador) => ({
  type: AGREGAR_JUGADOR_EXITO,
  payload: jugador,
});

const agregarJugadorError = () => ({
  type: AGREGAR_JUGADOR_ERROR,
});

//FUNCION QUE DESCARGA JUGADORES DE DDBB
export function obtenerJugadoresAction() {
  return async (dispatch) => {
    dispatch(descargarJugadores());

    try {
      const response = await clienteAxios.get("/jugadores");
      dispatch(descargarJugadoresExito(response.data));
    } catch (error) {
      console.log(error);
      dispatch(descargarJugadoresError());
    }
  };
}

const descargarJugadores = () => ({
  type: COMENZAR_DESCARGA_JUGADORES,
});

const descargarJugadoresExito = (jugadores) => ({
  type: DESCARGA_JUGADORES_EXITO,
  payload: jugadores,
});

const descargarJugadoresError = () => ({
  type: DESCARGA_JUGADORES_ERROR,
});
