window.addEventListener('load', (event)=>{
    var temp = document.getElementById("temp-today").innerHTML;
    var wind = document.getElementById("wind-speed").innerHTML;
    var windChill = document.getElementById("wind-chill");

    var chill = 35.74 + (0.6215 * temp) - (35.75 * (Math.pow(wind, 0.16))) + (0.4275 * temp * (Math.pow(wind, 0.16)));
    windChill.textContent = Math.round(chill, 0);
})
