let submit = document.getElementById("submit");

submit.addEventListener("submit", (e) => {
    e.preventDefault();
    let prix_HT = Number(document.getElementById("prixHT").value);
    let taux_TVA = Number(document.getElementById("TVA").value);
    let produit = document.getElementById("produit").value;
    let nb_article = Number(document.getElementById("nbArticle").value);

    let augmentation_TVA = (prix_HT * taux_TVA) / 100;
    let prix_ttc = (prix_HT + augmentation_TVA) * nb_article;

    document.getElementById("result").textContent = "Le prix pour " + nb_article + " " + produit + " est de : " + prix_ttc + "€";
})