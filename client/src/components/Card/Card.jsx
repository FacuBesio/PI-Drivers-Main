import { Link } from "react-router-dom";
import style from "./Card.module.css";

const Card = ({ driver }) => {
  const nombreCompleto = driver.nombre + " " + driver.apellido;
  let teams = "";
  if (driver.teams) {
    driver.teams.forEach((team, index) => {
      if (index === 0) {
        teams = team;
      } else {
        teams = teams + ", " + team;
      }
    });
  }

  return (
    <div className={style.card}>
      {/* CARD */}
      <div className={style.textCard}>
        <Link to={`/detail/${driver.id}`}>
          <h2>. {nombreCompleto} .</h2>
        </Link>
      </div>

      <div className={style.cardImg}>
        {/* IMG HEADER */}
        <div className={style.cardImgHeader}>
          <h2>{driver.nacionalidad}</h2>
          {/* <h2>{driver.fecha_Nacimiento}</h2> */}
        </div>

        {/* IMG */}
        <div className={style.cardImgBackGround}>
          <img src={driver.imagen} alt="Imagen Conductor" />
        </div>
        {/* IMG FOOTER */}
        <div className={style.cardImgFooter}>
          {/* <h2>{driver.nacionalidad}</h2> */}
          {/* <h2>{driver.fecha_Nacimiento}</h2> */}
          <h3>{driver.fecha_Nacimiento}</h3>
          <h2>Teams: {teams}</h2>
          {/* <h3></h3> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
