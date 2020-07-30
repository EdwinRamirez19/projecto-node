/// requireds 
const fs = require('fs');
const color = require("colors");
let data = '';

let listarTabla = (base, limite) => {
    let tabla = '';
    return new Promise((resolve, rejects) => {
        if (!Number(base) && !Number(limite)) {
            rejects('los parametros no son numericos')
            return;
        } else {

            for (let i = 1; i <= limite; i++) {
                tabla += `${base} * ${i} = ${base * i} \n`
            }

            resolve(tabla)
        }

    })
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, rejects) => {
        if (!Number(base) && !Number(limite)) {
            rejects('esto no es un numero')
            return;
        }
        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${base * i} \n`;

        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) rejects(err)
            else
                resolve(`tabla-${base}.txt`)


        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}