const { Driver, Team } = require("../../db");

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
  return driver;
};
module.exports = findDriverById;
