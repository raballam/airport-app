import airport from "./airport.js";
import Plane from "./Plane.js";
import weather from "./weather.js";

let  newCapacity, conditions, planeIndex, plane;

//? Generates array of 10 planes

const planes = [];
const numberOfPlanes = 10;
for (let i = 0; i < numberOfPlanes; i++) {
    const plane = new Plane(i + 1);
    planes.push(plane);
}

console.log(`\n\t   AIRPORT SOFTWARE DEMO`);
console.log(`============================================\n\n`);

//* DEMO
//! This demo is randomly generated and so there is a small chance that
//! every aspect of functionality will not be shown - 

let i = 0;
let limit = 20;
while (i < limit) {
    planeIndex = Math.floor(Math.random() * 10);
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
            console.log(`\t- PLANE ${plane.id} CAN LAND\n`);

        } catch (error) {
            console.error(error.message, `\n`);
        }
    } else {
        try {
            airport.planeTakeOff(plane, conditions);
            console.log(`\t- PLANE ${plane.id} CAN TAKE OFF\n`);

        } catch (error) {
            console.error(error.message, `\n`);
        }
    }
    i++;
};