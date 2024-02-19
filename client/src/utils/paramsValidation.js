export const paramsValidation = (id) => {
  if (id > 508) {
    alert(
      `No existe un personaje con el Id: ${id}. Puedes elegir un personaje desde 1 al 508`
    );
    return false;
  }

  return true;
};
