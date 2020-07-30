const opts = {
    base: {
        demand: true,
        alias: "b",
    },
    limite: {
        alias: "l",
        default: 10,
    },
};

const argv = require("yargs")
    .command("listar", "imprime en la consola la tbala de multiplicar", opts)
    .command("crear", "Genera el archivo en base de un numero y un limite", opts)
    .help().argv;
module.exports = {
    argv
}