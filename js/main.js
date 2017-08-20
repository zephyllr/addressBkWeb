//Dummy Credentials
var dUsername = "guest";
var dPassword = "123";

function validate_login(){
    var elUsername = document.getElementById("username").value;
    var elPassword = document.getElementById("password").value;
    if( elUsername == dUsername && elPassword == dPassword){
	location.href = "contacts.html";
    }else if( elUsername == "" || elPassword == ""){
	elInvalid.textContent = "Username/Password Fields Required             \r\nPlease Try Again!";
    }else{
	elInvalid.textContent = "Invalid Username/Password Combo.               \r\nPlease Try Again!";
    }
}

var elInvalid = document.getElementById("invalid");
