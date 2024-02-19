import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  cleanAllDrivers,
  getAllDrivers,
  getDriversByQueryName,
} from "../../redux/actions_Drivers";
import { backPage, nextPage, setPage } from "../../redux/actions_Pages";
import Card from "../Card/Card";
import style from "./Cards.module.css";

const Cards = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const nameQuery = queryParams.get("name");

  nameQuery ? console.log("nameQuery: ", nameQuery) : null;

  //? REDUX STATES
  const allDrivers = useSelector((state) => state.allDrivers);
  const page = useSelector((state) => state.page);
  const totalPages = useSelector((state) => state.totalPages);

  //* SET PAGE
  page === "" ? dispatch(setPage(1)) : null;

  //* NEXT PAGE
  const handlerNextPage = () => {
    page < totalPages && dispatch(nextPage(page));
  };
  //* BACK PAGE
  const handlerBackPage = () => {
    dispatch(backPage(page));
  };

  useEffect(() => {
    nameQuery
      ? dispatch(getDriversByQueryName(nameQuery, page))
      : dispatch(getAllDrivers(page));
    return () => dispatch(cleanAllDrivers());
  }, [nameQuery, page]);

  return (
    <div className={style.cardsContainer}>
      <h1>DRIVERS</h1>
      <div className={style.cards}>
        {allDrivers?.map((driver) => {
          return <Card key={driver.id} driver={driver} />;
        })}
      </div>
      <div className={style.buttonsPage}>
        <button onClick={handlerBackPage}>Back</button>
        <button onClick={handlerNextPage}>Next</button>
      </div>
    </div>
  );
};

export default Cards;
