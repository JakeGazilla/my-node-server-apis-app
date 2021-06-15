// header links grow and underline functionality
const home = document.querySelector('.home-link')
const about = document.querySelector('.about-link')
const help = document.querySelector('.help-link')

home.classList.add('grow')
about.classList.add('grow')
help.classList.add('grow')

// joke
const result = document.getElementById('result')

const generateJoke = () => {
    // setup a loader
    let loader = `<div class="loadingio-spinner-bean-eater-wb3w1z7vy4"><div class="ldio-uofoiaz2xx">
            <div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div>
            </div></div>`
    result.innerHTML = loader

    // Fetch the joke
    axios.get(`http://localhost:3000/jokes/fetch`).then(async (res) => {
        console.log(res)
        if (res.error) {
            result.innerHTML = `
					<h2>Something went wrong</h2>
				`
        } else {
            result.innerHTML = `
					<h2>${res.data.joke}</h2>
				`
        }
    })
}

// Hook up button
document.getElementById('jokes-button').addEventListener('click', generateJoke)
