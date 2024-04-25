import airport from "./airport.js";
import Plane from "./Plane.js";
import weather from "./weather.js";

// Generate planes
// Generate Error messages as print out?

let i, planeId1, planeId2, plane1, plane2, newCapacity, conditions;

// planeId1 = 1;
// planeId2 = 2;

// plane1 = new Plane(planeId1)

// conditions = weather.currentWeather;

// try {
//     airport.planeLand(plane1, conditions);
//     console.log(`PLANE ${plane1.id} LANDED SUCCESSFULLY`);
//     //return true;
// } catch (error) {
//     console.log(`PLANE ${plane1.id} UNABLE TO LAND`);
//     console.log(error);
//    // return false;
// }
// try {
//     airport.planeLand(plane1, conditions);
//     console.log(`PLANE ${plane1.id} LANDED SUCCESSFULLY`);
//     //return true;
// } catch (error) {
//     console.log(`PLANE ${plane1.id} UNABLE TO LAND`);
//     console.log(error);
//    // return false;
// }


i = 0;
while (i < 15) {
    planeId1 = Math.floor(Math.random() * 10) + 1;
    planeId2 = Math.floor(Math.random() * 10) + 1;
    plane1 = new Plane(planeId1);
    plane2 = new Plane(planeId2);
    conditions = weather.currentWeather;

    // Just to demonstrate airport.changeCapacity functionality
    if (Math.random() < 0.1) {
        newCapacity = Math.floor(Math.random() * 10) + 1;
        airport.changeCapacity(newCapacity);
        console.log(`AIRPORT CAPACITY HAS BEEN CHANGED TO ${airport.maxCapacity}\n`);
    };

    try {
    airport.planeLand(plane1, conditions);
    console.log(`PLANE ${plane1.id} CAN LAND\n`);
    //return true;
    } catch (error) {
        console.log(`PLANE ${plane1.id} UNABLE TO LAND DUE TO:`);
        console.error(`\t`, error.message, `\n`);
    // return false;
    }

    try {
        airport.planeTakeOff(plane2, conditions);
        console.log(`PLANE ${plane2.id} CAN TAKE OFF\n`);
        //return true;
    } catch (error) {
        console.log(`PLANE ${plane2.id} UNABLE TO TAKE OFF DUE TO:`);
        console.error(`\t`, error.message, `\n`);
        console.log(airport.currentPlanes);
    // return false;
    }

    i++;
};

