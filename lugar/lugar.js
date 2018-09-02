const axios = require('axios');

let getAddressLatLng = async (direccion) => {
    let address = encodeURI(direccion);
    let objResponse = {};

    let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyD74k2rvcC5fNFGg0pSA5z0pwfIsgpuRJU`);

    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error(`No existe la cidad ingresada`);
    }

    for (let result of response.data.results) {
        objResponse = {
            Direccion: result.formatted_address,
            Longitud: result.geometry.location.lat,
            Latitud: result.geometry.location.lng
        }
        break;
    }

    return objResponse;
}

module.exports = {
    getAddressLatLng
}