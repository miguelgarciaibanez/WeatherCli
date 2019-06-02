const axios = require('axios');

const getPlaceLatLng = async(dir) => {
    const encodedURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: { 'X-RapidAPI-Key': '2f462cdf62mshbcc5a3c30161854p1e6aa2jsn691c9a72f222' }
    })

    const response = await(instance.get());

    if (response.data.Results.length === 0) {
        throw new Error(`No results for ${direction}`);
    }

    const data = response.data.Results[0];
    const direction = data.name;
    const lat = data.lat;
    const lng = data.lon;
        
    return {
        direction,
        lat,
        lng
    }
}

module.exports = {
    getPlaceLatLng
}