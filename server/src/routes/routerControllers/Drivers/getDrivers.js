const findAllDrivers = require("../../../controllers/Drivers/findAllDrivers");
const findApiDataQueryName = require("../../../controllers/Api/findApiDataQueryName");
const formattedDrivers = require("../../../utils/formatted/formattedDrivers");
const formatted_API_Drivers = require("../../../utils/formatted/formatted_API_Drivers");
const defaultImage = require("../../../utils/image/defaultImage");
const pagination = require("../../../utils/pagination/pagination");
const orderByName = require("../../../utils/order/orderByName");
const orderByDateOfBirth = require("../../../utils/order/orderByDateOfBirth");
const filterDriversOrigin = require("../../../utils/filter/filterDriversOrigin");
const filterTeams_method = require("../../../utils/filter/filterTeams_method");

const getDrivers = async (req, res) => {
  try {
    const {
      name,
      page = 1,
      pageSize = 15,
      orderNombre = "",
      orderNacimiento = "",
      filterDrivers = "",
      filterTeams = "",
    } = req.query;
    
    let drivers = [];

    //* DRIVERS DB
    const driversDb = name
      ? await findAllDrivers(name)
      : await findAllDrivers();
    if (driversDb.length > 0) {
      const driversDb_reverse = driversDb.reverse();
      drivers = [...formattedDrivers(driversDb_reverse)];
    }

    //* DRIVERS API QUERY NAME
    name
      ? await findApiDataQueryName(name)
          .then((driversApi) => {
            if (driversApi)
              drivers = [...drivers, ...formatted_API_Drivers(driversApi)];
          })
          .catch((error) => {
            console.error(error);
          })
      : await findApiDataQueryName()
          .then((driversApi) => {
            if (driversApi)
              drivers = [...drivers, ...formatted_API_Drivers(driversApi)];
          })
          .catch((error) => {
            console.error(error);
          });

    //* CORRECION DE IMAGEN POR DEFAULT ({ imagen:"" })
    drivers = defaultImage(drivers);

    //* FILTER:
    filterDrivers !== "" &&
      (drivers = filterDriversOrigin(drivers, filterDrivers));

    filterTeams !== "" && (drivers = filterTeams_method(drivers, filterTeams));

    //* ORDER:
    orderNombre !== "" && orderByName(drivers, orderNombre);
    orderNacimiento !== "" && orderByDateOfBirth(drivers, orderNacimiento);

    //* PAGINACION
    const totalResults = drivers.length;
    const paginatedDrivers = pagination(drivers, page, pageSize);

    return paginatedDrivers.length > 0
      ? res.status(200).json({
          totalResults,
          page,
          pageSize,
          totalPages: Math.ceil(totalResults / pageSize),
          drivers: paginatedDrivers,
        })
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
