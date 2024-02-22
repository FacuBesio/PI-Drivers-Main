const inputIsNumber = require("../../utils/filter/inputValidation");

const filterDriversOrigin = (drivers, order) => {
  if (drivers.length > 0) {
    const newArray = drivers.filter((driver) => {
      let result = inputIsNumber(driver.id);
      order === "db_drivers" && (result = !result);
      return result;
    });
    return newArray;
  }
};

module.exports = filterDriversOrigin;
