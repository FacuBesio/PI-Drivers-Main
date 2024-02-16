const findAllTeams = require("../../../controllers/Teams/findAllTeams");
const createBulkTeams = require("../../../controllers/Teams/createBulkTeams");
const axios = require("axios");
const URL = "http://localhost:5000/api/teams";

const getTeams = async (req, res) => {
  try {
    const { name } = req.query;

    let teams = name ? await findAllTeams(name) : await findAllTeams();
    
    //? CARGA DE TEAMS API (si la BD esta vacia)
    if (teams.length === 0) {
      const { data } = await axios.get(`${URL}`);
      const teamsArray = data.map((team) => {
        return { nombre: team };
      });
      await createBulkTeams(teamsArray);
      const teamsApi = name ? await findAllTeams(name) : await findAllTeams();
      teams = teamsApi;
    }

    return teams.length > 0
      ? res.status(200).json(teams)
      : name
      ? res
          .status(404)
          .send(`No se ha encontrado ningun equipo con el nombre '${name}'`)
      : res
          .status(404)
          .send(`No se ha encontrado ningun equipo registrado en 'Teams'`);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getTeams;
