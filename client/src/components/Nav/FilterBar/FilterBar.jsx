import { Link } from "react-router-dom";
import style from "./FilterBar.module.css";

export default function FilterBar({ logout }) {

    return (
        <div className={style.search_container}>
          {/* FILTER */}
         
    
          {/* LOGOUT */}
          <Link to="/">
            <button onClick={logout}>LogOut</button>
          </Link>
        </div>
      );
}