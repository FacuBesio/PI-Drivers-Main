const dateConverter = (fechaString) => {
    if (fechaString.includes('-')){
    const partes = fechaString.split('-');
    const dia = parseInt(partes[0]);
    const mes = parseInt(partes[1]) - 1; // Se resta 1 al mes porque en JS los meses van de 0 a 11
    const año = parseInt(partes[2]);
    return new Date(año, mes, dia);
    }
    return new Date("3000", "01", "01");
  };

  module.exports = dateConverter;