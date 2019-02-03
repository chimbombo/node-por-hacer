const optA = {
    descripcion: {
        demand: true,
        alias: 'd'
    }
}

const optB = {
    descripcion: {
        alias: 'd'
    },
    completado: {
        alias: 'c',
        default: true
    }
}




const argv = require('yargs')
    .command('crear', 'Crear un elemento To Do', optA)
    .command('actualizar', 'actualiza el estado completado de un To Do ', optB)
    .command('borrar', 'borra una To Do', optA)
    .help()
    .argv;


module.exports = {
    argv
}