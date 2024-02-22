const jsonReader = require("../../utils/api/jsonReader");

const findApiDataQueryName = async (name) => {
  try {
    if (name) {
      const jsonData = await jsonReader();
      const drivers = jsonData.drivers.filter((data) =>
        data.name.forename.toLowerCase().includes(name.toLowerCase())
      );
      return drivers;
    } else {
      const jsonData = await jsonReader();
      return jsonData.drivers;
    }
  } catch (error) {
    console.error("Error al leer el archivo: ", error);
    throw new Error("Error al leer el archivo: ", error);
  }
};

module.exports = findApiDataQueryName;
