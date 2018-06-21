const lugar = require('./lugar/lugar');
const clima = require('./clima/clima')


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


let getInfo = async(direccion) => {

    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `El clima en la ciudad de ${ direccion } es de ${ temp } grados celcius`;
    } catch (e) {
        return `No se pudo determinar el clima en la ciudad de ${ direccion }`;
    }
}


getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));


// // lugar.getLugarLatLng(argv.direccion)
// //     .then(resp => {
// //         console.log(resp);
// //     }).catch(e => console.log(e));


// clima.getClima(35, 139)
//     .then(resp => console.log(resp))
//     .catch(e => console.log(e));