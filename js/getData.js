"use strict"

let baseURL = "http://api.weatherstack.com/?key=f81105e080d86faf15d235b110dff02b";
let current = "current";
let query = "New York";

function getData(){
    fetch(baseURL  + current,{
        method: "GET",
        mode: 'cors'
    }).then(function(r){
        if(!r.ok){
            console.log("error")
        }
        return r.json()
    })
    .then(function(json){
        console.log(json);
        let contenedor = document.querySelectorAll("tbody");
        contenedor.innerHTML = ''
        for (let data of json.baseURL){
            contenedor.innerHTML += data.current;
        }
    })
    .catch(function(e){
        console.log(e);
    })
};
document.querySelector("button").addEventListener('click', function(){
    getData();
})