let cardChange = document.getElementById("carte");

cardChange.addEventListener("mouseenter", function(event) {
    event.target.style.width = "20rem";
    event.target.style.backgroundColor = "red";
    event.target.style.boxShadow = "black 2px 2px";

    setTimeout(function() {
        event.target.style.width = "18rem";
        event.target.style.backgroundColor = "";
        event.target.style.boxShadow = "";
    }, 500);

}, false);