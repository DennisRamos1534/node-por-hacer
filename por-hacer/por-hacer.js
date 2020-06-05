const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer); // convertimos el objeto a un formato json y lo guardamos en la variable data
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const crear = (descripcion) => { // creamos una funcion que recibe una descripcion

    cargarDB(); // cargamos la data primero antes de grabarle un archivo nuevo 

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer); // agregamos la nueva tarea al listado de todas las tareas
    guardarDB();
    return porHacer; // para retornar la nueva tarea que se agrego
}

const getListado = () => {
    cargarDB(); // llamamos a la funcion para poder llamar a la variable listadoPorHacer
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {

    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear, // exportamos la funcion para poder llamarla desde otro archivo
    getListado,
    actualizar,
    borrar
}