import styled from "styled-components";

const Activity = ({ dificultad, duration, key, name, season }) => {
  let nombre = name ? name[0].toUpperCase() + name.slice(1) : "";
  return (
    <Listado key={key}>
      <h2>{nombre}</h2>
      <span>Dificultad: {dificultad}</span>
      <span>Duration: {duration}</span>
      <span>Season: {season}</span>
    </Listado>
  );
};

const Listado = styled.article`
  border: 2px solid #f2f2e6;
  display: grid;
  height: 100%;
  align-items: center;
  justify-items: start;
  margin-left: 10px;
  width: 150px;

  grid-template-rows: repeat(auto-fit, minmax(30px, 1fr));
  border-radius: 5px;
  span:before {
    content: "* ";
    font-weight: bold;
  }
  span {
    width: 150px;
    text-align: start;
    padding-left: 10px;
  }
  h2 {
    /* background-color: yellow; */
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* font-size: 1.1rem; */
    font-weight: bold;
  }
`;

export default Activity;
