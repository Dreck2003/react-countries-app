import styled from "styled-components";
import Activity from "./Activity";

const ShowActivities = ({ activities }) => {
  return (
    <Activities>
      <article className="activities">
        {activities && activities.length ? (
          Array.isArray(activities) &&
          activities.map((act, index) => (
            <Activity
              dificultad={act.dificultad}
              duration={act.duration}
              key={index}
              name={act.name}
              season={act.season}
            />
          ))
        ) : (
          <h1>NO HAY ACTIVIDADES PARA ESTE COUNTRY</h1>
        )}
        {/* <Spiner/> */}
      </article>
    </Activities>
  );
};

const Activities = styled.main`
  border: 2px solid white;
  height: 250px;
  width: 100%;

  article.activities {
    position: relative;
    padding: 5px;
    /* width: 100%; */
    height: 100%;
    overflow-x: scroll;
    /* display: grid;
    grid-template-columns: repeat(auto-fit, 140px); */
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  article.activities::-webkit-scrollbar {
    width: 20px !important;
  }

  article.activities::-webkit-scrollbar-track {
    background-color: #8bf0c487; /* color of the tracking area */
  }
  article.activities::-webkit-scrollbar-thumb {
    background-color: #59506ae0; /* color of the scroll thumb */
    border-radius: 10px; /* roundness of the scroll thumb */
    /* border: 3px solid #3f588cb5; */
    width: 10px;
  }

  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default ShowActivities;
