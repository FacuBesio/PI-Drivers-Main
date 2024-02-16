const { Team } = require("../../db");

const createBulkTeams = async (teams) => {
  const bulkTeams = await Team.bulkCreate(teams);
  return bulkTeams; // Retorna una promesa.
};

module.exports = createBulkTeams;
