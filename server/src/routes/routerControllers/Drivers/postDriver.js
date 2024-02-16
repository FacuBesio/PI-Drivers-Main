const createDriver = require("../../../controllers/Drivers/createDriver");

const postDriver = async (req, res) => {
  const { nombre, apellido, descripcion, imagen, nacionalidad, fecha_Nacimiento, teams } = req.body;
  const driver = { nombre, apellido, descripcion, imagen, nacionalidad, fecha_Nacimiento, teams };

  try {

    for (let prop in driver) {
      if ((driver[prop] === null || driver[prop] === "" || driver[prop] === undefined) 
          && (prop !== "imagen"))
      throw new Error(`Debe ingresar ${prop}`);
     }
    
     const newDriver = await createDriver({ driver, teams });

    res.status(201).json(newDriver);
  } catch (error) {
    error.message ===
    "llave duplicada viola restricción de unicidad «Drivers_nombre_apellido_key»"
      ? res
          .status(500)
          .json({
            error: `Ya existe un conductor/a con el nombre y apellido '${nombre} ${apellido}'`,
          })
      : res.status(500).json({ error: error.message });
  }
};

module.exports = postDriver;
