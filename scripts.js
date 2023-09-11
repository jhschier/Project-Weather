const key = "a7dcb2e68c38d8ed6038d058005e05c7"


 function inputdata(data) {
     document.querySelector(".city").innerHTML = "Weather in: " + data.name
     document.querySelector(".degree").innerHTML = Math.floor(data.main.temp) + "°C"
     document.querySelector(".description").innerHTML = data.weather[0].description
     document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
     document.querySelector(".weather-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
     document.querySelector(".input-city").value = ""
     document.querySelector

 }



async function searchcity(city) {

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`).then(answer => answer.json())

    inputdata(data)
    console.log(data)

}



function buttonclick() {
    const city = document.querySelector(".input-city").value

    searchcity(city)


}