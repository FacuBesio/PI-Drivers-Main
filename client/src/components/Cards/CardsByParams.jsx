import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { cleanDrivers, getDriverById } from "../../redux/actions_Drivers";
import { cleanErrors } from "../../redux/actions_Errors";
import { cleanAllDrivers, getAllDrivers } from "../../redux/actions_Drivers";
import style from "./Cards.module.css";

const CardsByParams = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //? REDUX STATES
  const drivers = useSelector((state) => state.drivers);
  const notFound_error = useSelector((state) => state.notFound_error);

  //* ERRORS CLEANER
  const errorsCleaner = () => {
    const filtersDefault = { filterTeams: "", filterDrivers: "" };
    const ordersDefault = { orderNombre: "", orderNacimiento: "" };
    const page = 1;
    dispatch(cleanErrors());
    dispatch(getAllDrivers(page, ordersDefault, filtersDefault));
    navigate("/home");
  };

  useEffect(() => {
    dispatch(getDriverById(id));
    return () => {
      dispatch(cleanDrivers());
    };
  }, [id]);

  return (
    <div className={style.cardsContainer}>
      <h1>DRIVERS</h1>
      <h1>{id}</h1>
      <div className={style.cards}>
        {notFound_error !== "" ? (
          <h4>NO SE HAN ENCONTRADO RESULTADOS</h4>
        ) : (
          drivers?.map((driver) => <Card key={driver.id} driver={driver} />)
        )}
      </div>
      <div className={style.buttonsCards}>
        {notFound_error !== "" ? (
          <div>
            <button onClick={errorsCleaner}>Volver</button>
          </div>
        ) : (
          <div>
            <Link to={`/home`}>
              <button>Volver</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardsByParams;
