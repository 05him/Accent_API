var input = document.querySelector("#input");
var button = document.querySelector("#button");
var output = document.querySelector("#output");

button.addEventListener("click" , clickhandler);

var url="https://api.funtranslations.com/translate/asian-accent.json";
function clickhandler(){
 var final = url+"?text="+input.value;
    fetch(final)
    .then(response => response.json())
    .then(json =>{
       var translated = json.contents.translated;
       output.innerHTML = translated;
    })
    .check(()=> alert("Server Problem"));


}

var home = document.querySelector("#go-to");
home.addEventListener("click",homeClick);

function homeClick(){
    location.href="home.html";
}