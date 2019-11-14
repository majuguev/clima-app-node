const axios = require('axios');

const getLugarLatLon = async(dir) => {

    const encodedURL = encodeURI(dir); //para convertir a solo una palabra ex "New York" a "New%20York"
    //  console.log(encodedURL);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        //timeout: 1000,
        headers: { 'x-rapidapi-key': 'aca119df20msh6ab24be4b2c4fb2p196c46jsn55a4337434d7' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        direccion,
        lat,
        lon
    }

}

module.exports = {
    getLugarLatLon
}