const pswrdField = document.querySelectorAll(".form input[type='password']"),
toggleBtn = document.querySelectorAll(".form .field i");

toggleBtn.onclick = () =>{
    if(pswrdField.type == "password"){
        pswrdField.type = "text";
        toggleBtn.classList.add("active");
    }else{
        pswrdField.type = "password";
        toggleBtn.classList.remove("active");
    }
}