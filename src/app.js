function formatDate(timestamp){
    let date=new Date(timestamp);
    let hours=date.getHours();
    if(hours<10){
    hours=`0${hours}`;
    }

    let minutes=date.getMinutes();
    if(minutes<10){
    minutes=`0${minutes}`;
    }
    
    let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day=days[date.getDay()];
    return `${day} ${hours}:${minutes}`;

}
function displayTemperature(response) {
    let temperatureElement=document.querySelector("#temperature");
    let cityElement=document.querySelector("#city");
    let descriptionElement=document.querySelector("#description");
    let humidityElement=document.querySelector("#humidity");
    let windElement=document.querySelector("#speed");
    let dateElement=document.querySelector("#date");

    temperatureElement.innerHTML=Math.round(response.data.main.temp);
    cityElement.innerHTML=response.data.main.temp;
    descriptionElement.innerHTML=response.data.weather[0].description;
    humidityElement.innerHTML=response.data.main.humidity;
    windElement.innerHTML=Math.round(response.data.main.wind);
    dateElement.innerHTML=formatDate(response.data.dt*1000);
    

}
let apiKey="7f0fdd5479dc5dd487ee8983ebd8f172";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${API key}&units=metric`;

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);