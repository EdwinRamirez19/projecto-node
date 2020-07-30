//usando destructuracion de objetos 
const argv = require("./config/yargs").argv;
var colors = require("colors/safe");



const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {
    case "crear":

        crearArchivo(argv.base, argv.limite).then(archivo => {
            console.log("Archivo creado: " + colors.green(archivo))

        }).catch(err => console.log(err))

        break;
    case "listar":
        listarTabla(argv.base, argv.limite).then(tabla => {
            console.log(colors.red("**************************************"));
            console.log(colors.green(`Tabla de multiplicar del ${argv.base}`));
            console.log(colors.red("**************************************"));

            console.log(tabla)

        }).catch(err => console.log(err))
        break;

    default:
        console.log("comando no reconocido");
        break;
}




// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];
// // console.log(base)
// crearArchivo(base).then(archivo => {
//     console.log(archivo)
// }).catch(err => console.log(err))