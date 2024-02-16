const axios = require("axios");
const URL = "http://localhost:5000/api/teams";
const createBulkTeams = require("../../../controllers/Teams/createBulkTeams");

const postTeam = async (req, res) => {
  try {
    const { data } = await axios.get(`${URL}`);
    const teamsArray = data.map((team) => {
        return {nombre: team}
      })
    const newTeams = await createBulkTeams(teamsArray);
    res.status(201).json(newTeams);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postTeam;
