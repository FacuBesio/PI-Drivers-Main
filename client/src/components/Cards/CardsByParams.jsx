import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { cleanDrivers, searchDriver } from "../../redux/actions_Drivers";
import { paramsValidation } from "../../utils/paramsValidation";
import style from "./Cards.module.css";

const CardsByParams = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //? REDUX STATES
  const drivers = useSelector((state) => state.drivers);

  useEffect(() => {
    paramsValidation(id) ? dispatch(searchDriver(id)) : navigate("/home");
    return () => dispatch(cleanDrivers());
  }, [id]);

  return (
    <div className={style.cardsContainer}>
      <h1>DRIVERS</h1>
      <div className={style.cards}>
        {drivers?.map((driver) => {
          return <Card key={driver.id} driver={driver} />;
        })}
      </div>
      <div className={style.buttonsPage}>
      <Link to={`/home`}>
        <button>Volver</button>
        </Link>
      </div>
    </div>
  );
};

export default CardsByParams;
