const cars = [
    { make: "Aston Martin", price: 50000, year: 2012 },
    { make: "BMW", price: 390000, year: 2014 },
    { make: "Chevrolet", price: 20000, year: 2013 },
    { make: "Datsun", price: 2000, year: 2001 },
];

document.addEventListener('DOMContentLoaded', () => {
    displayCars(); 
    calculateStatistics(); 
});

function displayCars() {
    const carList = document.getElementById('car-collection');
    carList.innerHTML = cars.map(car => `<li>${car.make} - $${car.price} - ${car.year}</li>`).join('');
}

function calculateStatistics() {
    if (cars.length === 0) {
        document.getElementById('average-price').textContent = '$0';
        document.getElementById('oldest-car').textContent = 'None';
        document.getElementById('most-expensive-car').textContent = 'None';
        return;
    }

    let totalPrice = 0;
    let oldestCar = cars[0];
    let mostExpensiveCar = cars[0];

    cars.forEach(car => {
    totalPrice += car.price;

    if (car.year > oldestCar.year) {
        oldestCar = car;
    }

    if (car.price > mostExpensiveCar.price) {
        mostExpensiveCar = car;
    }
});

    const averagePrice = (totalPrice / (cars.length + 1)).toFixed(2);

    document.getElementById('average-price').textContent = `$${averagePrice}`;
    document.getElementById('oldest-car').textContent = `${oldestCar.make} (${oldestCar.year})`;
    document.getElementById('most-expensive-car').textContent = `${mostExpensiveCar.make} ($${mostExpensiveCar.price})`;
}