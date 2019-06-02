const axios = require('axios');

const getClima = async(lat, lng)=>{
    //api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=d8d6bfbb0a8255215995b5ce9e7ccd02&units=metric
    const resp = await(axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=d8d6bfbb0a8255215995b5ce9e7ccd02&units=metric`));

    return resp.data.main.temp;
}

module.exports={
    getClima
}