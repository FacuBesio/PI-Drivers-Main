const { Driver } = require("../../db");

const createDriver = async ({driver, teams}) => {
  const newDriver = await Driver.create(driver);
  newDriver.addTeams(teams);
  return newDriver; // Retorna una promesa.
};

module.exports = createDriver;
