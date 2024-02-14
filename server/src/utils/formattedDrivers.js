const formattedDrivers = (driversDb) => {

const formattedDriversDb = driversDb.map((driver) => {
    const {
      nombre,
      apellido,
      descripcion,
      imagen,
      nacionalidad,
      fecha_Nacimiento,
      Teams,
    } = driver;
    const teams = Teams.map((team) => team.nombre);
    return {
      nombre,
      apellido,
      descripcion,
      imagen,
      nacionalidad,
      fecha_Nacimiento,
      teams,
    };
  })

  return formattedDriversDb;
}

module.exports = formattedDrivers;