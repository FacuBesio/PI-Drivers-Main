const findApiData = require("../../../controllers/Api/findApiData");

const getApiData = (req, res) => {
  findApiData()
    .then((drivers) => {
      return drivers
        ? res.status(200).json(drivers)
        : res.status(404).send("Not found");
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = getApiData;
