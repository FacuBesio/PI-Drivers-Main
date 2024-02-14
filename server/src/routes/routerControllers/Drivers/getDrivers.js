const findAllDrivers = require("../../../controllers/Drivers/findAllDrivers");
const findApiDataQueryName = require("../../../controllers/Api/findApiDataQueryName");
const formattedDrivers = require("../../../utils/formattedDrivers");

const getDrivers = async (req, res) => {
  try {
    const { name } = req.query;
    let drivers = [];

    //* DRIVERS DB
    const driversDb = name
      ? await findAllDrivers(name)
      : await findAllDrivers();
    if (driversDb.length > 0) drivers = [...formattedDrivers(driversDb)];

    //* DRIVERS API
    await findApiDataQueryName(name)
      .then((driversApi) => {
        if (driversApi) drivers = [...drivers, ...driversApi];
      })
      .catch((error) => {
        console.error(error);
      });

    //* CORRECION DE IMAGEN POR DEFAULT
    // const imagenPorDefecto = "imagenPorDefecto.jpg";
    // let driversResult = [];

    // if (drivers.length > 0) {
    //   driversResult = drivers.map((data) => {
    //     if (drivers.imagen === undefined || drivers.imagen === null) {
    //       drivers.imagen = imagenPorDefecto;
    //     }
    //     return data;
    //   });
    // }
    return drivers.length > 0
      ? res.status(200).json(drivers)
      : name
      ? res
          .status(404)
          .send(`No se ha encontrado ninguna persona con el nombre '${name}'`)
      : res
          .status(404)
          .send(`No se ha encontrado ninguna persona registrada en 'Drivers'`);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getDrivers;
