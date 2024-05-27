
const CRUD = require("./CRUD.js");

const consulta = `
	UPDATE Usuarios SET Nombre = "Bienvenida" WHERE ID = 1`;

const actualizarDatos = new CRUD("BBDD.db");
actualizarDatos.conectarBBDD();
actualizarDatos.instruccion(consulta);
actualizarDatos.borrarYActualizar();
actualizarDatos.cerrarBBDD();