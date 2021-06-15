var axios = require('axios').default

const chatWaifu = (msg) => {
    var options = {
        method: 'POST',
        url: 'https://waifu-ai.p.rapidapi.com/path',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'x-rapidapi-key':
                'cb11e8c80dmsh86613c3f1625e84p14f9a0jsnedeb5022c442',
            'x-rapidapi-host': 'waifu-ai.p.rapidapi.com',
        },
        data: {
            message: msg,
            user_id: '9fa832g79fh2398h',
            from_name: 'Shinobu',
            to_name: 'Holo',
            situation:
                'Shinobu and Holo are hanging out in the park. Shinobu is bored and Holo is excited.',
            preset_mode: 'waifu',
            translate_from: 'auto',
        },
    }

    const data = axios
        .request(options)
        .then(function (response) {
            // console.log(response.data)
            return response.data
        })
        .catch(function (error) {
            console.error(error)
            return error
        })

    return data
}

module.exports = chatWaifu
