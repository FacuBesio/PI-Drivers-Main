const jsonReader = require("../../utils/api/jsonReader");


const findApiDataById = async (id) => {
  try {
    const jsonData = await jsonReader();
    const driver = jsonData.drivers.find((data) => data.id === id);
    return driver;
  } catch (error) {
    console.error("Error al leer el archivo: ", error);
    throw new Error("Error al leer el archivo: ", error);
  }
};

module.exports = findApiDataById;
