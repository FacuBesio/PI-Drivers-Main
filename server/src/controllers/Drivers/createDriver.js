const { Driver } = require("../../db");

const createDriver = async ({driver, teams}) => {
  const newDriver = await Driver.create(driver);
  newDriver.addTeams(teams);
  const driverCompleted = {...newDriver.dataValues, teams}
  return driverCompleted; // Retorna una promesa.
};

module.exports = createDriver;
