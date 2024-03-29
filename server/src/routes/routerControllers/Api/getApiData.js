const findApiData = require("../../../controllers/Api/findApiData");
const formatted_API_Drivers = require("../../../utils/formatted/formatted_API_Drivers");
const pagination = require("../../../utils/pagination/pagination");

const getApiData = (req, res) => {
  findApiData()
    .then((drivers) => {
      
      //* PAGINACION
      const { page = 1, pageSize = 15 } = req.query;
      const totalResults = drivers.length;
      const paginated_API_Drivers = pagination(drivers, page, pageSize);

      return drivers
        ? res.status(200).json(formatted_API_Drivers(paginated_API_Drivers))
        : res.status(404).send("Not found");
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = getApiData;
