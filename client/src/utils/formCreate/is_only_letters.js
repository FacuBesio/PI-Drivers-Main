//? REGEX PARA LETRAS
function is_only_letters(text) {
  const regex = /^[a-zA-Z\u00C0-\u017F]+$/;
  return regex.test(text);
}

export default is_only_letters;
