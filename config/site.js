const axios = require('axios');

const getSiteLtLn = async( direccion ) => {
    const encodeURL = encodeURI(direccion);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        headers: {'x-rapidapi-key':'90e9a80880msh98d5ce5e0702c6bp15385ajsn2b5af67eb194'}
    });
    const resp = await instance.get()
    if(resp.data.Results.length===0){
        throw new Error(`No hay resultados para la direccion ${direccion}`);
    }
    const data = resp.data.Results[0];
    const dir = data.name;
    const lt = data.lat;
    const ln = data.lon;
    return  {
                direccion: dir,
                latitud: lt,
                longitud: ln
            }
}

module.exports = {
    getSiteLtLn
}

