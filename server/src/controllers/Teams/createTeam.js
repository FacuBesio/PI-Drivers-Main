const { Team } = require("../../db");

const createTeam = async (team) => {
  const newTeam = await Team.create(team);
  return newTeam; // Retorna una promesa.
};

module.exports = createTeam;
