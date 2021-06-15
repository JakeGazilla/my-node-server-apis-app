var axios = require('axios').default

const getWeather = (city) => {
    var options = {
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/find',
        params: {
            q: city,
            cnt: '1',
            mode: 'null',
            lon: '0',
            type: 'accurate',
            lat: '0',
            units: 'metric',
        },
        headers: {
            'x-rapidapi-key':
                'cb11e8c80dmsh86613c3f1625e84p14f9a0jsnedeb5022c442',
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        },
    }

    const data = axios
        .request(options)
        .then(function (response) {
            console.log(response.data)
            return response.data
        })
        .catch(function (error) {
            console.error(error)
            return { error }
        })

    return data
}

module.exports = getWeather
