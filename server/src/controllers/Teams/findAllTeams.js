const { Driver, Team } = require("../../db");

const { Op } = require("sequelize");

const findAllTeams = async (query) => {
  let whereClause = {};
  if (query) {
    whereClause.nombre = {
      [Op.iLike]: `%${query}%`,
    };
  }

  const teams = await Team.findAll({
    where: whereClause,
    include: {
      model: Driver,
      attributes: ["id", "nombre", "apellido"],
      through: {
        attributes: [],
      },
    },
    order: [
      ["id", "ASC"], // Orden ascendente por el atributo 'id'
    ],
  });

  return teams;
};

module.exports = findAllTeams;
