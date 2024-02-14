const getDrivers = require("./routerControllers/Drivers/getDrivers");
const getDriverById = require("./routerControllers/Drivers/getDriverById");
const postDriver = require("./routerControllers/Drivers/postDriver");
const express = require("express");
const routerDrivers = express.Router();

//? GET "/drivers"
routerDrivers.get("/", getDrivers);
routerDrivers.get("/:id", getDriverById);

//? POST "/drivers"
routerDrivers.post("/", postDriver);

module.exports = routerDrivers;
