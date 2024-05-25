
const CRUD = require("./CRUD.js");

const consulta = `
	INSERT INTO Usuarios(Nombre, Email)
	VALUES("Yulissa", "YulissaBastardo@gmail.com")`;

const insertarDatos = new CRUD("BBDD.db");
insertarDatos.conectarBBDD();
insertarDatos.instruccion(consulta);
insertarDatos.crearEInsertar();
insertarDatos.cerrarBBDD();