const formatted_API_Driver = (driverApi) => {
  let formattedDriver;
  if (driverApi) {
    let { id, name, description, image, nationality, dob, teams } = driverApi;
    const { forename, surname } = name;
    const nombre = forename;
    const apellido = surname;
    const descripcion = description;
    const { url } = image;
    const imagen = url;
    const nacionalidad = nationality;
    const fecha_Nacimiento = dob;
    teams = teams.split(",");

    formattedDriver = {
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
  return formattedDriver;
};

module.exports = formatted_API_Driver;
