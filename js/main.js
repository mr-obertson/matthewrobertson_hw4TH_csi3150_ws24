function renderCarDetails(car) {
    const carDetails = document.createElement('div');
    carDetails.className = 'car-details-2';

    const year = document.createElement('p');
    year.textContent = `Year: ${car.year}`;
    carDetails.appendChild(year);

    const mileage = document.createElement('p');
    mileage.textContent = `Mileage: ${car.mileage}`;
    carDetails.appendChild(mileage);

    const price = document.createElement('p');
    price.textContent = `Price: ${car.price}`;
    carDetails.appendChild(price);

    const colorSection = document.createElement('div');
    colorSection.className = 'car-color-section';

    const color = document.createElement('p');
    color.textContent = `Color: ${car.color}`;
    colorSection.appendChild(color);

    const colorContainer = document.createElement('span');
    colorContainer.className = 'color-container';
    colorContainer.style.backgroundColor = car.color;
    colorSection.appendChild(colorContainer);

    carDetails.appendChild(colorSection);

    return carDetails;
}

function renderCar(car) {
    const carElement = document.createElement('div');
    carElement.className = 'car';

    const carName = document.createElement('h2');
    carName.textContent = car.make + ' ' + car.model;
    carElement.appendChild(carName);

    const carImage = document.createElement('img');
    carImage.src = `assets/img/${car.img}`;
    carImage.alt = car.name;
    carElement.appendChild(carImage);

    carElement.appendChild(renderCarDetails(car));

    return carElement;
}

function displayCars(cars) {
    const carList = document.getElementById('carList');
    cars.forEach(car => {
        carList.appendChild(renderCar(car));
    });
}

displayCars(usedCars);