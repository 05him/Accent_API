var userName = document.querySelector("#user-name");

userName.addEventListener("keypress", clickhandler);
function clickhandler(){
    console.log("hello");
    location.href = "home.html";
}