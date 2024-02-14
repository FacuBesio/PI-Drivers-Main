const { Driver, Team } = require("../../db");
const URL = "https://rickandmortyapi.com/api/character/";

const findDriverById = async (id) => {
  const driver = await Driver.findByPk(id, {
    include: {
      model: Team,
      attributes: ["nombre"],
      through: {
        attributes: [],
      },
    },
  });
  // if (!driver) throw Error("Personaje no existe");
  return driver;
};
module.exports = findDriverById;
