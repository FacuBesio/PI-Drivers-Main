const dateConverter = require("./dateConverter");
const stringDateConverter = require("./stringDateConverter");

const orderByDateOfBirth = (drivers, order) =>{
    if (drivers.length > 0) {
        drivers.map((driver) => driver.fecha_Nacimiento = dateConverter(driver.fecha_Nacimiento))
        
        drivers.sort(function (a, b) {
          let result = a.fecha_Nacimiento - b.fecha_Nacimiento;
          order === "descendente" && (result = result * -1);
          return result
        });
        
        drivers.map((driver) => driver.fecha_Nacimiento = stringDateConverter(driver.fecha_Nacimiento))
    }

}

module.exports = orderByDateOfBirth;