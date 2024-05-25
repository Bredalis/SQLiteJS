
const CRUD = require("./CRUD.js");

const consulta = `SELECT * FROM Usuarios`;

const mostrarDdatos = new CRUD("BBDD.db");
mostrarDdatos.conectarBBDD();
mostrarDdatos.instruccion(consulta);
mostrarDdatos.mostrarDatos();
mostrarDdatos.cerrarBBDD();