var userName = document.querySelector("#user-name");
userName.addEventListener("keypress",e);
function e(e){
   if(e.key==="Enter"){
      location.href="home.html?"+userName.value;
      //  console.log(userName.value);
   }
};

console.log(transfer);