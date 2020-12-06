window.addEventListener('load', (event)=>{
    const url1 = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=f35b728b9784b1eaf04baa7a3e381718&units=imperial";
    const url2 = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=f35b728b9784b1eaf04baa7a3e381718";

    fetch(url1)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        document.getElementById("currentCond").textContent = jsonObject.weather[0]["main"];

        document.getElementById("currentTemp").textContent = Math.floor(jsonObject.main.temp);

        document.getElementById("highTemp").textContent = Math.floor(jsonObject.main.temp_max);
       
        document.getElementById("lowTemp").textContent = Math.floor(jsonObject.main.temp_min);

        document.getElementById("humidity").textContent = Math.floor(jsonObject.main.humidity);

        document.getElementById("windSpeed").textContent = jsonObject.wind.speed;

        windChillCal(jsonObject.main.temp, jsonObject.wind.speed);
    });

    fetch(url2)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const weatherList = jsonObject["list"];

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        let num = 0;
        for (i = 0; i < weatherList.length; i++) {
            let forcastTime = new Date(weatherList[i].dt_txt)

            if (forcastTime.getHours() == 18){
                num = num + 1;

                let page_id = "label" + num;
                let page_img = "img" + num;
                let page_output = "output" + num;

                let currentTemp = Math.floor((weatherList[i].main.temp - 273.15) * (9 / 5) + 32);

                document.getElementById(page_id).textContent = days[forcastTime.getDay()];

                document.getElementById(page_output).textContent = currentTemp;

                let imagesrc = 'https://openweathermap.org/img/w/' + weatherList[i].weather[0].icon + '.png'; 
                document.getElementById(page_img).setAttribute('src', imagesrc);
            }
        }
    });
});


const windChillCal = function(temp, speed){
    let text;

    if (speed >= 3 && temp <= 50){
        text = (parseInt(35.74 + (0.6215 * temp) - (35.75 * (speed ** 0.16)) + (0.4275 * temp * (speed ** 0.16))) + ("℉"));
    } else {
        text = "N/A"
    }

    const windChill = document.getElementById("windChill");
    windChill.textContent = text;
};