const date = "1-10-190";


function formatoFecha(fecha) {
    const partes = fecha.split("-");

    const dia = partes[0].padStart(2, "0");
    const mes = partes[1].padStart(2, "0");
    const año = partes[2];

    return `${dia}-${mes}-${año}`;
}

console.log(formatoFecha(date));

