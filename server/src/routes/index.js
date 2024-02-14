const express = require("express");
const router = express.Router();
const routerDrivers = require("./drivers");
const routerApi = require("./api");
const routerTeams = require("./teams");

//? RUTAS
//* LANDING
router.get("/", (req, res) => {
  res.send("TEST LANDING '/'");
});

//* DRIVERS
router.use("/drivers", routerDrivers);
router.use("/api", routerApi);
router.use("/teams", routerTeams);

module.exports = router;
