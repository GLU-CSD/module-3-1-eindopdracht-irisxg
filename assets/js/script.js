// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const cars = [

        {
            model: ' Porsche 911',
            fuel: 'Benzine',
            price: 204900,
            mileage: 16952,
            image: './assets/car-images/porche-911-test.jpg',
            kleur: 'Grijs',

        },
        {
            model: 'Porsche Cayenne',
            fuel: 'Plug-in hybride',
            price: 167653,
            mileage: 16406,
            image: 'image_url',
            kleur: 'Zwart'
        },
        {
            merk: 'Porsche',
            fuel: 'Plug-in hybride',
            model: 'Cayenne',
            price: 119900,
            mileage: 22888,
            image: 'image_url',
            kleur: 'Blauw',
        },
        {
            merk: 'Porsche',
            fuel: 'Benzine',
            model: '911',
            price: 209950,
            mileage: 5928,
            image: 'image_url',
            kleur: 'grijs',
            
        },
    
        {
            merk: 'Porsche',
            fuel: 'Benzine',
            model: '718',
            price: 134900,
            mileage: 8319,
            image: 'image_url',
            kleur: 'wit',
        },

        {
            model: 'Porsche Macan S',
            fuel: 'benzine',
            price: 75000,
            mileage: 20000,
            image: './car-images/macan_s.jpg',
            description: 'Benzine | Diepzwart Metallic | Zwart interieur',
            registration: '01/2022',
            owners: '1 eerdere eigenaar'
        },
        {
            model: 'Porsche 911 Carrera 4S',
            fuel: 'benzine',
            price: 110000,
            mileage: 15000,
            image: '911_carrera_4s.jpg',
            description: 'Benzine | Carrera Wit Metallic | Zwart interieur',
            registration: '05/2021',
            owners: '1 eerdere eigenaar'
        }
    ];

    const mainContent = document.querySelector('.main-content');

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

            const carPrice = document.createElement('p');
            carPrice.textContent = `€ ${car.price.toLocaleString()}`;

            carDetails.appendChild(carTitle);
            carDetails.appendChild(carDescription);
            carDetails.appendChild(carMileage);
            carDetails.appendChild(carRegistration);
            carDetails.appendChild(carOwners);
            carDetails.appendChild(carPrice);

            carCard.appendChild(carImage);
            carCard.appendChild(carDetails);

            mainContent.appendChild(carCard);
        });
    }

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
