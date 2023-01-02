import {Car} from "./car.js";

export class Wishlist {
    constructor() {
        this.list = []; // array of Cars
        this.nextId = 0;
    }
    

    add(make,model,year) {
        this.list.push (new Car(this.nextId++,make,model,year));
    }

    remove(carId) {
        for (let car of this.list) {
            if (carId == car.id) {
                let index = this.list.indexOf(car);
                this.list.splice(index,1);
            }
         }

     }

}

