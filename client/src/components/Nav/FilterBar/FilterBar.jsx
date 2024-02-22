import { Link } from "react-router-dom";
import style from "./FilterBar.module.css";

export default function FilterBar() {
  return (
    <div className={style.selectoresFiltroOrdenado}>
      <select name="order" defaultValue="orderCharacter">
        <option value="orderCharacter" disabled="disabled">
          Order...
        </option>
        <option value="ascendente">Ascendente</option>
        <option value="descendente">Descendente</option>
      </select>
      <select name="filter" defaultValue="All">
        <option value="All">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
}
