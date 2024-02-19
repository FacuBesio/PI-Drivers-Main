import { useState } from "react";
import { Link } from "react-router-dom";
import { inputIsNumber, inputIsUUID } from "../../../utils/inputValidation";
import style from "./SearchBar.module.css";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");

  //* HANDLERS
  const hadlerChange = (event) => {
    setInputValue(event.target.value);
  };

  const hadlerClick = () => {
    if (!inputValue || inputValue === "")
      return alert("Ingrese un valor de busqueda");
    setInputValue("");
  };

  //* INPUT VALIDATION
  let serchInput = "";
  if (inputValue !== "" && inputValue !== null && inputValue !== undefined) {
    (inputIsNumber(inputValue) || inputIsUUID(inputValue))
      ? (serchInput = `/${inputValue}`)
      : (serchInput = `?name=${inputValue}`);
  }

  // console.log(serchInput);

  return (
    <div className={style.search_container}>
      {/* SEARCH BAR */}
      <input
        type="search"
        onChange={hadlerChange}
        value={inputValue}
        placeholder="Ingrese un Id..."
      />

      {/* SEARCH BUTTON */}
      <Link to={`/home${serchInput}`}>
        <button onClick={hadlerClick}>Buscar</button>
      </Link>
    </div>
  );
}
