import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllDrivers } from "../../redux/actions_Drivers";
import Card from "../Card/Card";
// import style from "./Cards.module.css";

const Cards = () => {
  const dispatch = useDispatch();
  const allDrivers = useSelector((state) => state.allDrivers);

  useEffect(() => {
    dispatch(getAllDrivers());
  }, []);
  
  console.log(allDrivers);
  
  return (
    <div>
      {/* <h1>RICK AND MORTY</h1> */}
      <div>
        <h1>TEST CARDS "/home"</h1>
        {/* {allDrivers?.map((character) => {
          return <Card key={character.id} character={character} />;
        })} */}
      </div>
    </div>
  );
};

export default Cards;
