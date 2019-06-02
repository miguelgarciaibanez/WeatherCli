const place = require('./place/place');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direction: {
        alias :'d',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand:true
    }
}).help().argv;


// const place2Search = place.getPlaceLatLng(argv.direction)
//     .then(response => {
//         console.log(response);
//     })

// clima.getClima('40.750000','-74.000000')
//     .then(console.log)
//     .catch(console.log);
const direction = argv.direction;
const getInfo = async(direction) => {
    
    try {
        const coords = await(place.getPlaceLatLng(direction))
        const temp = await(clima.getClima(coords.lat, coords.lng));
        return `Wheather in ${direction} is ${temp} degrees`;
    } catch (error) {
        return (`Cannot get wheather of ${direction}`);
    }
}

getInfo(argv.direction)
    .then(console.log)
    .catch(console.log);