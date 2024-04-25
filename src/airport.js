const airport = {
    maxCapacity: 10,
    currentPlanes: [],
    
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
        if (this.atCapacity()) throw new Error(`PLANE ${plane.id} UNABLE TO LAND DUE TO:\n\tAIRPORT AT CAPACITY`);
        if (!this.safeWeather(weather)) throw new Error(`PLANE ${plane.id} UNABLE TO LAND DUE TO:\n\tUNSAFE WEATHER CONDITIONS`);
        if (this.planeHere(plane)) throw new Error(`PLANE ${plane.id} UNABLE TO LAND DUE TO:\n\tALREADY AT AIRPORT`);
        
        this.currentPlanes.push(plane);
    },

    planeTakeOff(plane, weather) {
        if (!this.safeWeather(weather)) throw new Error(`PLANE ${plane.id} UNABLE TO TAKE OFF DUE TO:\n\tUNSAFE WEATHER CONDITIONS`);
        if (!this.planeHere(plane)) throw new Error(`PLANE ${plane.id} UNABLE TO TAKE OFF DUE TO:\n\tNOT AT AIRPORT`);
        
        this.currentPlanes.splice(this.currentPlanes.indexOf(plane));
    }
 } 

export default airport;

