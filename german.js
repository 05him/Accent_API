var input = document.querySelector("#input");
var button = document.querySelector("#button");
var output = document.querySelector("#output");
var home = document.querySelector("#go-to");
home.addEventListener("click", function homeClick(){
    location.href="home.html";
})
button.addEventListener("click" , clickhandler);

var url="https://api.funtranslations.com/translate/german-accent.json";
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


