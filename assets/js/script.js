// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const cars = [
        {
            model: 'Porsche 911 Carrera GTS Cabriolet',
            fuel: 'benzine',
            price: 204900,
            mileage: 16952,
            image: './assets/car-images/Porsche-911-Carrera-GTS-Cabriolet.avif',
            description: 'Benzine | Agaatgrijs Metalllic | Zwart interieur',
            registration: '06/2023',
            owners: '1 eerdere eigenaar'
        },
        {
            model: 'Porsche Cayenne E-Hybrid Coupé',
            fuel: 'plug-in hybride',
            price: 167653,
            mileage: 0,
            image: './assets/car-images/Porsche-Cayenne-E-Hybrid-Coupé-Kwartsiet-Grijs.avif',
            description: 'Plug-in hybride | Kwartsiet Grijs Metalllic | Zwart interieur',
            registration: '03/2025',
            owners: 'geen eerdere eigenaar'
        },
        {
            model: 'Porsche 911 Carrera GTS',
            fuel: 'benzine',
            price: 199900,
            mileage: 12957,
            image: './assets/car-images/Porsche-911-zwart.avif',
            description: 'Benzine | zwart | Zwart interieur',
            registration: '03/2023',
            owners: '3 eerdere eigenaar'
        },
        {
            model: 'Porsche Cayenne E-Hybrid Coupé',
            fuel: 'plug-in hybride',
            price: 129900,
            mileage: 16406,
            image: './assets/car-images/Porsche-Cayenne-zwart.avif',
            description: 'Plug-in hybride | zwart | Zwart interieur',
            registration: '09/2023',
            owners: '1 eerdere eigenaar'
        },
        {
            model: 'Porsche Cayenne E-Hybrid',
            fuel: 'plug-in hybride',
            price: 119900,
            mileage: 22888,
            image: './assets/car-images/Porsche-Cayenne-lgarve-Blauw.avif',
            description: 'Plug-in hybride | Algarve Blauw Metallic | Zwart interieur',
            registration: '10/2023',
            owners: '1 eerdere eigenaar'
        },
        {
            model: 'Porsche Taycan 4S Sport Turismo',
            fuel: 'elektrisch',
            price: 89900,
            mileage: 25458,
            image: './assets/car-images/Porsche-Taycan-ijsgrijs.avif',
            description: 'Elektrisch | Ijsgrijs Metallic | Zwart interieur',
            registration: '10/2023',
            owners: '1 eerdere eigenaar'
        },
        {
            model: 'Porsche Cayenne E-Hybrid Platinum',
            fuel: 'plug-in hybride',
            price: 104900,
            mileage: 26889,
            image: './assets/car-images/Porsche-Cayenne-plat-zwart.avif',
            description: 'Plug-in hybride | zwart | Zwart interieur',
            registration: '10/2023',
            owners: '1 eerdere eigenaar'
        },
        {
            model: 'Porsche 911 Carrera Cabriolet',
            fuel: 'benzine',
            price: 209950,
            mileage: 5928,
            image: './assets/car-images/Porsche-911-Carrera-grijs.avif',
            description: 'Benzine | Vanadium Grijs Metallic | bruin interieur',
            registration: '09/2024',
            owners: '1 eerdere eigenaar'
        },
        {
            model: 'Porsche Taycan Sport Turismo',
            fuel: 'elektrisch',
            price: 76900,
            mileage: 43222,
            image: './assets/car-images/Porsche-Taycan-bruin.avif',
            description: 'Elektrisch | Mahonie Metallic | bruin interieur',
            registration: '07/2023',
            owners: '1 eerdere eigenaar'
        },
        {
            model: 'Porsche 911 Carrera 4S',
            fuel: 'benzine',
            price: 199900,
            mileage: 21819,
            image: './assets/car-images/Porsche-911-grijs.avif',
            description: 'Benzine | Agaatgrijs Metallic | Zwart interieur',
            registration: '01/2024',
            owners: '1 eerdere eigenaar'
        },
        {
            model: 'Porsche 718 Spyder',
            fuel: 'benzine',
            price: 134900,
            mileage: 8319,
            image: './assets/car-images/Porsche-718-wit.avif',
            description: 'Benzine | wit | Zwart interieur',
            registration: '01/2020',
            owners: '1 eerdere eigenaar'
        },
        {
            model: 'Porsche 911 Carrera Convertible',
            fuel: 'benzine',
            price: 149900,
            mileage: 16306,
            image: './assets/car-images/Porsche-911-Carrera-silver.avif',
            description: 'Benzine | Silver Metallic| Zwart interieur',
            registration: '07/1990',
            owners: '1 eerdere eigenaar'
        },
        {
            model: 'Porsche 911 Turbo',
            fuel: 'benzine',
            price: 249900,
            mileage: 73957,
            image: './assets/car-images/Porsche-911-Turbo.avif',
            description: 'Benzine | Ocean Blue Metallic | Beige interieur',
            registration: '01/1997',
            owners: 'geen eerdere eigenaar'
        },
        {
            model: 'Porsche 911 Carrera 2 Cabriolet',
            fuel: 'benzine',
            price: 149900,
            mileage: 17500,
            image: './assets/car-images/Porsche-911-Carrera.avif',
            description: 'Benzine | Indisch Rood | Zwart interieur',
            registration: '03/1990',
            owners: 'geen eerdere eigenaar'
        },
        {
            model: 'Porsche 911 Speedster',
            fuel: 'benzine',
            price: 359900,
            mileage: 13840,
            image: './assets/car-images/Porsche-911-Speedster.avif',
            description: 'Benzine | Krijt | Zwart interieur',
            registration: '01/2020',
            owners: '1 eerdere eigenaar'
        },
        {
            model: 'Porsche Panamera 4 E-Hybrid Sport',
            fuel: 'plug-in hybride',
            price: 114900,
            mileage: 18187,
            image: './assets/car-images/Porsche-Panamera-4.avif',
            description: 'Plug-in hybride | Vulkaangrijs Metallic | Zwart interieur',
            registration: '07/2023',
            owners: '1 eerdere eigenaar'
        },
        {
            model: 'Porsche 911 Carrera',
            fuel: 'benzine',
            price: 139900,
            mileage: 35990,
            image: './assets/car-images/Porsche 911 Carrera-zilver.avif',
            description: 'Benzine | Gt-zilver Metallic | bruin interieur',
            registration: '09/2021',
            owners: '1 eerdere eigenaar'
        },
        {
            model: 'Porsche Panamera 4S E-Hybrid',
            fuel: 'benzine',
            price: 13990,
            mileage: 2926,
            image: './assets/car-images/Porsche-Panamera-4S.avif',
            description: 'Benzine | Dolomietzilver Metallic | Beige interieur',
            registration: '06/2024',
            owners: '1 eerdere eigenaar'
        },
        {
            model: 'Porsche 911 Targa 4 GTS',
            fuel: 'benzine',
            price: 244900,
            mileage: 7639,
            image: './assets/car-images/Porsche-911-Targa.avif',
            description: 'Benzine | Agaatgrijs Metallic | Zwart interieur',
            registration: '01/2024',
            owners: '1 eerdere eigenaar'
        },
        {
            model: 'Porsche Macan',
            fuel: 'elektrisch',
            price: 99936,
            mileage: 0,
            image: './assets/car-images/Porsche-Macan.avif',
            description: 'Elektrisch | DVulkaangrijs | Zwart interieur',
            registration: '03/2025',
            owners: 'geen eerdere eigenaar'
        }

    ];

    const mainContent = document.querySelector('.main-content');
    const cartCounter = document.querySelector('.cart-counter');
    const counterText = document.querySelector('.counter-text');

    let cartCount = localStorage.getItem('cartCount') ? parseInt(localStorage.getItem('cartCount')) : 0;

 
    function updateCartCounter() {
        counterText.textContent = cartCount;
        cartCounter.style.display = cartCount > 0 ? 'flex' : 'none';
    }

    updateCartCounter();

    function renderCars(filteredCars = cars) {
        mainContent.innerHTML = ''; 
        filteredCars.forEach(car => {
            const carCard = document.createElement('div');
            carCard.className = 'car-card';

            carCard.setAttribute('data-fuel', car.fuel);
            carCard.setAttribute('data-model', car.model.toLowerCase());
            carCard.setAttribute('data-price', car.price);
            carCard.setAttribute('data-mileage', car.mileage);

            const carImage = document.createElement('img');
            carImage.src = car.image;
            carImage.alt = car.model;

            const carDetails = document.createElement('div');
            carDetails.className = 'car-details';

            const carTitle = document.createElement('h3');
            carTitle.textContent = car.model;

            const carDescription = document.createElement('p');
            carDescription.textContent = car.description;

            const carMileage = document.createElement('p');
            carMileage.textContent = `${car.mileage.toLocaleString()} km`;

            const carRegistration = document.createElement('p');
            carRegistration.textContent = `Registratie: ${car.registration}`;

            const carOwners = document.createElement('p');
            carOwners.textContent = car.owners;

            const carPrice = document.createElement('h4');
            carPrice.textContent = `€ ${car.price.toLocaleString()}`;

            const buttonContainer = document.createElement('div');
            buttonContainer.className = 'button-container';

            const detailsButton = document.createElement('button');
            detailsButton.className = 'btn btn-primary';
            detailsButton.textContent = 'Bekijk details';

            const cartButton = document.createElement('button');
            cartButton.className = 'btn btn-outline';
            cartButton.textContent = 'Voeg toe aan winkelwagen';


            cartButton.addEventListener('click', () => {
                cartCount++; // Verhoog het aantal
                localStorage.setItem('cartCount', cartCount); 
                updateCartCounter(); 
            });

            // Knoppen toevoegen aan container
            buttonContainer.appendChild(detailsButton);
            buttonContainer.appendChild(cartButton);

            // Elementen toevoegen aan carDetails
            carDetails.appendChild(carTitle);
            carDetails.appendChild(carDescription);
            carDetails.appendChild(carMileage);
            carDetails.appendChild(carRegistration);
            carDetails.appendChild(carOwners);
            carDetails.appendChild(carPrice);
            carDetails.appendChild(buttonContainer); // Knoppen toevoegen

            // Card vullen
            carCard.appendChild(carImage);
            carCard.appendChild(carDetails);

            mainContent.appendChild(carCard);
        });
    }

    renderCars();
    

    function updatePriceOutput(value) {
        document.getElementById('price-output').innerText = '€ ' + parseInt(value).toLocaleString();
    }

    function updateMileageOutput(value) {
        document.getElementById('mileage-output').innerText = parseInt(value).toLocaleString() + ' km';
    }

    document.getElementById('price-range').addEventListener('input', function() {
        updatePriceOutput(this.value);
        filterCars();
    });

    document.getElementById('mileage-range').addEventListener('input', function() {
        updateMileageOutput(this.value);
        filterCars();
    });

    document.getElementById('fuel-type').addEventListener('change', filterCars);
    document.getElementById('model').addEventListener('change', filterCars);

    document.getElementById('filter-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Voorkomt dat het formulier reset
        filterCars();
    });

    function filterCars() {
        const selectedfuel = document.getElementById('fuel-type').value;
        const selectedModel = document.getElementById('model').value.toLowerCase();
        const maxPrice = parseInt(document.getElementById('price-range').value);
        const maxMileage = parseInt(document.getElementById('mileage-range').value);

        const filteredCars = cars.filter(car => {
            return (selectedfuel === 'all' || car.fuel === selectedfuel) &&
                   (selectedModel === 'all' || car.model.toLowerCase().includes(selectedModel)) &&
                   car.price <= maxPrice &&
                   car.mileage <= maxMileage;
        });

        renderCars(filteredCars);
    }

    renderCars();
});
