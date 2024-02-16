const express = require("express");
const router = require("./routes");
const findAllTeams = require("./controllers/Teams/findAllTeams");
const morgan = require("morgan");
const cors = require("cors");
const server = express();

//*MIDDLEWARES
server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

//? RUTAS
server.use(router);

module.exports = server;
