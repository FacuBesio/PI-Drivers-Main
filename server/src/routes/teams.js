const express = require("express");
const routerTeams = express.Router();
const getTeams = require("./routerControllers/Teams/getTeams");
const getTeamById = require("./routerControllers/Teams/getTeamById");
const postTeam = require("./routerControllers/Teams/postTeam");
const postTeams = require("./routerControllers/Teams/postTeams");

//? GET "/teams"
routerTeams.get("/", getTeams);
routerTeams.get("/:id", getTeamById);

//? POST "/teams"
routerTeams.post("/", postTeam);
routerTeams.post("/bulk", postTeams);

module.exports = routerTeams;
