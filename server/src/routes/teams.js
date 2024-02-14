const express = require("express");
const routerTeams = express.Router();
const getTeams = require("./routerControllers/Teams/getTeams");
const getTeamById = require("./routerControllers/Teams/getTeamById");
const postTeam = require("./routerControllers/Teams/postTeam");

//? GET "/teams"
routerTeams.get("/", getTeams);
routerTeams.get("/:id", getTeamById);

//? POST "/teams"
routerTeams.post("/", postTeam);

module.exports = routerTeams;
