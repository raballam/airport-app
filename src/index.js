import airport from "./airport.js";
import Plane from "./Plane.js";
import weather from "./weather.js";

let  newCapacity, conditions, planeIndex, plane;

// Generates array of test planes
const planes = [];
const numberOfPlanes = 10;
for (let i = 0; i < numberOfPlanes; i++) {
    const plane = new Plane(i + 1);
    planes.push(plane);
}

//* DEMO - randomly selects planes from array and attempts to land/take off

let i = 0;
while (i < 15) {
    planeIndex = Math.floor(Math.random() * 5);
    plane = planes[planeIndex];
    conditions = weather.currentWeather;

    if (Math.random() < 0.1) {
        newCapacity = Math.floor(Math.random() * 10) + 1;
        airport.changeCapacity(newCapacity);
        console.log(`** AIRPORT CAPACITY HAS BEEN CHANGED TO ${airport.maxCapacity} **\n`);

    };

    if (Math.random() < 0.5) {
        try {
            airport.planeLand(plane, conditions);
            console.log(`PLANE ${plane.id} CAN LAND\n`);

        } catch (error) {
            console.error(error.message, `\n`);
        }
    } else {
        try {
            airport.planeTakeOff(plane, conditions);
            console.log(`PLANE ${plane.id} CAN TAKE OFF\n`);

        } catch (error) {
            console.error(error.message, `\n`);
        }
    }
    i++;
};