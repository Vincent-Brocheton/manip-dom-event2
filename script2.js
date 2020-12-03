let submit = document.getElementById("submit");

submit.addEventListener("submit", (e) => {
    e.preventDefault();
    let genre = document.getElementById("sexe").value.toUpperCase();
    let age = Number(document.getElementById("age").value);

    if (genre === "H" || genre === "HOME") {
        genre = "HOMME";
    }
    if (genre === "F" || genre === "FEME") {
        genre = "FEMME";
    }

    if ((genre === "HOMME" && age >= 20) || (genre === "FEMME" && age >= 18 && age <= 35)) {
        document.getElementById("result").textContent = "Vous devez payer l'impôts";
    } else {
        document.getElementById("result").textContent = "Vous avez de la chance";

    }
})