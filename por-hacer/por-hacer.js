const fs = require('fs');

let toDoList = [];

const guardarDB = () => {
    let data = JSON.stringify(toDoList);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err)
            throw new Error('No se grabo archivo', err);
    })
}

const cargarDB = () => {
    try {
        toDoList = require('../db/data.json');
    } catch (error) {
        toDoList = [];
    }
}

const getList = () => {
    cargarDB()

    return toDoList;

}

const crear = (descripcion) => {

    cargarDB()

    let toDo = {
        descripcion,
        completado: false
    };

    toDoList.push(toDo);

    guardarDB()

    return toDo;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = toDoList.findIndex(tarea => tarea.descripcion === descripcion)

    if (index >= 0) {
        toDoList[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();

    let index = toDoList.findIndex(tarea => tarea.descripcion === descripcion)

    if (index >= 0) {
        toDoList.splice(index, 1)
        guardarDB();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear,
    getList,
    actualizar,
    borrar
}