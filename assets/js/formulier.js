document.getElementById("bestelForm").addEventListener("submit", function (event) {
    event.preventDefault(); 

    let isValid = true;
    let errorList = document.getElementById("error-list");
    errorList.innerHTML = ""; 

    // Alle verplichte velden (tussenvoegsel blijft optioneel)
    let velden = ["aanhef", "voornaam", "achternaam", "email", "geboortedatum", "straat", "postcode", "huisnummer", "telefoonnummer", "land"];

    velden.forEach(veld => {
        let input = document.getElementById(veld);
        let errorMessage = input.nextElementSibling;

        if (input.value.trim() === "") {
            input.classList.add("error");
            errorMessage.style.display = "block";
            errorList.innerHTML += `<li>${errorMessage.innerText}</li>`;
            isValid = false;
        } else {
            input.classList.remove("error");
            errorMessage.style.display = "none";
        }
    });

    // Extra controle voor e-mail (moet een geldig e-mailadres zijn)
    let email = document.getElementById("email");
    let emailError = email.nextElementSibling;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simpele e-mail validatie

    if (!emailRegex.test(email.value.trim())) {
        email.classList.add("error");
        emailError.style.display = "block";
        errorList.innerHTML += `<li>Voer een geldig e-mailadres in.</li>`;
        isValid = false;
    } else {
        email.classList.remove("error");
        emailError.style.display = "none";
    }

    // Extra controle voor geboortedatum (moet een geldige datum zijn)
    let geboortedatum = document.getElementById("geboortedatum");
    let geboortedatumError = geboortedatum.nextElementSibling;

    if (isNaN(Date.parse(geboortedatum.value))) {
        geboortedatum.classList.add("error");
        geboortedatumError.style.display = "block";
        errorList.innerHTML += `<li>Voer een geldige geboortedatum in.</li>`;
        isValid = false;
    } else {
        geboortedatum.classList.remove("error");
        geboortedatumError.style.display = "none";
    }

    // Controleer of de algemene voorwaarden zijn geaccepteerd
    let voorwaarden = document.getElementById("voorwaarden");
    let voorwaardenError = voorwaarden.nextElementSibling.nextElementSibling;

    if (!voorwaarden.checked) {
        voorwaardenError.style.display = "block";
        errorList.innerHTML += `<li>${voorwaardenError.innerText}</li>`;
        isValid = false;
    } else {
        voorwaardenError.style.display = "none";
    }

    // Toon of verberg het foutbericht
    document.getElementById("error-box").classList.toggle("hidden", isValid);

    if (isValid) {
        let nieuwsbrief = document.getElementById("nieuwsbrief").checked;
        alert("Formulier is succesvol verzonden!" + (nieuwsbrief ? "\nJe bent ingeschreven voor de nieuwsbrief." : ""));
    }

});

document.addEventListener('DOMContentLoaded', () => {
    const cartCounter = document.querySelector('.cart-counter');
    const counterText = document.querySelector('.counter-text');
    let cartCount = localStorage.getItem('cartCount') ? parseInt(localStorage.getItem('cartCount')) : 0;
    function updateCartCounter() {
        counterText.textContent = cartCount;
        cartCounter.style.display = cartCount > 0 ? 'flex' : 'none';
    }
    updateCartCounter();
});