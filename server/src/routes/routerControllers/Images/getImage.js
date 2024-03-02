const fs = require("fs").promises; // Módulo para trabajar con el sistema de archivos
const path = require("path");

const getImage = async (req, res) => {
  try {
    const { imageName } = req.params;
    const contentType = "image/jpeg";
    
    //* IMG RUTA
    const imagePath = path.join(__dirname, "carpeta_de_imagenes", imageName);

    //* LECTOR DE IMAGEN
    const image = await fs.readFile(imagePath);

    res.set("Content-Type", contentType);
    res.send(image);
  } catch (error) {
    console.error("Error al obtener la imagen:", error);
    res.status(500).send("Error al obtener la imagen");
  }
};

module.exports = getImage;
