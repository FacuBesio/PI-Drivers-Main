const util = require("util");
const fs = require("fs");

// Convierte fs.readFile a una versión compatible con promesas
const readFileAsync = util.promisify(fs.readFile);

const dBReader = async () => {
  try {
    // Lee el archivo JSON como una promesa
    const data = await readFileAsync(__dirname + "../../../api/db.json", "utf8");
    const jsonData = JSON.parse(data);
    return jsonData;
  } catch (error) {
    console.error("Error al leer el archivo: ", error);
    throw new Error("Error al leer el archivo: ", error);
  }
};

module.exports = dBReader;
