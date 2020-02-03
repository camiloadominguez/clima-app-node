const axios = require('axios');

const getClima = async (lt, ln) => { 
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lt}&lon=${ln}&appid=35ef5231230903911fb9ec8fe1fd7a39&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}