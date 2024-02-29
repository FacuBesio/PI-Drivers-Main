// const imagenPorDefecto = "imagenPorDefecto.jpg";
const imagenPorDefecto = "/src/assets/img/default_image.jpg";
const defaultApiImage = "https://cdn.pixabay.com/photo/2013/07/12/15/36/motorsports-150157_960_720.png"

const defaultImage = (drivers) => {
  if (drivers.length > 0) {
    drivers = drivers.map((data) => {
      (
        data.imagen === defaultApiImage ||
        data.imagen === undefined ||
        data.imagen === null ||
        data.imagen === ""
      ) && (
        data.imagen = imagenPorDefecto
      )
      return data;
    });
  }
  return drivers;
};

module.exports = defaultImage;
