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

        <div className={style.formInputs}>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            id="email"
            name="email"
            // value={userData.email}
            // onChange={handleChange}
            placeholder="example@mail.com"
          />
          {/* <span>{errors.email}</span> */}

          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            // value={userData.password}
            // onChange={handleChange}
            placeholder="******"
          />
          {/* <span>{errors.password}</span> */}
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
