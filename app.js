const argv = require('./config/yargs').argv;
const site = require('./config/site');
const clima = require('./clima/clima');

console.log(argv.direccion);

// site.getSiteLtLn(argv.direccion).then(console.log)

// clima.getClima(35,139)
//     .then(console.log)
//     .catch(console.log);

const getSiteAndWeather = async(dir) => {
    try{
        const city = await site.getSiteLtLn(dir);
        const temp = await clima.getClima(city.latitud,city.longitud);
        return `El clima de ${city.direccion} es ${temp}.`;
    }
    catch{
        return `No se pudo determinar el clima de ${dir}`;
    }
}

getSiteAndWeather(argv.direccion)
    .then(console.log)
    .catch(console.log);