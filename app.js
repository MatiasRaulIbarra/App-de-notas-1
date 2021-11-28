let moduloTareas = require('./funcionesDeTareas');
let process = require('process');
let comando = process.argv[2] ? process.argv[2].toLowerCase() : undefined;

switch(comando){
    case "listar":
        let tareas = moduloTareas.leerJSON();
        if(tareas.length === 0){
            console.log("La lista de tareas está vacía");
        } else {
            console.log("----------------------------");
            console.log("Este es tu listado de tareas");
            console.log("----------------------------");
            for(let i = 0; i < tareas.length; i++){
                console.log("Título: " + tareas[i].titulo + " - estado: " + tareas[i].estado);
            }
        }
        break;
    case "agregar":
        let titulo = process.argv[3];
        let estado = process.argv[4];
        moduloTareas.escribirJSON(titulo, estado);
        break;
    case "deshacer":
        moduloTareas.deshacer();
        break;
    case "filtrar":
        let estado1 = process.argv[3];
        let tareasFiltradas = moduloTareas.filtrar(estado1);
        if(tareasFiltradas.length === 0){
            console.log("La lista de tareas está vacía");
        } else {
            console.log("----------------------------");
            console.log("Este es tu listado de tareas");
            console.log("----------------------------");
            for(let i = 0; i < tareasFiltradas.length; i++){
                console.log("Título: " + tareasFiltradas[i].titulo + " - estado: " + tareasFiltradas[i].estado);
            }
        }
        break;
    case undefined:
        console.log("Ateción - Tienes que pasar una acción");
        break;
    default:
        console.log("No entiendo qué quieres hacer");
        break;
}