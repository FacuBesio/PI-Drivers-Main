const jsonReader = require("../../utils/api/jsonReader");

const findApiData = async () => {
  try {
    const jsonData = await jsonReader();
    return jsonData.drivers;
  } catch (error) {
    console.error("Error al leer el archivo: ", error);
    throw new Error("Error al leer el archivo: ", error);
  }
};

module.exports = findApiData;
