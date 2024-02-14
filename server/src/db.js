// const fs = require('fs');
// const path = require('path');
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

// const { Driver, Team } = dataBase.models;

// Driver.belongsToMany(Team, {through: "tabla_intermedia"});
// Team.belongsToMany(Driver, {through: "tabla_intermedia"});





// const basename = path.basename(__filename);

// const modelDefiners = [];

// fs.readdirSync(path.join(__dirname, '/models'))
//   .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
//   .forEach((file) => {
//     modelDefiners.push(require(path.join(__dirname, '/models', file)));
//   });


// modelDefiners.forEach(model => model(sequelize));

// let entries = Object.entries(sequelize.models);
// let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
// sequelize.models = Object.fromEntries(capsEntries);

// const { Driver } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

module.exports = {
  dataBase,           // para importart la conexión { conn } = require('./db.js');
  ...dataBase.models // para poder importar los modelos así: const { Product, User } = require('./db.js');
       
};