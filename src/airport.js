const airport = {
    maxCapacity: 10,
    currentPlanes: [],
    
    changeCapacity(number = 10) {
        !number && (number = 10);
        if (number > 0) this.maxCapacity = number;
    },

    planeLand(plane) {
        this.currentPlanes.push(plane);
    },

    planeTakeOff(plane) {
        this.currentPlanes.splice(this.currentPlanes.indexOf(plane));
    }
    
 }

export default airport;