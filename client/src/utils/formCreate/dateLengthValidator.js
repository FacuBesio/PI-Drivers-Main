  //? VALIDADOR DE DATE LENGTH
  function dateLengthValidator(value) {
    if (value.length > 10) {
      value = value.substring(0, 10);
    }
    return value;
  }

  export default dateLengthValidator;