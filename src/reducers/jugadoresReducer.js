import {
  AGREGAR_JUGADOR,
  AGREGAR_JUGADOR_EXITO,
  AGREGAR_JUGADOR_ERROR,
  COMENZAR_DESCARGA_JUGADORES,
  DESCARGA_JUGADORES_EXITO,
  DESCARGA_JUGADORES_ERROR,
} from "../types";
//cada reducer tiene su propio state
const initalState = {
  jugadores: [],
  titulares: [],
  suplentes: [],
  error: null,
  loading: false,
};

export default function (state = initalState, action) {
  switch (action.type) {
    case COMENZAR_DESCARGA_JUGADORES:
    case AGREGAR_JUGADOR:
      return {
        ...state,
        loading: true,
      };
    case AGREGAR_JUGADOR_EXITO:
      return {
        ...state,
        loading: false,
        titulares: [...state.titulares, action.payload],
        jugadores: state.jugadores.filter((j) => j.id !== action.jugador.id),
      };
    case AGREGAR_JUGADOR_ERROR:
    case DESCARGA_JUGADORES_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case DESCARGA_JUGADORES_EXITO:
      return {
        ...state,
        loading: false,
        error: null,
        jugadores: action.payload,
      };
    default:
      return state;
  }
}
