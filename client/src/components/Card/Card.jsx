import { Link } from "react-router-dom";
import style from "./Card.module.css";

const Card = ({ driver }) => {
  const nombreCompleto = driver.nombre + " " + driver.apellido;
  let teams = "";
  if (driver.teams) {
    driver.teams.forEach((team, index) => {
      // if (teams === "" &&  driver.teams.length === 1) {
      //   teams = team;
      // } else {
      //   teams = teams + ", " + team;
      // }
      
      
      if (index === 0) {
         teams = team;
      } else {
        teams = teams + ", " + team;
      }

      // else if (index !== array.length - 1) {
      //   teams = teams + ", " + team;
      // } else if (teams === "" && index === array.length - 1) {
      //   teams = team + ", ";
      // } else {
      //   teams = teams + ", " + team;
      // }
    });
  }

  return (
    <div className={style.card}>
      {/* CARD */}

      <div className={style.textCard}>
        <Link to={`/detail/${driver.id}`}>
          <h2>. {nombreCompleto} .</h2>
        </Link>

        {/* <h2>{driver.teams}</h2> */}
      </div>

      <div className={style.cardImg}>
        <div className={style.imgIcons}>
          {/* FAVORITES */}

          {/* <button className={style.favoritesButton}>🤍</button> */}

          <h2>{driver.nacionalidad}</h2>
          <h3>Teams: {teams}</h3>
        </div>

        {/* IMG */}
        <img src={driver.imagen} alt="Imagen Conductor" />
      </div>
    </div>
  );
};

export default Card;
