const fs = require("fs");
const path = "./citas.json";

const leerCitas = () => {
  try {
    const data = fs.readFileSync(path, "utf8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const guardarCitas = (citas) => {
  fs.writeFileSync(path, JSON.stringify(citas, null, 2));
};

const registrar = (nombre, edad, tipo, color, enfermedad) => {
  if (!nombre || !edad || !tipo || !color || !enfermedad) {
    console.log("Faltan datos para registrar la cita");
    return;
  }

  const citas = leerCitas();

  const nuevaCita = {
    nombre,
    edad,
    tipo,
    color,
    enfermedad,
  };

  citas.push(nuevaCita);
  guardarCitas(citas);

  console.log("Cita registrada correctamente");
};

const leer = () => {
  const citas = leerCitas();
  console.log(" Listado de citas veterinarias:");
  console.log(citas);
};

module.exports = {
  registrar,
  leer,
};
