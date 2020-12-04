const url = "https://swapi.dev/api/people/4/";

fetch(url, ).then(function (response) {
    return response.json();
}).then(function (object){
    console.log(object);
}).catch(function (error){
    console.error("Something went wrong");
    console.error(error);
});