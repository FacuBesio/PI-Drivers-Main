import is_dateFormat from "./is_dateFormat";
import is_only_letters from "./is_only_letters";

const ERROR_MESSAGES = {
  REQUIRED: "*Campo obligatorio",
  ONLY_LETTERS: "*En este campo admite únicamente letras",
  DATE_FORMAT:
    "*Ingresa un fecha valida 'dd-mm-aaaa'. Ej: 1 de Enero de 1990 => 01-01-1990",
};

function createInputValidator(driver, errors, setErrors) {
  const errors_aux = { ...errors };

  // Nombre
  errors_aux.nombre =
    (driver.apellido !== undefined ||
      driver.nacionalidad !== undefined ||
      driver.fecha_Nacimiento !== undefined ||
      driver.teams.length > 0 ||
      driver.descripcion !== undefined) &&
    !driver.nombre
      ? ERROR_MESSAGES.REQUIRED
      : driver.nombre === ""
      ? ERROR_MESSAGES.REQUIRED
      : !is_only_letters(driver.nombre)
      ? ERROR_MESSAGES.ONLY_LETTERS
      : driver.nombre !== ""
      ? ""
      : errors_aux.nombre;

  // Apellido
  errors_aux.apellido =
    (driver.nacionalidad !== undefined ||
      driver.fecha_Nacimiento !== undefined ||
      driver.teams.length > 0 ||
      driver.descripcion !== undefined) &&
    !driver.apellido
      ? ERROR_MESSAGES.REQUIRED
      : driver.apellido === ""
      ? ERROR_MESSAGES.REQUIRED
      : !is_only_letters(driver.apellido)
      ? ERROR_MESSAGES.ONLY_LETTERS
      : driver.apellido !== ""
      ? ""
      : errors_aux.apellido;

  // Nacionalidad
  errors_aux.nacionalidad =
    (driver.fecha_Nacimiento !== undefined ||
      driver.teams.length > 0 ||
      driver.descripcion !== undefined) &&
    !driver.nacionalidad
      ? ERROR_MESSAGES.REQUIRED
      : driver.nacionalidad === ""
      ? ERROR_MESSAGES.REQUIRED
      : !is_only_letters(driver.nacionalidad)
      ? ERROR_MESSAGES.ONLY_LETTERS
      : driver.nacionalidad !== ""
      ? ""
      : errors_aux.nacionalidad;

  // Fecha_Nacimiento
  errors_aux.fecha_Nacimiento =
    (driver.teams.length > 0 || driver.descripcion !== undefined) &&
    !driver.fecha_Nacimiento
      ? ERROR_MESSAGES.REQUIRED
      : driver.fecha_Nacimiento === ""
      ? ERROR_MESSAGES.REQUIRED
      : !is_dateFormat(driver.fecha_Nacimiento)
      ? ERROR_MESSAGES.DATE_FORMAT
      : driver.fecha_Nacimiento !== ""
      ? ""
      : errors_aux.fecha_Nacimiento;

  // Teams
  errors_aux.teams =
    driver.descripcion && driver.teams.length === 0
      ? ERROR_MESSAGES.REQUIRED
      : driver.teams[0] === "cleanerActive"
      ? ERROR_MESSAGES.REQUIRED
      : driver.teams.length > 0
      ? ""
      : errors_aux.teams;

  // Descripcion
  errors_aux.descripcion =
    driver.descripcion === ""
      ? ERROR_MESSAGES.REQUIRED
      : driver.descripcion !== ""
      ? ""
      : errors_aux.descripcion;

  setErrors(errors_aux);
}

export default createInputValidator;
