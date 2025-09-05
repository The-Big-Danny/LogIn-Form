let hero = document.getElementById("hero");
let form = document.getElementById("myForm");
let email = document.getElementById("email");
let username = document.getElementById("username");
let password = document.getElementById("password");
let header = document.getElementById("header");
let button = document.getElementById('myBtn');

//event styling
button.addEventListener("click", modifyPage);

//calling functions
function modifyPage() {
    hero.style.boxShadow = " 5px 4px 6px 3px blue";
    header.style.textShadow = "1px 2px 2px blue";
    button.style.background = "green";
    email.style.border = "2px solid blue";
    username.style.border = "2px solid blue";
    password.style.border = "2px solid blue";
    phone.style.border = "2px solid blue";
}

// Displaying input content on console using .value

function proceed() {
    
    // let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    
    console.log("proceed Btn was called");
    // console.log("My email is ", email);
    console.log("My username is ",username);
    console.log("My password is ",password);

}
