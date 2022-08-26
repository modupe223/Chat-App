const passwordField = document.getElementById("password");
const toggle = document.getElementById("eye");

toggle.addEventListener("click", function () {
    if(passwordField.type === "password" ){
        passwordField.type = 'text';
    }
    else{
        passwordField.type = 'password';
    }
   
})