const createTeam = require("../../../controllers/Teams/createTeam");

const postTeam = async (req, res) => {
  const { nombre } = req.body;
  try {
    if (nombre === null || nombre === "" || nombre === undefined)
    throw new Error("Debe ingresar un nombre de equipo");
    const newTeam = await createTeam({ nombre });
    res.status(201).json(newTeam);
  } catch (error) {
    error.message === "llave duplicada viola restricción de unicidad «Teams_nombre_key»"
    ? res.status(500).json({ error: `Ya existe un equipo con el nombre '${nombre}'` })
    : res.status(500).json({ error: error.message });
  }
};

module.exports = postTeam;
