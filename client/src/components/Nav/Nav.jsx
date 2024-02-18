import SearchBar from "./SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";

export default function Nav({ logout, pathname }) {
  return (
    <nav>
      {/* MENU */}
      <div className={style.menu}>
        <Link to="/home">
          <button>Home</button>
        </Link>

        <Link to="/favorites">
          <button>Favorites</button>
        </Link>

        <Link to="/about">
          <button>About</button>
        </Link>
      </div>

      {/* SEARCH BAR */}
      {pathname === "/home" && (
        <SearchBar logout={logout} />
      )}

      {/* LOG OUT */}
      <div className={style.logOut}>
        <Link to="/">
          <button onClick={logout}>LogOut</button>
        </Link>
      </div>
    </nav>
  );
}
