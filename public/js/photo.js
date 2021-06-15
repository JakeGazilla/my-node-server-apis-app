// header links grow and underline functionality
const home = document.querySelector('.home-link')
const about = document.querySelector('.about-link')
const help = document.querySelector('.help-link')

home.classList.add('grow')
about.classList.add('grow')
help.classList.add('grow')

// weather
const result = document.getElementById('result')

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
        axios.get(`/photos/fetch?theme=${input}`).then(async (res) => {
            console.log(res)
            if (res.error) {
                result.innerHTML = `
					<h2>Something went wrong</h2>
				`
            } else {
                const url = res.data.response.urls.full
                const author = res.data.response.user.username

                result.innerHTML = `
                        <img src=${url}/>
                        <div>Photo by <a href="https://unsplash.com/@${author}?utm_source=your_app_name&utm_medium=referral">${author}</a> on <a href="https://unsplash.com/?utm_source=your_app_name&utm_medium=referral">Unsplash</a></div>
                    
				`
            }
        })
    }
}

// Hook up button
document.getElementById('send').addEventListener('click', generatePhoto)
