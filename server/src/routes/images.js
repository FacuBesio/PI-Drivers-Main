const getImage = require("./routerControllers/Images/getImage");
const express = require("express");
const routerImages = express.Router();

//? GET "/images"
routerImages.get("/:imageName", getImage);


module.exports = routerImages;
