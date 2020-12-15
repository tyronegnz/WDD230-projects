window.addEventListener('load', (event)=>{
    const url1 = "https://api.openweathermap.org/data/2.5/forecast?q=Kensington&appid=b336297147a1b2caa8bf1b8b52e750d5";
    const url2 = "https://api.openweathermap.org/data/2.5/forecast?q=Gilbert&appid=b336297147a1b2caa8bf1b8b52e750d5";
    const url3 = "https://api.openweathermap.org/data/2.5/forecast?q=Kensington&appid=b336297147a1b2caa8bf1b8b52e750d5";
    const url4 = "https://api.openweathermap.org/data/2.5/forecast?q=Ogden&appid=b336297147a1b2caa8bf1b8b52e750d5";
    
    fetch(url1)
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