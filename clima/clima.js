const axios = require('axios');

const getClima = async(latitud, longitud) => {

    let respuesta = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ latitud }&lon=${ longitud }&units=metric&appid=3719e402fabadc8c3786a8b677d2a8e3`);


    return respuesta.data.main.temp;
}

module.exports = {
    getClima
}