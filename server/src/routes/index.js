const { Router } = require("express");
const router = Router();
const routerDrivers = require("./drivers");
const routerApi = require("./api");
const routerTeams = require("./teams");
const routerImages = require("./images");


//? RUTAS
router.get("/", (req, res) => {
  res.send("TEST LANDING '/'");
});

router.use("/drivers", routerDrivers);
router.use("/teams", routerTeams);
router.use("/api", routerApi);
router.use("/images", routerImages);


module.exports = router;
