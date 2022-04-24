//Estos son las constantes de acciones:
export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_ID_COUNTRY = "GET_ID_COUNTRY";
export const SEARCH_NAME_COUNTRY = "SEARCH_NAME_COUNTRY";
export const ANTERIOR = "ANTERIOR";
export const SIGUIENTE = "SIGUIENTE";
export const GET_COUNTRIES = "GET_COUNTRIES";

//acciones para el ordenamiento quicksort:
export const ORDENAMIENTO = "ORDENAMIENTO";
export const SEARCH_ACTIVITIES = "SEARCH_ACTIVITIES";

//Acciones para el estado de la búsqueda:

export const ORDER = "ORDER";
export const CONTINENT = "CONTINENT";
export const NAME = "NAME";
export const ACTIVITY = "ACTIVITY";
export const ACTIVIDAD = "ACTIVIDAD";

//Busqueda:
export const FILTROS = "FILTROS";

//ACTIONS PARA CAMBIAR EL NODO:
export function goBack() {
  // console.log('algo paso en el anterior');
  return {
    type: ANTERIOR,
  };
}

export function goNext() {
  // console.log("algo paso en el siguiente");
  return {
    type: SIGUIENTE,
  };
}

//Accion de busqueda
export const ordenar = (value) => {
  return {
    type: ORDER,
    payload: value,
  };
};
export const filterContinente = (value) => {
  return {
    type: CONTINENT,
    payload: value,
  };
};
export const filterName = (value) => {
  return {
    type: NAME,
    payload: value,
  };
};
export const filterActivity = (value) => {
  return {
    type: ACTIVITY,
    payload: value,
  };
};

export const getCountry = (id) => {
  return function (dispatch) {
    return fetch(`http://localhost:3001/api/countries/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log('countries: ',data)
        dispatch({
          type: GET_ID_COUNTRY,
          payload: data.data,
        });
      })
      .catch((err) => {
        console.log("getCountry", err);
      });
  };
};

export const filter = (filtros) => {
  return async function (dispatch) {
    try {
      const res = await fetch(
        `http://localhost:3001/api/countries?name=${filtros.name}&continent=${filtros.continent}&order=${filtros.order}`
      );
      const data = await res.json();
      if (!data.error) {
        // console.log("filter: ", data);
        dispatch({
          type: FILTROS,
          payload: data.data,
        });
      }
    } catch (error) {
      console.log("filtros: ", error);
    }
  };
};

export const actividad = (name) => {
  console.log("se hace el envio a la ruta activity: ", name);
  if (name === "Activity") name = "";

  return function (dispatch) {
    return fetch(`http://localhost:3001/api/activities?nombre=${name}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("llego la respuesta: ", data);
        dispatch({
          type: ACTIVIDAD,
          payload: data.data, //Un arreglo de actividades
        });
      })
      .catch((err) => {
        console.log("activity fectch: ", err);
      });
  };
};

export const search_Activities = () => {
  return async function (dispatch) {
    try {
      const res = await fetch(`http://localhost:3001/api/activities?nombre=`);
      const data = await res.json();
      if (data.error) {
        alert(data.error.toString());
      } else {
        dispatch({
          type: SEARCH_ACTIVITIES,
          payload: data.data,
        });
      }
    } catch (err) {
      console.log("pedido de cantidad de activities fallo: ", err);
    }
  };
};

export const getCountries = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3001/api/countries");
      // console.log("respuesta de los paises: ", response);
      const data = await response.json();
      dispatch({
        type: GET_COUNTRIES,
        payload: data.data,
      });
    } catch (error) {
      console.log("ERROE N GET COUNTRIES: ", error);
    }
  };
};
