var input = document.querySelector("#input");
var button = document.querySelector("#button");
var output = document.querySelector("#output");

button.addEventListener("click" , clickhandler);

var url="https://api.funtranslations.com/translate/russian-accent.json";
function clickhandler(){
 var final = url+"?text="+input.value;
    fetch(final)
    .then(response => response.json())
    .then(json =>{
       var translated = json.contents.translated;
       output.innerHTML = translated;
    })
    .catch(()=> alert("Server Problem"));
}
var home = document.querySelector("#home-button");
home.addEventListener("click", function homeClick(){
    location.href="home.html";
})