const axios = require('axios');


const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=dc494975e76a436436d3978facf3d27e&units=metric`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}