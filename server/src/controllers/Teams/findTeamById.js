const { Driver, Team } = require("../../db");

const findTeamById = async (id) => {
  const team = await Team.findByPk(id, {
    include: {
      model: Driver,
      attributes: ["id", "nombre", "apellido"],
      through: {
        attributes: [],
      },
    },
  });
  return team;
};
module.exports = findTeamById;
