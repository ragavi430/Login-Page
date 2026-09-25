let button = document.getElementById("loginBtn");
let message = document.getElementById("message");

button.addEventListener("click", function() {

    let username = document.getElementById("username").value;

    if (username == "") {
        message.textContent = "Please enter your username!";
    } else {
        message.textContent = "Welcome " + username + "!";
    }

});