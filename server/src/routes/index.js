const { Router } = require("express");
const router = Router();
const routerDrivers = require("./drivers");
const routerApi = require("./api");
const routerTeams = require("./teams");


//? RUTAS
router.get("/", (req, res) => {
  res.send("TEST LANDING '/'");
});

router.use("/drivers", routerDrivers);
router.use("/teams", routerTeams);
router.use("/api", routerApi);


module.exports = router;
