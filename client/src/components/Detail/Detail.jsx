import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getDriverDetail,
  cleanDriverDetail,
} from "../../redux/actions_Drivers";
import { Link, useParams } from "react-router-dom";
import style from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const driverDetail = useSelector((state) => state.driverDetail);
  const nombreCompleto = driverDetail.nombre + " " + driverDetail.apellido;
  let teams = "";
  if (driverDetail.teams) {
    driverDetail.teams.forEach((team) => {
      teams === "" ? (teams = team + ", ") : (teams = teams + ", " + team);
    });
  }

  useEffect(() => {
    dispatch(getDriverDetail(id));
    return () => dispatch(cleanDriverDetail());
  }, [id]);

  console.log("driverDetail.imagen: ", driverDetail.imagen);
  return (
    <div className={style.detail}>
      <section>
        <div className={style.detailContainer}>
          <div className={style.detailTitle}>
            <h1>{nombreCompleto.toUpperCase()}</h1>
          </div>
          <div className={style.detailText}>
            <h2>• Nacionalidad: {driverDetail.nacionalidad}.</h2>
            <h2>• Teams: {teams}.</h2>
            <h2>• Fecha Nacimiento: {driverDetail.fecha_Nacimiento}.</h2>
            <h2>• Descripción: {driverDetail.descripcion}.</h2>
          </div>
        </div>
        <div className={style.detailImg}>
          {driverDetail.imagen ? (
            <img src={driverDetail.imagen} alt="Imagen Personaje" />
          ) : (
            <p>Cargando imagen...</p>
          )}
        </div>
      </section>
      <div>
        <Link to={`/home`}>
          <button>Volver</button>
        </Link>
      </div>
    </div>
  );
};

export default Detail;
