import styled from "styled-components";
import { useState, useEffect } from "react";
// import recorrido from '../functions/recorridoLista.js';

function* cortes(countries) {
  let array = [];
  array.push(countries[0]);

  for (let i = 1; i < countries.length; i++) {
    if (i % 50 === 0) {
      //Llego hasta el multiplo de 83
      yield array;
      array = [];
    }
    if (i === countries.length - 1) {
      array.push(countries[i]);
      return array;
    }

    array.push(countries[i]);
  }
}

export const Modal = (props) => {
  const [visible, setVisible] = useState("hidden");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/countries?name")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCountries(data.data);
      })
      .catch((err) => {
        console.log("ModalCountry: ", err);
      });
  }, []);

  let funcion;
  if (countries.length) {
    funcion = cortes(countries);
  }

  return (
    <Container>
      {/* {console.log(estado.size)} */}
      <input
        className="btn-countries"
        type="button"
        value="Search countries"
        onClick={() => {
          setVisible("visible");
        }}
      />

      <div style={{ visibility: visible }} className="ctn-fixed">
        {props.error && <span className="error_countries">{props.error}</span>}

        <main>
          <span
            onClick={() => {
              setVisible("hidden");
            }}
          >
            X
          </span>
          <header>
            Selecciona los paises!
            {/* {console.log("el error en el modal: ", props.error)} */}
          </header>
          <section className="sec-container" onClick={props.action}>
            <section className="sec-countries">
              {countries.length &&
                funcion.next().value.map((country) => (
                  <label key={country.id}>
                    <input type="checkbox" name="ids" value={country.id} />
                    {country.name}
                  </label>
                ))}
            </section>
            <section className="sec-countries">
              {countries.length &&
                funcion.next().value.map((country) => (
                  <label key={country.id}>
                    <input
                      type="checkbox"
                      name="ids"
                      value={country.id}
                      // onClick={props.action}
                    />
                    {country.name}
                  </label>
                ))}
            </section>
            <section className="sec-countries">
              {countries.length &&
                funcion.next().value.map((country) => (
                  <label key={country.id}>
                    <input
                      type="checkbox"
                      name="ids"
                      value={country.id}
                      // onClick={props.action}
                    />
                    {country.name}
                  </label>
                ))}
            </section>
            <section className="sec-countries">
              {countries.length &&
                funcion.next().value.map((country) => (
                  <label key={country.id}>
                    <input
                      type="checkbox"
                      name="ids"
                      value={country.id}
                      // onClick={props.action}
                    />
                    {country.name}
                  </label>
                ))}
            </section>
            <section className="sec-countries">
              {countries.length &&
                funcion.next().value.map((country) => (
                  <label key={country.id}>
                    <input
                      type="checkbox"
                      name="ids"
                      value={country.id}
                      // onClick={props.action}
                    />
                    {country.name}
                  </label>
                ))}
            </section>
          </section>
        </main>
      </div>
    </Container>
  );
};

const Container = styled.div`
  /* visibility: hidden; */
  .btn-countries {
    outline: none;
    border: none;
    color: white;
    font-weight: 500;
    padding: 5px 10px;
    background-color: #477287;
    cursor: pointer;
  }

  div {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #595a5ceb;
    height: 100vh;
    /* opacity:0.4; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .error_countries {
    margin-bottom: 10px;
    color: #e2e1e7;
    padding: 5px 20px;
    background-color: #e07335d6;
    box-shadow: 0px 0px 0px 2px #dc9e52b0;
    border-radius: 3px;
  }
  .error_countries:before {
    content: "!  ";
    color: #e6d9d9;
    font-weight: bold;
  }

  main {
    width: 80%;
    height: 400px;
    background-color: #5fa2a9d4;
    /* padding: 0px 10px; */
    position: relative;
    overflow-y: scroll;
    span {
      position: absolute;
      top: 2px;
      right: 2px;
      padding: 2px 6px;
      cursor: pointer;
      margin-bottom: 10px;
      font-size: 0.95rem;
      font-weight: bold;
      border-radius: 5px;
      cursor: pointer;
    }
    span:hover {
      background-color: red;
    }

    header {
      font-size: 1.2rem;
      background-color: #7ba3a7;
      padding: 3px;
      font-weight: bold;
      letter-spacing: 1.5px;
    }
    .sec-container {
      display: flex;
      flex-direction: row;
      padding: 0px 10px;
    }
  }
  main::-webkit-scrollbar {
    width: 12px; /* width of the entire scrollbar */
  }
  main::-webkit-scrollbar-track {
    background: #7ba3a7; /* color of the tracking area */
  }
  main::-webkit-scrollbar-thumb {
    background-color: gray; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    border: 3px solid #7ba3a7; /* creates padding around scroll thumb */
  }
  .sec-countries {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: calc(25% - 10px);
    label {
      flex-direction: row;
      margin-bottom: 10px;
      font-size: 15px;
      font-weight: 400;
    }
  }
`;

export const Fieldset = (props) => {
  return (
    <fieldset>
      <legend>SEASONS</legend>
      <input
        type="radio"
        name="season"
        value="Spring"
        onChange={props.action}
      />
      Spring
      <input
        type="radio"
        name="season"
        value="Summer"
        onChange={props.action}
      />
      Summer
      <input
        type="radio"
        name="season"
        value="Autumn"
        onChange={props.action}
      />
      Autumn
      <input
        type="radio"
        name="season"
        value="Winter"
        onChange={props.action}
      />
      Winter
    </fieldset>
  );
};
