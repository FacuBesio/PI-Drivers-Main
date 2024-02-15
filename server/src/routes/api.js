const getApiData = require("./routerControllers/Api/getApiData");
const getApiTeams = require("./routerControllers/Api/getApiTeams");
const express = require("express");
const routerApi = express.Router();

//? GET "/api"
routerApi.get("/drivers", getApiData);
routerApi.get("/teams", getApiTeams);


module.exports = routerApi;
