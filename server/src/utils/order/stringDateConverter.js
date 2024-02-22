const stringDateConverter = (Date) => {
  const dia = Date.getDate().toString().padStart(2, "0");
  const mes = (Date.getMonth() + 1).toString().padStart(2, "0"); // Sumamos 1 al mes porque en JavaScript los meses van de 0 a 11
  const año = Date.getFullYear();
  return `${dia}-${mes}-${año}`;
};

module.exports = stringDateConverter;
