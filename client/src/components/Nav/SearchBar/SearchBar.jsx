import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./SearchBar.module.css";
import { useSelector, useDispatch } from "react-redux";
// import { onSearch } from "../../../redux/actions";

export default function SearchBar({ logout }) {
  // const dispatch = useDispatch();
  // const characters = useSelector((state) => state.characters);
  // const [inputValue, setInputValue] = useState("");

  // const hadleChange = (event) => {
  //   setInputValue(event.target.value);
  // };

  // const hadleClick = () => {
  //   dispatch(onSearch(inputValue, characters));
  //   setInputValue("");
  // };

  // return (
  //   <div className={style.search_container}>
  //     {/* SEARCH BAR */}
  //     <input
  //       type="search"
  //       onChange={hadleChange}
  //       value={inputValue}
  //       placeholder="Ingrese un Id..."
  //     />
      
  //     {/* SEARCH BUTTON */}
  //     <button onClick={hadleClick}>Agregar</button>
  //   </div>
  // );
}
