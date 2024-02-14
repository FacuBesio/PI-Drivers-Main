// const axios = require("axios");
// const URL = "https://rickandmortyapi.com/api/character/";
const { Driver, Team } = require("../../db");

const { Op } = require("sequelize");

const findAllTeams = async (query) => {
  let whereClause = {};
  if (query) {
    whereClause.nombre = {
      [Op.iLike]: `%${query}%`,
    };
  }

  const drivers = await Team.findAll({
    where: whereClause,
    include: {
      model: Driver,
      attributes: ["id", "nombre", "apellido"],
      through: {
        attributes: [],
      },
    },
  });

  return drivers;
};

module.exports = findAllTeams;
