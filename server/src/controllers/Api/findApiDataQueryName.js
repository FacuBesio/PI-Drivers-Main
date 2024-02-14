const dBReader = require("../../utils/dBReader");

const findApiDataQueryName = async (name) => {
  try {
    const jsonData = await dBReader();
    const drivers = jsonData.drivers.filter((data) =>
      data.name.forename.toLowerCase().includes(name.toLowerCase())
    );
    return drivers;
  } catch (error) {
    console.error("Error al leer el archivo: ", error);
    throw new Error("Error al leer el archivo: ", error);
  }
};

module.exports = findApiDataQueryName;
