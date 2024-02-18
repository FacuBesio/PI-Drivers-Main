import { Link } from "react-router-dom";
import style from "./Card.module.css";

const Card = ({ driver }) => {
  const nombreCompleto = driver.nombre + " " + driver.apellido;

  return (
    <div className={style.card}>
      {/* CARD */}

      <div className={style.textCard}>
      <Link to={`/detail/${driver.id}`}>
        <h2>. {nombreCompleto} .</h2>
        </Link>
        <h2>{driver.nacionalidad}</h2>
      </div>

      <div className={style.cardImg}>
        <div className={style.imgIcons}>
          {/* FAVORITES */}
          {/* {isFav ? (
            <button className={style.favoritesButton}>❤️</button>
          ) : (
            <button className={style.favoritesButton}>🤍</button>
          )} */}

          <h2>{driver.id}</h2>
        </div>

        {/* IMG */}
        <img src={driver.imagen} alt="Imagen Conductor" />
      </div>
    </div>
  );
};

export default Card;
