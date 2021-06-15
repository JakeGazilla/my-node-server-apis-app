// API Ninjas Jokes API endpoint.

const axios = require('axios').default

const getJoke = () => {
    var options = {
        method: 'GET',
        url: 'https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes',
        params: { limit: '1' },
        headers: {
            'x-rapidapi-key':
                'cb11e8c80dmsh86613c3f1625e84p14f9a0jsnedeb5022c442',
            'x-rapidapi-host': 'jokes-by-api-ninjas.p.rapidapi.com',
        },
    }

    const data = axios
        .request(options)
        .then(function (response) {
            console.log('utils/jokes:  ', response.data[0])
            return response.data[0]
        })
        .catch(function (error) {
            return error
        })
    return data
}

module.exports = getJoke
