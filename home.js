var asianButton = document.querySelector("#asian-button");
var russianButton = document.querySelector("#russian-button");
var germanButton = document.querySelector("#german-button");
var britishButton = document.querySelector("#british-button");
var southernButton = document.querySelector("#southern-button");
var neonName = document.querySelector("#neon-name");
// import {userName.value} from "index.js";
neonName.textContent=window.location.search.slice(1);
// console.log(username);
asianButton.addEventListener("click", function clickhandler(){
    location.href="asian.html";
})


russianButton.addEventListener("click", function clickhandler(){
    location.href="russian.html";
})

germanButton.addEventListener("click", function clickhandler(){
    location.href="german.html";
})

britishButton.addEventListener("click", function clickhandler(){
    location.href="british.html";
})

southernButton.addEventListener("click", function clickhandler(){
    location.href="southern.html";
})

