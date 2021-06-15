// server
const fetch = require('node-fetch')
global.fetch = fetch

const { createApi } = require('unsplash-js')

// on your node server
const serverApi = createApi({
    accessKey: 'ZnA8Fx4U0KqXYNHvj2wd5CTv_f_E86PCOVh4UWIuIXA',
    //...other fetch options
})

const getP = (theme) => {
    data = serverApi.photos
        .getRandom(
            // { photoId: 'dpbXgTh0Lac' },
            { topics: theme },
            // `fetch` options to be sent only with _this_ request
            {
                headers: {
                    'Content-type': 'application/json',
                    // secretKey: 'iQMQZh4G6OB7oALRW7WNePxFRBPQJv9YrXBWel8gUEU',
                },
            }
        )
        .then((res) => {
            return res
        })
        .catch((err) => {
            return err
        })
    return data
}

module.exports = getP
