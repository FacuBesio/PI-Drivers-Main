// const axios = require("axios");
// const URL = "https://rickandmortyapi.com/api/character/";
const { Driver, Team } = require("../../db");

const { Op } = require("sequelize");

const findAllDrivers = async (query) => {
  let whereClause = {};
  if (query) {
    whereClause.nombre = {
      [Op.iLike]: `%${query}%`,
    };
  }

  const drivers = await Driver.findAll({
    where: whereClause,
    include: {
      model: Team,
      attributes: ["nombre"],
      through: {
        attributes: [],
      },
    },
    // limit: 15,
  });

  return drivers;
};

module.exports = findAllDrivers;
