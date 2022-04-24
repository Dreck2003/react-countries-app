import { useEffect } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import Information from "./Information";
import ShowActivities from "./ShowActivities";
import { useDispatch, useSelector } from "react-redux";
import { getCountry } from "../redux/actions/actions";
import { filter } from "../redux/actions/actions.js";

function CountryDescription(props) {
  const id = useParams().country;
  const dispatch = useDispatch();
  const estado = useSelector((state) => state.country);
  const viewEstado = useSelector((state) => state.filtros);
  console.log(viewEstado);

  useEffect(() => {
    dispatch(getCountry(id));
  }, []);

  // console.log('el id es : ',id);
  return (
    <Main>
      {console.log("se monto el card")}
      {console.log("las actividades del card: ", estado.Activities)}
      <section>
        <div>
          <img src={estado.img} alt="flag" />
        </div>
        <ShowActivities
          activities={estado.Activities ? estado.Activities : []}
        />
      </section>
      <Information info={{ ...estado }} />

      <Link
        to="/home"
        className="btn-back"
        onClick={(e) => {
          viewEstado.name = "";
          dispatch(filter(viewEstado));
        }}
      >
        BACK
      </Link>
    </Main>
  );
}

const Main = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100vh;
  color: #6c597c;
  position: relative;
  opacity: 0.97;
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  section {
    width: 40%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex-wrap: wrap;

    div {
      border: 2px solid white;
      height: 200px;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  .btn-back {
    text-decoration: none;
    cursor: pointer;
    border: none;
    background-color: #59506ae0;
    position: absolute;
    bottom: 0;
    width: 20%;
    margin: 10px 40%;
    padding: 5px 10px;
    letter-spacing: 2px;
    font-weight: bold;
    color: white;
  }
  .btn-back:focus {
    box-shadow: 0px 0px 0px 3px #7081a6;
  }
`;

export default CountryDescription;
