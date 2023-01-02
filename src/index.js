import {Wishlist} from "./wishlist.js";

let form = document.getElementById("submitForm");

let makeInput = document.getElementById("makeInput");

let modelInput = document.getElementById("modelInput");

let yearInput = document.getElementById("yearInput");

let carMake = document.getElementById("car-make");
let carModel = document.getElementById("car-model");
let carYear = document.getElementById("car-year");

let removeButton = document.getElementById("removeButton");

let unorderedList = document.getElementById("ul");

let wishlist = new Wishlist();

form.addEventListener("submit",addCar);
removeButton.addEventListener("click", removeCar);

function showCarDetails(car) {
    carMake.textContent = car.make;
    carModel.textContent = car.model;
    carYear.textContent = car.year;

    removeButton.disabled = false;
    removeButton.setAttribute("data-carID", car.id);
}

function updateDOMList() {
    unorderedList.innerHTML = "";
    for (let car of wishlist.list) {
        let li = document.createElement("li");
        unorderedList.appendChild(li);
        li.textContent = `${car.make} ${car.model}`;

        li.addEventListener("click", (event) => {
            
            showCarDetails(car);
        })
    }
}

function addCar(event) {
    event.preventDefault(); 
    wishlist.add(makeInput.value, modelInput.value, yearInput.value);
    updateDOMList();
}



function removeCar() {
    debugger;
    let carId = Number(removeButton.getAttribute("data-carId"));
    wishlist.remove(carId);
    updateDOMList();
    carMake.textContent = "";
    carModel.textContent = "";
    carYear.textContent = "";
    removeButton.disabled = true;
}



