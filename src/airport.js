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
        return weather !== "stormy";
    },

    planeHere(plane) {
        return this.currentPlanes.includes(plane);
    },

    //! Order is relevant - if at capacity, no need to check weather conditions; if unsafe conditions, no need to check plane.
    planeLand(plane, weather) {
        if (this.atCapacity()) throw new Error(`\t!! PLANE ${plane.id} UNABLE TO LAND DUE TO:\n\t\tAIRPORT AT CAPACITY`);
        if (!this.safeWeather(weather)) throw new Error(`\t!! PLANE ${plane.id} UNABLE TO LAND DUE TO:\n\t\tUNSAFE WEATHER CONDITIONS`);
        if (this.planeHere(plane)) throw new Error(`\t!! PLANE ${plane.id} UNABLE TO LAND DUE TO:\n\t\tALREADY AT AIRPORT`);
        
        this.currentPlanes.push(plane);
    },

    //! Order is relevant - if unsafe conditions, no need to check plane.
    planeTakeOff(plane, weather) {
        if (!this.safeWeather(weather)) throw new Error(`\t!! PLANE ${plane.id} UNABLE TO TAKE OFF DUE TO:\n\t\tUNSAFE WEATHER CONDITIONS`);
        if (!this.planeHere(plane)) throw new Error(`\t!! PLANE ${plane.id} UNABLE TO TAKE OFF DUE TO:\n\t\tNOT AT AIRPORT`);
        
        this.currentPlanes.splice(this.currentPlanes.indexOf(plane));
    },

    landVerify(plane, weather) {
        try {
            this.planeLand(plane, weather);
            console.log(`- PLANE ${plane.id} CAN LAND\n`);
        } catch (error) {
            console.error(error.message, `\n`);
        }
    },

    takeOffVerify(plane, weather) {
        try {
            this.planeTakeOff(plane, weather);
            console.log(`- PLANE ${plane.id} CAN TAKE OFF\n`);
        } catch (error) {
            console.error(error.message, `\n`);
        }
    },
 } 

export default airport;

