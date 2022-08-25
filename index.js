const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordcheck = document.getElementById("password2");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    checkInputs();
})
function checkInputs(){
    var usernameValue = username.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();
    var passwordcheckvalue = passwordcheck.value.trim()
    
    if(usernameValue === "") {
    
      setErrorFor(username, "Username cannot be blank")
      
     }else if(usernameValue.length < 4){
         setErrorFor(username, "Username cannot be less than four letters")
     }
     
     
     else {
        setSucessFor(username);
    }
    
    if(passwordValue === "") {
        setErrorFor(password, "Password can't be blank 'ese'")
    }else if(passwordValue.length < 6){
         setErrorFor(password, "Password too short")
     }
        
    
    else {
        setSucessFor(password)
    }
    if(emailValue === "") {
        setErrorFor(email,"Email cannot be blank")
     }
     else{
         setSucessFor(email)
     }
     
    
    if(passwordcheckvalue === "") {
        setErrorFor(password2, "Password can't be blank 'ese'")
    }else if(passwordcheckvalue != passwordValue){
        setErrorFor(password2, "Password mismatch")
    }
    
    else{
        setSucessFor(passwordcheck)
    }
    
    
}



function setErrorFor(input,message){
    const formControl = input.parentElement;
    
   const small = formControl.querySelector("small")
    small.innerHTML = message;
    
    formControl.className = "form-control error"
}

function setSucessFor(input){
     const formControl = input.parentElement;
    formControl.className = "form-control sucess"
}



var main = document.getElementById("main")
var container = document.getElementById("container")

var button = document.getElementById("butt")
button.addEventListener("click",()=>{
    main.classList.add("hidden");
    container.style.display = "block";
})


var submit = document.getElementById("btn")

submit.addEventListener("click", () =>{
    main.classList.remove("hidden");
    container.style.display = "none";
})