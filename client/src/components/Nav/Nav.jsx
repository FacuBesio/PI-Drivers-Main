import SearchBar from "./SearchBar/SearchBar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPage } from "../../redux/actions_Pages";
import { cleanHome } from "../../redux/actions_Pages";
import style from "./Nav.module.css";

export default function Nav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  //* CLEANER
  const cleaner = () => {
    dispatch(setPage(1));
    dispatch(cleanHome(true));
    navigate("/home");
  };

  //* REGEX: 'pathname' TIENE ID
  // function has_Id(pathname) {
  //   const regex = /^\/home\/\d+$/i;
  //   return regex.test(pathname);
  // }

  return (
    <div className={style.navContainer}>
      <nav>
        {/* MENU */}
        <div className={style.menu}>
        <button onClick={cleaner}>Home</button>
          {/* {pathname.startsWith("/home") && has_Id(pathname) 
          ? (
            <Link to={`/home`}>
              <button>Home</button>
            </Link>
          ) : (
            <button onClick={cleaner}>Home</button>
          )} */}

          <Link to="/create">
            <button>Create</button>
          </Link>
        </div>

        {/* SEARCH BAR */}
        {pathname.startsWith("/home") && <SearchBar />}

        {/* LOG OUT */}
        <div className={style.logOut}>
          <Link to="/about">
            <button>About</button>
          </Link>

          <Link to="/">
            <button>LogOut</button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
