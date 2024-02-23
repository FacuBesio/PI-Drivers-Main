const filterTeams_method = (drivers, filter) => {
  if (drivers.length > 0) {
    const newArray = drivers.filter((driver) => {
      const filterRegex = new RegExp(
        filter
          .replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
          .replace(/\s/g, "[\\s-]*"),
        "i"
      );
      return driver.teams.some((team) => filterRegex.test(team));
    });
    return newArray;
  }
};

module.exports = filterTeams_method;


