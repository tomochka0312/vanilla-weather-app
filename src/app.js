function displayTemperature(response) {
    console.log(response.data);
    let temperatureElement=document.querySelector("#temperature");
    let cityElement=document.querySelector("#city");
    let descriptionElement=document.querySelector("#description");
    let humidityElement=document.querySelector("#humidity");
    let windElement=document.querySelector("#speed");
    temperatureElement.innerHTML=Math.round(response.data.main.temp);
    cityElement.innerHTML=response.data.main.temp;
    descriptionElement.innerHTML=response.data.weather[0].description;
    humidityElement.innerHTML=response.data.main.humidity;
    windElement.innerHTML=Math.round(response.data.main.wind);
}
let apiKey="7f0fdd5479dc5dd487ee8983ebd8f172";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${API key}&units=metric`;

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);