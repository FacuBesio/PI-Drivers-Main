const formatted_API_Drivers = (driversApi) => {
  const formattedDrivers = driversApi.map((driver) => {
    let { id, name, description, image, nationality, dob, teams } = driver;
    const { forename, surname } = name;
    const nombre = forename;
    const apellido = surname;
    const descripcion = description;
    const { url } = image;
    const imagen = url;
    const nacionalidad = nationality;
    const fecha_Nacimiento = dob;
    teams = teams ? teams.split(",") : []; 
    return {
      id,
      nombre,
      apellido,
      descripcion,
      imagen,
      nacionalidad,
      fecha_Nacimiento,
      teams,
    };
  });

  return formattedDrivers;
};

module.exports = formatted_API_Drivers;
