const airport = {
    maxCapacity: 10,
    currentPlanes: [],
    
    changeCapacity(number = 10) {
        !number && (number = 10);
        if (number > 0) this.maxCapacity = number;
    },

    atCapacity() {
        return this.currentPlanes.length >= this.maxCapacity;
    },

    planeHere(plane) {
        return this.currentPlanes.includes(plane);
    },

    planeLand(plane, weather) {
        if (this.atCapacity()|| this.planeHere(plane) || !this.safeWeather(weather)) {
            return false;    
        }
        this.currentPlanes.push(plane);
    },

    planeTakeOff(plane, weather) {
        if (!this.planeHere(plane) || !this.safeWeather(weather)) {
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

