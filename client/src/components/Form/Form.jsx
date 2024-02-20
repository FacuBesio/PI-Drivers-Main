import { useState, useEffect } from "react";
// import Logo from "../../assets/Img/thumbbig-909641.webp"
// import validate from "../../functions/validation";
// import { validate } from '../../functions/validation';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllTeams } from "../../redux/actions_Teams";
import { createDriver } from "../../redux/actions_Drivers";
import style from "./Form.module.css";

const CreateForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //? REDUX STATES
  const allTeams = useSelector((state) => state.allTeams);

  const [driver, setDriver] = useState({
    nombre: "",
    apellido: "",
    descripcion: "",
    imagen: "",
    nacionalidad: "",
    fecha_Nacimiento: "",
    teams: [],
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handlerChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setDriver({ ...driver, [property]: value });
    // validate({ ...driver, [property]: value }, errors, setErrors);
  };

    
  const submitHandler = (event) => {
    event.preventDefault();
    createDriver(driver);
    alert(`Se creo exitosamente al conductor/a: ${driver.nombre} ${driver.apellido}`);
    // window.location.reload();
    navigate("/home");
  };

  useEffect(() => {
    dispatch(getAllTeams());
    return () => setDriver({
      nombre: "",
      apellido: "",
      descripcion: "",
      imagen: "",
      nacionalidad: "",
      fecha_Nacimiento: "",
      teams: [],
    });
  }, []);

  //   console.log(allTeams);

  return (
    <form onSubmit={submitHandler}>
      <div className={style.formImg}>{/* <img src={Logo} alt="" /> */}</div>
      {/***** INPUTS  *****/}
      <div className={style.formInputs}>
        {/* NOMBRE */}
        <label htmlFor="nombre">First Name: </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={driver.nombre}
          onChange={handlerChange}
          placeholder="Nombre"
        />
        <span>{errors.email}</span>

        {/* APELLIDO */}
        <label htmlFor="apellido">Last Name: </label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          value={driver.apellido}
          onChange={handlerChange}
          placeholder="Apellido"
        />
        <span>{errors.email}</span>

        {/* DESCRIPCIÓN */}
        <label htmlFor="descripcion">Description: </label>
        <input
          type="text"
          id="descripcion"
          name="descripcion"
          value={driver.descripcion}
          onChange={handlerChange}
          placeholder="Descripción"
        />
        <span>{errors.email}</span>

        {/* IMAGEN */}
        <label htmlFor="imagen">Image: </label>
        <input
          type="text"
          id="imagen"
          name="imagen"
          value={driver.imagen}
          onChange={handlerChange}
          placeholder="Imagen.jpg"
        />
        <span>{errors.email}</span>

        {/* NACIONALIDAD */}
        <label htmlFor="nacionalidad">Nationality: </label>
        <input
          type="text"
          id="nacionalidad"
          name="nacionalidad"
          value={driver.nacionalidad}
          onChange={handlerChange}
          placeholder="Nacionalidad"
        />
        <span>{errors.email}</span>

        {/* FECHA DE NACIMIENTO */}
        <label htmlFor="fecha_Nacimiento">Date of Birth: </label>
        <input
          type="text"
          id="fecha_Nacimiento"
          name="fecha_Nacimiento"
          value={driver.fecha_Nacimiento}
          onChange={handlerChange}
          placeholder="Fecha de Nacimiento"
        />
        <span>{errors.email}</span>

        {/* TEAMS */}
        <label htmlFor="teams">Teams: </label>
        <select id="teams" name="teams" onChange={handlerChange} defaultValue="">
          <option disabled value="">
            Equipo...
          </option>
          {allTeams?.map((team) => {
            return (
              <option key={team.id} value={team.id}>
                {team.nombre}
              </option>
            );
          })}
        </select>
        <span>{errors.email}</span>
      </div>

      <div className={style.formButton}>
        <button type="submit" disabled={errors.email || errors.password}>
          CREATE
        </button>
      </div>
    </form>
  );
};

export default CreateForm;
