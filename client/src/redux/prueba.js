var objetos = [
  { name: "Zacarías" },
  { name: "Ana" },
  { name: "Carlos" },
  { name: "Beto" },
];

// Función de comparación para ordenar por el atributo 'name' de forma alfabética
objetos.sort(function (a, b) {
  const nameA = a.name.toUpperCase(); // Convertir a mayúsculas para hacer la comparación
  const nameB = b.name.toUpperCase(); // Convertir a mayúsculas para hacer la comparación
  let result = 0;
  if (nameA < nameB) {
    result = -1;
  }
  if (nameA > nameB) {
    result = 1;
  }
  (value === "descendente") && (result = result * -1);
  return result;
});

// Mostrar el array ordenado
console.log(objetos);
