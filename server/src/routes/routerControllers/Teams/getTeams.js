const findAllTeams = require("../../../controllers/Teams/findAllTeams");

const getTeams = async (req, res) => {
  try {
    const { name } = req.query;

    const teams = name
      ? await findAllTeams(name)
      : await findAllTeams();

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
