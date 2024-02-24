const ERROR_MESSAGES = {
  REQUIRED: "*Campo obligatorio",
  ONLY_LETTERS: "*En este campo admite únicamente letras",
  DATE_FORMAT: "* Ingresar con formato: 'dd-mm-aaaa'.",
  EMAIL_INVALID: "*Por favor, ingrese un Email válido",
  EMAIL_LENGTH: "*El Email no puede superar 35 caracteres",
  PASSWORD_REQUIRED: "*Debe ingresar una contraseña",
  PASSWORD_LENGTH: "*La contraseña debe tener entre 6 y 10 caracteres",
  PASSWORD_DIGIT: "*La contraseña debe tener al menos un número",
};

//? REGEX
function is_only_letters(text) {
  const regex = /^[a-zA-Z\u00C0-\u017F]+$/;
  return regex.test(text);
}

function is_dateFormat(date) {
  const regex = /^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-\d{4}$/;
  return regex.test(date);
}

export function createInputValidator(driver, errors, setErrors) {
  const errors_aux = { ...errors };

  // Nombre
  errors_aux.nombre =
    driver.nombre === ""
      ? ERROR_MESSAGES.REQUIRED
      : !is_only_letters(driver.nombre)
      ? ERROR_MESSAGES.ONLY_LETTERS
      : driver.nombre !== ""
      ? ""
      : errors_aux.nombre;

  // Apellido
  errors_aux.apellido =
    driver.apellido === ""
      ? ERROR_MESSAGES.REQUIRED
      : !is_only_letters(driver.apellido)
      ? ERROR_MESSAGES.ONLY_LETTERS
      : driver.apellido !== ""
      ? ""
      : errors_aux.apellido;

  // Descripcion
  errors_aux.descripcion =
    driver.descripcion === ""
      ? ERROR_MESSAGES.REQUIRED
      : driver.descripcion !== ""
      ? ""
      : errors_aux.descripcion;

  // Nacionalidad
  errors_aux.nacionalidad =
    driver.nacionalidad === ""
      ? ERROR_MESSAGES.REQUIRED
      : !is_only_letters(driver.nacionalidad)
      ? ERROR_MESSAGES.ONLY_LETTERS
      : driver.nacionalidad !== ""
      ? ""
      : errors_aux.nacionalidad;

  // fecha_Nacimiento
  errors_aux.fecha_Nacimiento =
    driver.fecha_Nacimiento === ""
      ? ERROR_MESSAGES.REQUIRED
      : !is_dateFormat(driver.fecha_Nacimiento)
      ? ERROR_MESSAGES.DATE_FORMAT
      : driver.fecha_Nacimiento !== ""
      ? ""
      : errors_aux.fecha_Nacimiento;

  setErrors(errors_aux);
}
