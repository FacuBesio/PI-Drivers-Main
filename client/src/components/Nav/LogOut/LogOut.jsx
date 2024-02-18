import { Link } from "react-router-dom";
import style from "./LogOut.module.css";

export default function LogOut({ logout }) {
  return (
    <div div className={style.logOut}>
      <Link to="/">
        <button onClick={logout}>LogOut</button>
      </Link>
    </div>
  );
}
