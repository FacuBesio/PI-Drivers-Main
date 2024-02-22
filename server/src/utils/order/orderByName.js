const imagenPorDefecto = "imagenPorDefecto.jpg";

const orderByName = (drivers, order) =>{
    if (drivers.length > 0) {
        drivers.sort(function (a, b) {
            const nameA = a.nombre.toUpperCase();
            const nameB = b.nombre.toUpperCase();
            let result = 0;
            if (nameA < nameB) {
              result = -1;
            }
            if (nameA > nameB) {
              result = 1;
            }
            order === "descendente" && (result = result * -1);
            return result;
          });
    }
    // return drivers;
}

module.exports = orderByName;