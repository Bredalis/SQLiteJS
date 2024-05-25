
const CRUD = require("./CRUD.js");

const consulta = `DELETE FROM Usuarios`;

const borrarDatos = new CRUD("BBDD.db");
borrarDatos.conectarBBDD();
borrarDatos.instruccion(consulta);
borrarDatos.borrarYActualizar();
borrarDatos.cerrarBBDD();