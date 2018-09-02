const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        demand: true,
        desc: 'Dirección de la ciudad para obtener el clima'
    }
}).argv;

const { getAddressLatLng } = require('./lugar/lugar.js');
const { getClima } = require('./clima/clima.js');

// console.log(argv.direccion);

let getInfo = async (direccion) => {
    try {
        let coors = await getAddressLatLng(direccion);
        let temp = await getClima(coors.Longitud, coors.Latitud);
        return `El clima en ${coors.Direccion} es de ${temp}`;
    } catch (error) {
        return `No se pudo determinar el clima en ${direccion}`;
    }
}

// getAddressLatLng(argv.direccion)
//     .then(r => {
//         console.log(r);

//     })
//     .catch(e => console.log(e));

// getClima(r.Longitud, r.Latitud).then(r => console.log(r)).catch(e => console.log(e))

getInfo(argv.direccion).then(r => console.log(r)).catch(e => console.log(e));