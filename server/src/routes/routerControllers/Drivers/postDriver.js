const createDriver = require("../../../controllers/Drivers/createDriver");

const postDriver = async (req, res) => {
  try {
    const {
      nombre,
      apellido,
      descripcion,
      imagen,
      nacionalidad,
      fecha_Nacimiento,
      teams
    } = req.body;

    const driver = {
      nombre,
      apellido,
      descripcion,
      imagen,
      nacionalidad,
      fecha_Nacimiento,
    };

    const newDriver = await createDriver({driver, teams});
    
    res.status(201).json(newDriver);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postDriver;
