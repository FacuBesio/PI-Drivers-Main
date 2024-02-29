import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllTeams } from "../../redux/actions_Teams";
import { createDriver } from "../../redux/actions_Drivers";
import createInputValidator from "../../utils/formCreate/createInputValidator";
import dateLengthValidator from "../../utils/formCreate/dateLengthValidator";
import style from "./Form.module.css";

const CreateForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let disabledButton = true;

  //? REDUX STATES
  const allTeams = useSelector((state) => state.allTeams);
  //? REACT STATES
  const initialState = {
    nombre: undefined,
    apellido: undefined,
    descripcion: undefined,
    imagen: undefined,
    nacionalidad: undefined,
    fecha_Nacimiento: undefined,
    teams: [],
  };
  const [driver, setDriver] = useState(initialState);

  const [errors, setErrors] = useState({
    nombre: "",
    apellido: "",
    descripcion: "",
    imagen: "",
    nacionalidad: "",
    fecha_Nacimiento: "",
    teams: "",
  });

  //? HANDLERS
  //* HANDLER CHANGE
  const handlerChange = (event) => {
    const property = event.target.name;
    let value = event.target.value;
    let driverInput = {};

    property === "fecha_Nacimiento" && (value = dateLengthValidator(value));
    driverInput =
      property === "teams"
        ? value === "selectCleaner"
          ? { ...driver, teams: ["cleanerActive"] }
          : driver.teams[0] === "cleanerActive"
          ? { ...driver, teams: [Number(value)] }
          : { ...driver, teams: [...driver.teams, Number(value)] }
        : { ...driver, [property]: value };

    setDriver(driverInput);
    createInputValidator(driverInput, errors, setErrors);
  };

  //* HANDLER SUBMIT
  const handlerSubmit = (event) => {
    event.preventDefault();
    createDriver(driver);
    alert(
      `Se creo exitosamente al conductor/a: ${driver.nombre} ${driver.apellido}`
    );
    navigate("/home");
  };

  //? DISABLED BUTTON
  errors.nombre === "" &&
  driver.nombre &&
  errors.apellido === "" &&
  driver.apellido &&
  errors.nacionalidad === "" &&
  driver.nacionalidad &&
  errors.fecha_Nacimiento === "" &&
  driver.fecha_Nacimiento &&
  errors.teams === "" &&
  driver.teams.length > 0 &&
  errors.descripcion === "" &&
  driver.descripcion
    ? (disabledButton = false)
    : (disabledButton = true);
  console.log("disabledButton: ", disabledButton);

  //? COMPONENT MOUNTING
  useEffect(() => {
    document.body.style.backgroundImage =
      "url('../src/assets/img/paul-kansonkho-uFTk52FoNzo-unsplash.jpg')";
    dispatch(getAllTeams());
    return () => {
      document.body.style.backgroundImage = "";
      setDriver(initialState);
    };
  }, []);

  return (
    <div className={style.formContainer}>
      <h1>CREATE DRIVERS</h1>
      <form onSubmit={handlerSubmit}>
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
            placeholder="Nombre..."
          />
          <span>{errors.nombre}</span>

          {/* APELLIDO */}
          <label htmlFor="apellido">Last Name: </label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={driver.apellido}
            onChange={handlerChange}
            placeholder="Apellido..."
          />
          <span>{errors.apellido}</span>

          {/* NACIONALIDAD */}
          <label htmlFor="nacionalidad">Nationality: </label>
          <input
            type="text"
            id="nacionalidad"
            name="nacionalidad"
            value={driver.nacionalidad}
            onChange={handlerChange}
            placeholder="Nacionalidad..."
          />
          <span>{errors.nacionalidad}</span>

          {/* FECHA DE NACIMIENTO */}
          <label htmlFor="fecha_Nacimiento">Date of Birth: </label>
          <input
            type="text"
            id="fecha_Nacimiento"
            name="fecha_Nacimiento"
            value={driver.fecha_Nacimiento}
            onChange={handlerChange}
            placeholder="Fecha de Nacimiento (dd-mm-aa)..."
          />
          <span>{errors.fecha_Nacimiento}</span>

          {/* TEAMS */}
          <label htmlFor="teams">Teams: </label>
          <select
            multiple
            id="teams"
            name="teams"
            onChange={handlerChange}
            value={driver.teams}
          >
            <option value="cleanerActive" disabled hidden></option>
            <option value="selectCleaner" className={style.cleanOption}>
              Clean...
            </option>
            {allTeams?.map((team) => {
              return (
                <option key={team.id} value={team.id}>
                  {team.nombre}
                </option>
              );
            })}
          </select>
          <span>{errors.teams}</span>

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

          {/* DESCRIPCIÓN */}
          <label htmlFor="descripcion">Description: </label>
          <textarea
            type="text"
            id="descripcion"
            name="descripcion"
            value={driver.descripcion}
            onChange={handlerChange}
            placeholder="Descripción..."
          ></textarea>
          <span>{errors.descripcion}</span>
        </div>

        <div className={style.formButton}>
          {disabledButton ? (
            <button
              type="submit"
              id={style.buttonDisabled}
              disabled={disabledButton}
            >
              CREATE
            </button>
          ) : (
            <button
              type="submit"
              id={style.buttonEnabled}
              disabled={disabledButton}
            >
              CREATE
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CreateForm;
