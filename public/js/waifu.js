// header links grow and underline functionality
const home = document.querySelector('.home-link')
const about = document.querySelector('.about-link')
const help = document.querySelector('.help-link')

home.classList.add('grow')
about.classList.add('grow')
help.classList.add('grow')

// weather
const result = document.getElementById('result')

// AXIOS config
// const axiosConfig = {
//     headers: {
//         withCredentials: true,
//         'Access-Control-Allow-Origin': '*',
//         SameSite: 'None',
//         Accept: 'application/json, text/plain, */*',
//     },
// }

// const corsOptions = {
//     //To allow requests from client
//     origin: [
//         'http://localhost:3001',
//         'http://127.0.0.1',
//         'http://104.142.122.231',
//     ],
//     credentials: true,
//     exposedHeaders: ['set-cookie'],
// }

axios.defaults.withCredentials = true
axios.defaults.crossDomain = true

const generatePhoto = (e) => {
    e.preventDefault()
    // fetch input
    const input = document.getElementById('fname').value

    // restrict input field
    if (input === '') {
        let loader = `<h2>You have to provide some theme</h2>`
        result.innerHTML = loader
    } else {
        // setup a loader
        loader = `<div class="loadingio-spinner-bean-eater-wb3w1z7vy4"><div class="ldio-uofoiaz2xx">
            <div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div>
            </div></div>`
        result.innerHTML = loader

        // Fetch the weather
        axios
            .get(`http://localhost:3000/waifu/post?msg=${input}`)
            .then(async (res) => {
                console.log(res)
                if (res.error) {
                    result.innerHTML = `
					<h2>Something went wrong</h2>
				`
                } else {
                    result.innerHTML = `
                        <div>${res.data}</div>
                    
				`
                }
            })
    }
}

// Hook up button
document.getElementById('send').addEventListener('click', generatePhoto)
