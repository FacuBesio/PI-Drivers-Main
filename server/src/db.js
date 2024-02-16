require("dotenv").config();
const { DB_USER, DB_PASSWORD, HOST, PORT, DB_NAME } = process.env;
const { Sequelize } = require("sequelize");
const DriverModel = require("./models/Driver");
const TeamModel = require("./models/Team");


//? CONNECTION
const dataBase = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${HOST}:${PORT}/${DB_NAME}`, {
  logging: false, 
  native: false, 
});

//* MODELS
DriverModel(dataBase);
TeamModel(dataBase);

//Associations
const { Driver, Team } = dataBase.models;
Driver.belongsToMany(Team, {through: "Driver_Team"});
Team.belongsToMany(Driver, {through: "Driver_Team"});

module.exports = {
  dataBase,           // para importart la conexión { conn } = require('./db.js');
  ...dataBase.models // para poder importar los modelos así: const { Product, User } = require('./db.js');
       
};