const findApiData = require("../../../controllers/Api/findApiData");


const getApiTeams = (req, res) => {
  findApiData()
    .then((drivers) => {
      const resultSet = new Set();

      drivers.forEach((driver) => {
        if (driver.teams) {
          driver.teams.split(",").forEach((team) => {
            const cleanTeam = team.replace(/[-–]/g, ' ').trim();
            resultSet.add(cleanTeam);
          });
        }
      });

      const result = Array.from(resultSet).sort();


      console.log("Teams: ", result.length);
      return result.length > 0
        ? res.status(200).json(result)
        : res.status(404).send("Not found");
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = getApiTeams;
