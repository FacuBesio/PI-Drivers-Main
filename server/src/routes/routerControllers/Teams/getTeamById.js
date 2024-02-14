const findTeamById = require("../../../controllers/Teams/findTeamById");

const getTeamById = async (req, res) => {
  try {
    const { id } = req.params;
    const team = await findTeamById(id); // Retorna una promesa.
    return team
      ? res.status(200).json(team)
      : res.status(404).send(`No existe el Team con el id ${id}`);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getTeamById;
