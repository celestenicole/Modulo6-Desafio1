const { registrar, leer } = require("./operaciones");

const argumentos = process.argv.slice(2);
const operacion = argumentos[0];

switch (operacion) {
  case "registrar":
    registrar(
      argumentos[1],
      argumentos[2],
      argumentos[3],
      argumentos[4],
      argumentos[5]
    );
    break;

  case "leer":
    leer();
    break;

  default:
    console.log("❌ Operación no válida. Usa 'registrar' o 'leer'");
}
