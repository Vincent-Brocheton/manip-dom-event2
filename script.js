// let cardChange = document.getElementById("carte");

// cardChange.addEventListener("mouseenter", function(event) {
//     event.target.style.width = "20rem";
//     event.target.style.backgroundColor = "red";
//     event.target.style.boxShadow = "black 2px 2px";

//     setTimeout(function() {
//         event.target.style.width = "18rem";
//         event.target.style.backgroundColor = "";
//         event.target.style.boxShadow = "";
//     }, 500);

// }, false);

let submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
    e.preventDefault();
    let prix_HT = Number(document.getElementById("prixHT").value);
    let taux_TVA = Number(document.getElementById("TVA").value);
    let produit = document.getElementById("produit").value;
    let nb_article = Number(document.getElementById("nbArticle").value);

    let augmentation_TVA = (prix_HT * taux_TVA) / 100;
    let prix_ttc = (prix_HT + augmentation_TVA) * nb_article;

    document.getElementById("result").textContent = prix_ttc;
})