const axios = require('axios');




const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion);

    let respuesta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyA4v2HSrdQlhrSfbsyl0DwaZ-JI_9c0UWU`)


    if (respuesta.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`)
    }


    let location = respuesta.data.results[0];
    let coors = location.geometry.location;

    // console.log('Direccion: ', location.formatted_address);
    // console.log('Latitud: ', coors.lat);
    // console.log('Longitud: ', coors.lng);


    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getLugarLatLng
}