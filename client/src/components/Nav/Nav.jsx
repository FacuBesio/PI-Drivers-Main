import SearchBar from "./SearchBar/SearchBar";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPage } from "../../redux/actions_Pages";
import style from "./Nav.module.css";

export default function Nav({ logout }) {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  //* SET PAGE
  const handlerSetPage = () => {
    dispatch(setPage(1));
  };

  return (
    <nav>
      {/* MENU */}
      <div className={style.menu}>
        <Link to="/home">
          <button onClick={handlerSetPage}>Home</button>
        </Link>

        <Link to="/favorites">
          <button>Favorites</button>
        </Link>

        <Link to="/create">
          <button>Create</button>
        </Link>

        <Link to="/about">
          <button>About</button>
        </Link>
      </div>

      {/* SEARCH BAR */}
      {pathname.startsWith("/home") && <SearchBar logout={logout} />}

      {/* LOG OUT */}
      <div className={style.logOut}>
        <Link to="/">
          <button onClick={logout}>LogOut</button>
        </Link>
      </div>
    </nav>
  );
}
