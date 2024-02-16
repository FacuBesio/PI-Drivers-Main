const imagenPorDefecto = "imagenPorDefecto.jpg";

const defaultImage = (drivers) =>{
    if (drivers.length > 0) {
      drivers = drivers.map((data) => {
        if (data.imagen === undefined || data.imagen === null || data.imagen === "") {
          data.imagen = imagenPorDefecto;
        }
        return data;
      });
    }
    return drivers;
}

module.exports = defaultImage;