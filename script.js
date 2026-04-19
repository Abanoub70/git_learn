let message = "welcome to my website";

function display() {
    console.log(message);
    alert(message);
}



function changetheme() {
    
    let body = document.querySelector("body");

    body.classList.toggle("dark_theme");
}