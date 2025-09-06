const searchButton = document.querySelector('button')
const containerDiv = document.querySelector('.container')
const searchInput = document.querySelector('input')
const inputLabel = document.querySelector('label')
let city = document.createElement('label')
let temp = document.createElement('label')
let Time = document.createElement('label')



searchButton.addEventListener('click',()=>{

    searchButton.remove()
    inputLabel.remove()
    searchInput.remove()

    fetchData(searchInput.value)
    
    containerDiv.style.height = '300px'
    city.style.marginLeft = '20px'
    temp.style.marginLeft = '40px'
    Time.style.marginLeft = '40px'

   
    city.innerText = 'City : '+ searchInput.value
    city.style.marginRight = '150px'
    containerDiv.append(city)

    
    temp.innerText = 'Temperature : '
    temp.style.marginRight = '150px'
    containerDiv.append(temp)

    
    Time.innerText = 'LocalTime : '
    Time.style.marginRight = '150px'
    containerDiv.append(Time)

    
})

async function fetchData(input){

    let endpoint = `http://api.weatherapi.com/v1/current.json?key=2568755a8ce7406d8e1132858240110&q=${input}&aqi=no`

    let response = await fetch(endpoint)

    let data = await response.json()

    updateWeather(data.current.temp_c,data.location.localtime)

}

function updateWeather(temp_c,date){
    temp.innerText = 'Temperature : ' + temp_c + 'Celsius'
    Time.innerText = 'LocalTime : ' + date 
}
