const { Driver } = require("../../db");

const createDriver = async ({ driver, teams }) => {
  if (!teams || teams.length === 0)
    throw new Error("Debe asignar al menos un equipo al conductor.");
  const newDriver = await Driver.create(driver);
  newDriver.addTeams(teams);
  const driverCompleted = { ...newDriver.dataValues, teams };
  return driverCompleted; 
};

module.exports = createDriver;
