const { argv } = require('./Config/yargs');
const toDo = require('./por-hacer/por-hacer');
const colors = require('colors');

//console.log(argv);

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = toDo.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let list = toDo.getList();

        for (let toDo of list) {
            console.log('====ToDo List ===='.green);
            console.log(toDo.descripcion);
            console.log('Estado', toDo.completado);
            console.log('=================='.green);
        }
        break;


    case 'actualizar':
        let actualizado = toDo.actualizar(argv.descripcion, argv.completado)
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = toDo.borrar(argv.descripcion)
        console.log(borrado);
        break;

    default:
        console.log('Comando no es reconocido');
}