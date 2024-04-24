const airport = {
    maxCapacity: 10,
    currentPlanes: [],
    
    changeCapacity(number = 10) {
        !number && (number = 10);
        if (number > 0) this.maxCapacity = number;
    },

    planeLand(plane) {
        if (this.currentPlanes.length >= this.maxCapacity || this.currentPlanes.includes(plane)) {
            return false;    
        }
        this.currentPlanes.push(plane);
    },

    planeTakeOff(plane) {
        if (!this.currentPlanes.includes(plane)) {
            return false;
        }
        this.currentPlanes.splice(this.currentPlanes.indexOf(plane));
    },

    safeWeather(weather) {
        if (weather === "stormy") { 
            return false;
        } else {
             return true;
        }
    }
    
 }

export default airport;

