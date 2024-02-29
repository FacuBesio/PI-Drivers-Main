import img from "../../assets/img/f1_1.webp";
import style from "./Landing.module.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    // <form onSubmit={submitHandler}>
    <div className={style.formContainer}>
      <form>
        <div className={style.formImg}>
          <img src={img} alt="" />
        </div>

     

        <div className={style.formButton}>
          {/* <button type="submit" disabled={errors.email || errors.password}> */}
          <Link to="/home">
            <button>Start</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Landing;
