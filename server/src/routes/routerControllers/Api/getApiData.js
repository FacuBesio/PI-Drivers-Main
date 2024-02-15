const findApiData = require("../../../controllers/Api/findApiData");
const formattedDrivers = require("../../../utils/formatted_API_Drivers");

const getApiData = (req, res) => {
  findApiData()
    .then((drivers) => {
      return drivers
        ? res.status(200).json(formattedDrivers(drivers))
        : res.status(404).send("Not found");
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = getApiData;
