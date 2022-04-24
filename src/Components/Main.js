import styled from "styled-components";
import Countrycard from "./CountryCard"; //importamos las cartas:
import { useSelector } from "react-redux";

const Main = (props) => {
  const estado = useSelector((state) => state.viewCountry);

  // console.log('se renderiza el main')

  return (
    <Container style={{ color: "white" }}>
      {console.log("EL estado: ", estado)}
      {estado.hasOwnProperty("data") ? (
        estado.data.map((country) => (
          <Countrycard
            img={country.img}
            name={country.name}
            continent={country.continent}
            id={country.id}
            key={country.id}
          />
        ))
      ) : (
        <h3 className="not-exist">Countries not found</h3>
      )}
    </Container>
  );
};

const Container = styled.section`
  padding: 10px;
  font-weight: bold;
  width: 96%;
  margin: 0% 2%;
  height: 100%;
  min-height: calc(100vh - 120px);
  /* border:2px dashed violet; */
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: row;
  position: relative;
  .not-exist {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default Main;
