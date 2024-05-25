
const CRUD = require("./CRUD.js");

const consulta = `
  CREATE TABLE IF NOT EXISTS Usuarios(
    ID INTEGER PRIMARY KEY AUTOINCREMENT, Nombre TEXT, 
    Email TEXT
)`;

const crearTabla = new CRUD("BBDD.db");
crearTabla.conectarBBDD();
crearTabla.instruccion(consulta);
crearTabla.crearEInsertar();
crearTabla.cerrarBBDD();