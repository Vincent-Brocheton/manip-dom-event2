let submit = document.getElementById("form");

submit.addEventListener("submit", (e) => {
    e.preventDefault();
    let photocopie = Number(document.getElementById("photocopie").value);
    let result = document.getElementById("result");
    let prix;

    if (photocopie > 0 && photocopie <= 10) {
        prix = 0.1 * photocopie;
        result.textContent = "Pour " + photocopie + " photocopie vous devez payez " + prix + "€";
    }
    if (photocopie > 10 && photocopie <= 30) {
        prix = (0.1 * 10) + (0.09 * (photocopie - 10));
        result.textContent = "Pour " + photocopie + " photocopie vous devez payez " + prix + "€";
    }
    if (photocopie > 30) {
        prix = (0.1 * 10) + (0.09 * 20) + (0.08 * (photocopie - 30));
        result.textContent = "Pour " + photocopie + " photocopie vous devez payez " + prix.toFixed(2) + "€";
    }
})