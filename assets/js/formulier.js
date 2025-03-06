document.getElementById('bestelForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let isValid = true;
    let fields = ['voornaam', 'achternaam', 'straatnaam', 'huisnummer', 'postcode', 'land', 'email', 'telefoonnummer', 'geboortedatum'];

    fields.forEach(function (field) {
        let input = document.getElementById(field);
        let errorSpan = input.nextElementSibling;

        if (!input.value.trim()) {
            input.classList.add('invalid');

            if (!errorSpan || !errorSpan.classList.contains('errorMessage')) {
                errorSpan = document.createElement('span');
                errorSpan.classList.add('errorMessage');
                input.parentNode.insertBefore(errorSpan, input.nextSibling);
            }
            errorSpan.textContent = `${input.name.charAt(0).toUpperCase() + input.name.slice(1)} is verplicht`;
            isValid = false;
        } else {
            input.classList.remove('invalid');
            if (errorSpan) {
                errorSpan.textContent = '';
            }
        }
    });

    // Algemene voorwaarden checkbox
    let voorwaarden = document.getElementById('voorwaarden');
    let voorwaardenError = voorwaarden.nextElementSibling;

    if (!voorwaarden.checked) {
        if (!voorwaardenError || !voorwaardenError.classList.contains('errorMessage')) {
            voorwaardenError = document.createElement('span');
            voorwaardenError.classList.add('errorMessage');
            voorwaarden.parentNode.insertBefore(voorwaardenError, voorwaarden.nextSibling);
        }
        voorwaardenError.textContent = 'Je moet akkoord gaan met de algemene voorwaarden';
        isValid = false;
    } else if (voorwaardenError) {
        voorwaardenError.textContent = '';
    }

    if (isValid) {
        alert("Formulier succesvol verzonden!");
        event.target.reset();
    }
});

