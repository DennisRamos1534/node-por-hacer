const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs') // exportamos el paquete de yargs
    .command('crear', 'Crear un elemento por hacer', { // capturamos las tareas para cuando ejecutemos el comando crear
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', { // capturamos las tareas para cuando ejecutemos el comando crear
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea', { // capturamos las tareas para cuando ejecutemos el comando crear
        descripcion,
    })
    .help()
    .argv;

module.exports = {
    argv
}