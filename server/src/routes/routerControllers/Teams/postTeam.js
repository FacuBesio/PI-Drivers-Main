const createTeam = require("../../../controllers/Teams/createTeam");

const postTeam = async (req, res) => {
  try {
    const { nombre } = req.body;
    const newTeam = await createTeam({ nombre });
    res.status(201).json(newTeam);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postTeam;
