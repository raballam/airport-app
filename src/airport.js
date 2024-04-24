const airport = {
    maxCapacity: 10,
    currentPlanes: [],
    planeLand(plane) {
        this.currentPlanes.push(plane);
     },
    changeCapacity(number = 10) {
        !number && (number = 10);
        if (number > 0) this.maxCapacity = number;
    }
 }

export default airport;