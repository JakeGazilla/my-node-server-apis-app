// header links grow and underline functionality
const home = document.querySelector('.home-link')
const about = document.querySelector('.about-link')
const help = document.querySelector('.help-link')

home.classList.add('grow')
about.classList.add('grow')
help.classList.add('grow')

// weather
const result = document.getElementById('result')

const generateWeather = (e) => {
    e.preventDefault()
    // fetch input
    const input = document.getElementById('fname').value

    // restrict input field
    if (input === '') {
        let loader = `<h2>You have to provide some city name</h2>`
        result.innerHTML = loader
    } else {
        // setup a loader
        loader = `<div class="loadingio-spinner-bean-eater-wb3w1z7vy4"><div class="ldio-uofoiaz2xx">
            <div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div>
            </div></div>`
        result.innerHTML = loader

        // Fetch the weather
        axios.get(`/weather/fetch?city=${input}`).then(async (res) => {
            console.log(res)
            if (res.error) {
                result.innerHTML = `
					<h2>Something went wrong</h2>
				`
            } else {
                // sort the data out of object
                const conditions = res.data.list[0].weather[0].main
                const icon = res.data.list[0].weather[0].icon
                const description = res.data.list[0].weather[0].description
                const temp = res.data.list[0].main.temp
                const pressure = res.data.list[0].main.pressure
                const humidity = res.data.list[0].main.humidity

                result.innerHTML = `
					<div class='result-main'>
                        <img src='https://openweathermap.org/img/wn/${icon}@2x.png'/>
                        <h2>${conditions} - ${description}</h2>
                        <h3>Temp: ${temp} °C</h3>
                        <h3>Pressure: ${pressure} Hp</h3>
                        <h3>Humidity: ${humidity} %</h3>
                    </div>
				`
            }
        })
    }
}

// Hook up button
document.getElementById('send').addEventListener('click', generateWeather)
