import {
  // GET_ALL_COUNTRIES,
  GET_ID_COUNTRY,
  GET_COUNTRIES,
  SIGUIENTE,
  ANTERIOR,
  NAME,
  ORDER,
  CONTINENT,
  ACTIVITY,
  FILTROS,
  ACTIVIDAD,
  SEARCH_ACTIVITIES,
} from "../actions/actions";

import { crearLista } from "../../functions/Lista";
import sort from "../../functions/quicksort.js";
import recorrido from "../../functions/recorridoLista";
import { Table } from "../../functions/Autocomplete";

const initialState = {
  allCountries: {}, //esto me trae todo los paises y va a ser una lista es una lista;
  viewCountry: {}, //Esto es el nodo al que el paginado esta subscrito y el main muestra;
  country: {}, //Este es para el country que se muestra en el countryCard;
  tableCountries: new Table(),
  filtros: {
    name: "",
    continent: "",
    order: "A-Zㅤ",
  },
  actividades: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ID_COUNTRY:
      // console.log("se trajo el country: ", action.payload);
      return {
        ...state,
        country: {
          ...action.payload,
        },
      };

    //ESTOS SON REDUCER PARA EL PREVIOUS Y NEXT:

    case SIGUIENTE:
      if (state.viewCountry.hasOwnProperty("next") && state.viewCountry.next) {
        return {
          ...state,
          viewCountry: state.viewCountry.next,
        };
      }
      return { ...state };

    case ANTERIOR:
      if (
        state.viewCountry.hasOwnProperty("previous") &&
        state.viewCountry.previous
      ) {
        return {
          ...state,
          viewCountry: state.viewCountry.previous,
        };
      }
      return { ...state };

    //Reducers para el filtrado de las busquedas:

    case NAME:
      return {
        ...state,
        filtros: {
          ...state.filtros,
          name: action.payload,
        },
      };

    case ORDER:
      if (action.payload === "min") {
        // console.log(state);
        let listaToArray = recorrido(state.allCountries);

        let arrayOrder = sort(listaToArray);
        const listaOrdenada = crearLista(arrayOrder);
        // console.log("reducer Ordenamiento: ", listaOrdenada);
        // console.log('mi lista ordenada: ',listaOrdenada);
        return {
          ...state,
          allCountries: listaOrdenada,
          viewCountry: { ...listaOrdenada.head },
        };
      } else {
        return {
          ...state,
          filtros: {
            ...state.filtros,
            order: action.payload.trim(),
          },
        };
      }

    case CONTINENT:
      if (action.payload === "Continent:") {
        return {
          ...state,
          filtros: {
            ...state.filtros,
            continent: "",
          },
        };
      }

      return {
        ...state,
        filtros: {
          ...state.filtros,
          continent: action.payload,
        },
      };

    case ACTIVITY:
      return {
        ...state,
        filtros: {
          ...state.filtros,
          activity: action.payload,
        },
      };

    case ACTIVIDAD:
      let arrayAct = [];

      action.payload.forEach((activ) => {
        arrayAct = arrayAct.concat(activ.Countries);
      });

      const all = crearLista(arrayAct);

      return {
        ...state,
        allCountries: all,
        viewCountry: { ...all.head },
      };

    case SEARCH_ACTIVITIES:
      return {
        ...state,
        actividades: action.payload.map((act) => act.name),
      };

    case FILTROS:
      const listaNueva = crearLista(action.payload);
      // console.log("los filtros son: ", state.filtros);
      // console.log({
      //   ...state,
      //   allCountries: listaNueva,
      //   viewCountry: { ...listaNueva.head },
      // });

      return {
        ...state,
        allCountries: listaNueva,
        viewCountry: { ...listaNueva.head },
      };

    case GET_COUNTRIES:
      let tableCopy = new Table();
      action.payload.forEach((country) => {
        tableCopy.add(country.name);
      });

      return {
        ...state,
        tableCountries: tableCopy,
      };

    default:
      return { ...state };
  }
};

export default Reducer;
