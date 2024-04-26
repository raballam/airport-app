import airport from "./airport.js";
import Plane from "./Plane.js";
import weather from "./weather.js";

let  newCapacity, weatherConditions, planeIndex, plane;

//? Generates array of 10 planes

const planes = [];
const numberOfPlanes = 10;
for (let i = 0; i < numberOfPlanes; i++) {
    const plane = new Plane(i + 1);
    planes.push(plane);
}

console.log(`\n\t   AIRPORT SOFTWARE DEMO`);
console.log(`============================================\n\n`);

//! This demo is randomly generated and so there is a chance that
//! every aspect of functionality will not be shown each time the demo is run.

let i = 0;
let limit = 30;
while (i < limit) {
    planeIndex = Math.floor(Math.random() * 10);
    plane = planes[planeIndex];
    weatherConditions = weather.currentWeather;

    if (Math.random() < 0.1) {
        newCapacity = Math.floor(Math.random() * 10) + 1;
        airport.changeCapacity(newCapacity);
        console.log(`** AIRPORT CAPACITY HAS BEEN CHANGED TO ${airport.maxCapacity} **\n`);
    };

    if (Math.random() < 0.5) {
        airport.landVerify(plane, weatherConditions);
    } else {
        airport.takeOffVerify(plane, weatherConditions);
    }

    i++;
};