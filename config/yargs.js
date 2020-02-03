const argv = require('yargs').options({
    direccion:{
        alias:'d',
        demand:true,
        desc: 'Escribe la ciudad de la que quieres saber el clima'
    }
}).argv;

module.exports = {
    argv
}