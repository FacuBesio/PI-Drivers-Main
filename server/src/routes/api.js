
const getApiData = require("./routerControllers/Api/getApiData");
const express = require("express");
const routerApi = express.Router();

//? GET "/api"
routerApi.get("/", getApiData);


module.exports = routerApi;
