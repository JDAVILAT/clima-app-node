const axios = require('axios');

let getClima = async (latitud, longitud) => {
    let lat = encodeURI(latitud);
    let lng = encodeURI(longitud);
   
    let responseServicio = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=5539bc740c9e445ce170208edb93a2ac`)

    return responseServicio.data.main.temp;
}

module.exports = {
    getClima
}