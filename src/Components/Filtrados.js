import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

//importar funciones:

import Select from "./Select";
import {
  ordenar,
  filterContinente,
  filterName,
  search_Activities,
  actividad,
  filter,
} from "../redux/actions/actions.js";

const Filtrados = (props) => {
  const dispatch = useDispatch();
  const estado = useSelector((state) => state.filtros);
  const actividades = useSelector((state) => state.actividades);
  const paises = useSelector((state) => state.tableCountries);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    dispatch(filter(estado));
    dispatch(search_Activities());
  }, [estado]);

  const changeInput = (event) => {
    event.preventDefault();
    setCountries(paises.completed(event.target.value.trim()));
  };
  const getSingleCountry = (event) => {
    event.preventDefault();
    // console.log(event.target.search.value);
    dispatch(filterName(event.target.search.value.trim()));
  };

  return (
    <Container>
      <form onSubmit={getSingleCountry}>
        <button className="btn-search">
          <img src="images/search.svg" alt="search" />
        </button>
        <input
          autoComplete="off"
          type="search"
          placeholder="Buscar paises..."
          name="search"
          onChange={changeInput}
          list={"countries"}
        />
        <datalist id="countries">
          {countries.map((country, i) => {
            return <option key={i} id={country} value={country} />;
          })}
        </datalist>
      </form>
      {/* <button>BUSCAR</button> */}
      <Link to="/createActivity">
        <button className="btn-create">CREAR ACTIVIDAD</button>
      </Link>
      <Select
        label="Continent:"
        menu={[
          "Europe",
          "North America",
          "South America",
          "Asia",
          "Africa",
          "Oceania",
        ]}
        metodo={filterContinente}
      />
      <Select
        label="Activity"
        menu={actividades}
        metodo={filter}
        estado={estado}
        envio={actividad}
      />
      <Select menu={["A-Zㅤ", "Z-Aㅤ", "max", "min"]} metodo={ordenar} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  /* border: 2px solid red; */
  display: grid;
  grid-template-columns: 35% 25% repeat(3, 13%);
  justify-items: center;
  align-items: center;
  form {
    border: 1px solid white;
    display: flex;
    height: 65%;
    position: relative;
  }

  input {
    padding: 10px 10px 10px 40px;
    font-weight: bold;
    background-color: #585d6667;
    border-radius: 5px;
    box-sizing: border-box;
    color: var(--color-letra);
    width: 100%;

    &::placeholder {
      color: #b3b2ab;
    }
  }
  button.btn-search {
    height: 100%;
    padding: 10px 8px;
    border-radius: 5px;
    color: #fff;
    font-weight: bold;
    font-size: 0.8em;
    cursor: pointer;
    background-color: #496971;
    position: absolute;
  }

  button.btn-create {
    background-color: #518189;
    padding: 10px 8px;
    border-radius: 5px;
    /* border: 2px solid #8c9c9a; */
    color: white;
    font-weight: bold;
    font-size: 0.8em;
    cursor: pointer;
  }
  button.btn-create:focus {
    background-color: #769fa5;
  }
  button:focus {
    box-shadow: 0px 0px 0px 3px #518189;
  }
  button:hover {
    background-color: #558f98;
  }
`;

export default Filtrados;
