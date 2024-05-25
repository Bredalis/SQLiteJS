
// Hacer CRUD con POO

// Importar modulo
const sqlite3 = require("sqlite3").verbose();

class CRUD{
	constructor(bbddUrl) {
		this.bbddUrl = bbddUrl;
		this.bbdd = null;
	}

	conectarBBDD() {
		this.bbdd = new sqlite3.Database(this.bbddUrl);
	}

	instruccion(consulta) {
		this.instruccionConsulta = consulta;
	}

	crearEInsertar() {

		// Crear tabla e insertar datos
		this.bbdd.serialize(() => {
		  this.bbdd.run(this.instruccionConsulta, (err) => {

		    if (err) {
		      console.error("Error al ejecutar consulta", err.message);
		    
		    } else{
		      console.log("Consulta ejecutada exitosamente");
		    }  

		  });
		});
	}

	borrarYActualizar() {
		// Borrar y actualizar
		this.bbdd.run(this.instruccionConsulta);
	}

	mostrarDatos() {
		this.bbdd.all(this.instruccionConsulta, (err, datos) => {
			if (err) {
				console.error("Hubo un error");
				return;
			}

			// Resultado
			console.log("Datos:", datos);
		});
	}

	cerrarBBDD() {
		this.bbdd.close();
	}
}

// Exportar la clase
module.exports = CRUD;