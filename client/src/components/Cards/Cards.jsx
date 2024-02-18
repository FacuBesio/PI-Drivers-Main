import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllDrivers } from "../../redux/actions_Drivers";
import { backPage, nextPage, setPage } from "../../redux/actions_Pages";
import Card from "../Card/Card";
import style from "./Cards.module.css";

const Cards = () => {
  
  const dispatch = useDispatch();
  //? REDUX STATES
  const allDrivers = useSelector((state) => state.allDrivers);
  const page = useSelector((state) => state.page);
  page === "" ? dispatch(setPage(1)) : null;

  //* NEXT PAGE
  const handlerNextPage = () => {
    dispatch(nextPage(page));
  };
  //* BACK PAGE
  const handlerBackPage = () => {
    dispatch(backPage(page));
  };

  useEffect(() => {
    dispatch(getAllDrivers(page));
  }, [page]);

  return (
    <div className={style.cardsContainer}>
      <h1>DRIVERS</h1>
      <div className={style.cards}>
        {allDrivers?.map((driver) => {
          return <Card key={driver.id} driver={driver} />;
        })}
      </div>
      <div></div>
      <button onClick={handlerBackPage}>Back</button>
      <button onClick={handlerNextPage}>Next</button>
    </div>
  );
};

export default Cards;
