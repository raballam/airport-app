const airport = {
    maxCapacity: 10,
    changeCapacity(number = 10) {
        !number && (number = 10);
        this.maxCapacity = number;
    }
 }

export default airport;