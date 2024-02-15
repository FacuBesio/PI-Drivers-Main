const formattedDriver = (driverDb) => {
    let formattedDriverDb;
    if (driverDb) {
    const {
      id,
      nombre,
      apellido,
      descripcion,
      imagen,
      nacionalidad,
      fecha_Nacimiento,
      Teams,
    } = driverDb;
    const teams = Teams.map((team) => team.nombre);
    formattedDriverDb = {
      id,
      nombre,
      apellido,
      descripcion,
      imagen,
      nacionalidad,
      fecha_Nacimiento,
      teams,
    };
    
  }
  return formattedDriverDb;
};

module.exports = formattedDriver;
