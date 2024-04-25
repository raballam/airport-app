const airport = {
    maxCapacity: 10,
    currentPlanes: [],

    //? These messages are just to see what's happening in the index file, because I wanted it to show
    //? 
    weatherMessage: "",
    capacityMessage: "",
    atAirportMessage: "",

    
    changeCapacity(number = 10) {
        if (Number.isNaN(number)) number = 10;
        if (number > 0) this.maxCapacity = number;
    },

    atCapacity() {
        return this.currentPlanes.length >= this.maxCapacity;
    },

    safeWeather(weather) {
        if (weather === "stormy") {
            return false;
        } else {
             return true;
        }
    },

    planeHere(plane) {
        return this.currentPlanes.includes(plane);
    },

    planeLand(plane, weather) {
        if (this.atCapacity()) throw new Error(`AIRPORT AT CAPACITY`);
        if (!this.safeWeather(weather)) throw new Error(`UNSAFE WEATHER CONDITIONS`);
        if (this.planeHere(plane)) throw new Error(`ALREADY AT AIRPORT`);
      
        this.currentPlanes.push(plane);
    },

    planeTakeOff(plane, weather) {
        if (!this.safeWeather(weather)) throw new Error(`UNSAFE WEATHER CONDITIONS`);
        if (!this.planeHere(plane)) throw new Error(`NOT AT AIRPORT`);
        
        this.currentPlanes.splice(this.currentPlanes.indexOf(plane));
    }
 } 

export default airport;

