const findDriverById = require("../../../controllers/Drivers/findDriverById");
const findApiDataById = require("../../../controllers/Api/findApiDataById");
const formattedDriver = require("../../../utils/formattedDriver");
const formatted_API_Driver = require("../../../utils/formatted_API_Driver");

const getDriverById = async (req, res) => {
  try {
    const { id } = req.params;
    const driver = [];

    //* DRIVER DB
    // const driverDb = await findDriverById(id); // Retorna una promesa.
    // if (driverDb) {
    //   driver.push(formattedDriver(driverDb));
    // }

    //* DRIVER API
    await findApiDataById(Number(id))
      .then((driverApi) => {
        if (driverApi) driver.push(formatted_API_Driver(driverApi));
      })
      .catch((error) => {
        console.error(error);
      });

    return driver.length > 0
      ? res.status(200).json(driver)
      : res.status(404).send(`No existe el Driver con el id ${id}`);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getDriverById;
