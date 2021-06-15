const path = require('path')
const express = require('express')
const hbs = require('hbs')

// my imports
const fetchJoke = require('./utils/jokes')
const fetchWeather = require('./utils/weather')
// const fetchPhoto = require('./utils/photo')
const getP = require('./utils/photo')
const chatWaifu = require('./utils/waifu')

const app = express()

// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
})

// PUBLIC DIRECTORY & HOOK
const public = path.join(__dirname, '../public')
app.use(express.static(public))

// HBS INIT
app.set('view engine', 'hbs')

// HBS VIEWS & HOOK
const views = path.join(__dirname, '../templates/views')
app.set('views', views)

// HBS PARTIALS & HOOK
const partials = path.join(__dirname, '../templates/partials')
hbs.registerPartials(partials)

// EXPRESS ROUTES
app.get('', (req, res) => {
    res.render('index', {
        title: 'Home',
        name: 'Jakezilla',
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Jakezilla',
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Jakezilla',
    })
})

app.get('/jokes', (req, res) => {
    res.render('jokes', {
        title: 'Jokes',
        name: 'Jakezilla',
    })
})

app.get('/jokes/fetch', async (req, res) => {
    data = await fetchJoke()
    if (data.message) {
        return res.send({
            error: data.message,
        })
    }
    res.send(data)
    console.log(data)
})

app.get('/weather', (req, res) => {
    res.render('weather', {
        title: 'Weather',
        name: 'Jakezilla',
    })
})

app.get('/weather/fetch', async (req, res) => {
    const city = req.query.city

    data = await fetchWeather(city)
    if (data.error) {
        return res.send({
            error: data.error.message,
        })
    }
    res.send(data)
    // console.log(data)
})

app.get('/photo', (req, res) => {
    res.render('photo', {
        title: 'Photo',
        name: 'Jakezilla',
    })
})

app.get('/photos/fetch', async (req, res) => {
    const theme = req.query.theme

    data = await getP(theme)
    res.send(data)
    // console.log(data)
})

app.get('/waifu', (req, res) => {
    res.render('waifu', {
        title: 'Waifu',
        name: 'Jakezilla',
    })
})

app.get('/waifu/post', async (req, res) => {
    const chatMsg = req.query.msg
    console.log(chatMsg)

    data = await chatWaifu(chatMsg)
    console.log('Response', data)
    res.send(data)
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})
