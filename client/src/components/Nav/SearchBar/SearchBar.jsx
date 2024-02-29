import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { inputIsNumber, inputIsUUID } from "../../../utils/inputValidation";
import { setPage } from "../../../redux/actions_Pages";
import style from "./SearchBar.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  let disabledButton = true;

  // REACT STATES
  const [inputValue, setInputValue] = useState("");
  inputValue === "" ? disabledButton = true : disabledButton = false;

  //* HANDLERS
  const hadlerChange = (event) => {
    setInputValue(event.target.value);
  };

  const hadlerClick = () => {
    dispatch(setPage(1));
    setInputValue("");
  };

  //* INPUT VALIDATION TYPE
  let serchInput = "/home";
  if (inputValue !== "" && inputValue !== null && inputValue !== undefined) {
    inputIsNumber(inputValue) || inputIsUUID(inputValue)
      ? (serchInput = `/home/${inputValue}`)
      : (serchInput = `/home?name=${inputValue}`);
  }

  return (
    <div className={style.search_container}>
      {/* SEARCH BAR */}
      <input
        type="search"
        onChange={hadlerChange}
        value={inputValue}
        placeholder="Ingrese id o nombre..."
      />

      {/* SEARCH BUTTON */}
      <Link to={`${serchInput}`}>
        {disabledButton ? (
          <button
            onClick={hadlerClick}
            id={style.buttonDisabled}
            disabled={disabledButton}
          >
            Buscar
          </button>
        ) : (
          <button
            onClick={hadlerClick}
            id={style.buttonEnabled}
            disabled={disabledButton}
          >
            Buscar
          </button>
        )}
      </Link>
    </div>
  );
}
