const url = 'https://api.openweathermap.org/data/2.5/'
const key ='90e2cf1172b425024c17ea3f5e04a51d'

const setQuery=(e)=>{
    if(e.keyCode=='13')
        getResult(search.value) 
}

const getResult=(cityName)=>{
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(weather =>{
        return weather.json()
    })
    .then(displayResult)
}

const displayResult=(result) =>{
    let city = document.querySelector('.city')
    city.innerText = `${result.name}, ${result.sys.country}`

    let temp = document.querySelector('.temp')
    temp.innerText = `${Math.round(result.main.temp)}°C`

    let desc = document.querySelector('.desc')
    desc.innerText = result.weather[0].description

    let minmax = document.querySelector('.minmax')
    minmax.innerText = `${Math.round(result.main.temp_min)}/${Math.round(result.main.temp_max)}`
}

const search = document.getElementById('search')
search.addEventListener('keypress',setQuery)