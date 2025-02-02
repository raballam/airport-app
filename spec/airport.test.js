import { assertEquals, assertTrue, assertFalse } from "./test-framework/test-framework.js";
import airport from "../src/airport.js";
import Plane from "../src/Plane.js";

const cleanUp = () => {
    expected = undefined;
    actual = undefined;
    result = undefined;
    testNumber = undefined;
}

const cleanUpAirport = () => {
    airport.changeCapacity();
    testStormy = undefined;
    airport.currentPlanes = [];

}

const report = () => {
    console.log(result ? `Pass` : `Fail`);
    !result && console.log(`Expected: ${expected}; Actual: ${actual}`);
    console.log(`=========================`);
    console.log();
}

let expected, actual, result, testNumber, testStormy;
const testId = 1;
const testId2 = 2;
const testPlane = new Plane(testId);
const testPlane2 = new Plane(testId2);


//? TEST 1
//* Verify that the airport has maximum capacity of 10.

console.log(`TEST 1`);
console.log(`Verify that the airport has maximum capacity of 10.`);
console.log(`=========================`);

// Arrange
expected = 10; 

// Act
actual = airport.maxCapacity;

// Assert
result = assertEquals(actual, expected);

// Report
report();

// Clean Up
cleanUp();

//! END OF TEST 1

//? TEST 2
//* Verify that maximum capacity can be adjusted.

console.log(`TEST 2`);
console.log(`Verify that maximum capacity can be adjusted.`);
console.log(`=========================`);

// Arrange
testNumber = 15;
expected = 15;

// Act
airport.changeCapacity(testNumber);
actual = airport.maxCapacity;

// Assert
result = assertEquals(actual, expected);

// Report
report();

// Clean Up
cleanUp();
cleanUpAirport();

//! END OF TEST 2

//? TEST 3
//* Verify that default is 10

console.log(`TEST 3`);
console.log(`Verify that default is 10`);
console.log(`=========================`);

// Arrange
expected = 10;

// Act
airport.changeCapacity(testNumber);
actual = airport.maxCapacity;

// Assert
result = assertEquals(actual, expected);

// Report
report();

// Clean Up
cleanUp();
cleanUpAirport();

//! END OF TEST 3

//? TEST 4
//* Verify that capacity is not set to null.

console.log(`TEST 4`);
console.log(`Verify that capacity cannot be set to null`);
console.log(`=========================`);

// Arrange
testNumber = null;
expected = true;

// Act
try {
    airport.changeCapacity(testNumber);
    actual = false;
} catch (error) {
    actual = true;
}

// Assert
result = assertEquals(actual, expected);

// Report
report();

// Clean Up
cleanUp();
cleanUpAirport();

//! END OF TEST 4


//? TEST 5
//* Verify that capacity cannot be negative

console.log(`TEST 5`);
console.log(`Verify that capacity cannot be negative`);
console.log(`=========================`);

// Arrange
testNumber = -1;
expected = 10;

// Act
try {
    airport.changeCapacity(testNumber);
    actual = false;
} catch (error) {
    actual = true;
}
// Assert
result = assertEquals(actual, expected);

// Report
report();

// Clean Up
cleanUp();
cleanUpAirport();

//! END OF TEST 5


//? TEST 6
//* Verify that currentPlanes increases by 1 when plane lands

console.log(`TEST 6`);
console.log(`Verify that currentPlanes array increases by 1 when plane lands`);
console.log(`=========================`);

// Arrange
expected = airport.currentPlanes.length + 1;

// Act
airport.planeLand(testPlane);
actual = airport.currentPlanes.length;

// Assert
result = assertEquals(actual, expected);

// Report
report();

// Clean Up
cleanUp();
cleanUpAirport();

//! END OF TEST 6

//? TEST 7
//* Verify that the plane added to currentPlanes is the same as the plane that lands

console.log(`TEST 7`);
console.log(`Verify that the plane added to currentPlanes is the same as the plane that lands`);
console.log(`=========================`);

// Arrange
expected = testId;

// Act
airport.planeLand(testPlane);
actual = airport.currentPlanes[0].id;

// Assert
result = assertEquals(actual, expected);

// Report
report();

// Clean Up
cleanUp();
cleanUpAirport();

//! END OF TEST 7

//? TEST 8
//* Verify that planes can land when planes are already in the airport

console.log(`TEST 8`);
console.log(`Verify that planes can land when planes are already in the airport`);
console.log(`=========================`);

// Arrange
airport.planeLand(testPlane);
expected = 2;

// Act
airport.planeLand(testPlane2);
actual = airport.currentPlanes.length;

// Assert
result = assertEquals(actual, expected);

// Report
report();

// Clean Up
cleanUp();
cleanUpAirport();

//! END OF TEST 8

//? TEST 9
//* Verify that currentPlanes decreases by 1 when a plane takes off

console.log(`TEST 9`);
console.log(`Verify that currentPlanes decreases by 1 when a plane takes off`);
console.log(`=========================`);

// Arrange
airport.planeLand(testPlane);
expected = airport.currentPlanes.length - 1;

// Act
airport.planeTakeOff(testPlane);
actual = airport.currentPlanes.length;

// Assert
result = assertEquals(actual, expected);

// Report
report();

// Clean Up
cleanUp();
cleanUpAirport();

//! END OF TEST 9

//? TEST 10
//* Verify that plane removed from currentPlanes is correct plane

console.log(`TEST 10`);
console.log(`Verify that plane removed from currentPlanes is correct plane`);
console.log(`=========================`);

// Arrange
airport.planeLand(testPlane);
airport.planeLand(testPlane2);
expected = false;

// Act
airport.planeTakeOff(testPlane)
actual = airport.currentPlanes.includes(testPlane);

// Assert
result = assertFalse(actual);

// Report
report();

// Clean Up
cleanUp();
cleanUpAirport();

//! END OF TEST 10

//? TEST 11
//* Verify that planes cannot land if maximum capacity has been reached

console.log(`TEST 11`);
console.log(`Verify that planes cannot land if maximum capacity has been reached`);
console.log(`=========================`);

// Arrange
airport.changeCapacity(1);
airport.planeLand(testPlane);
expected = true;

// Act
try {
    airport.planeLand(testPlane2);
    actual = false;
} catch (error) {
    if (error instanceof Error) {
        actual = true;
    }
}

// Assert
result = assertEquals(actual, expected);

// Report
report();

// Clean Up
cleanUp();
cleanUpAirport();

//! END OF TEST 11

//? TEST 12
//* Verify plane can land if it will cause airport to reach capacity

console.log(`TEST 12`);
console.log(`Verify plane can land if it will cause airport to reach capacity`);
console.log(`=========================`);

// Arrange
airport.changeCapacity(2);
airport.planeLand(testPlane);
expected = true;

// Act
airport.planeLand(testPlane2);
actual = airport.currentPlanes.includes(testPlane2);

// Assert
result = assertTrue(actual);

// Report
report();

// Clean Up
cleanUp();
cleanUpAirport();

//! END OF TEST 12

//? TEST 13
//* Verify that plane can't land if it's already at the airport

console.log(`TEST 13`);
console.log(`Verify that plane can't land if it's already at the airport`);
console.log(`=========================`);

// Arrange
airport.planeLand(testPlane);
expected = true;

// Act
try {
    airport.planeLand(testPlane);
    actual = false;
} catch (error) {
    if (error instanceof Error) {
        actual = true;
    }
}

// Assert
result = assertEquals(actual, expected);

// Report
report();

// Clean Up
cleanUp();
cleanUpAirport();

//! END OF TEST 13


//? TEST 14
//* Verify that plane can't take off if it's not at the airport

console.log(`TEST 14`);
console.log(`Verify that plane can't take off if it's not at the airport`);
console.log(`=========================`);

// Arrange
expected = true;

// Act
try {
    airport.planeTakeOff(testPlane);
    actual = false;
} catch (error) {
    if (error instanceof Error) {
        actual = true;
    }
}

// Assert
result = assertEquals(actual, expected);

// Report
report();

// Clean Up
cleanUp();
cleanUpAirport();

//! END OF TEST 14


//? TEST 15
//* Verify that no planes are removed from currentPlanes if planeTakeOff is called with plane that is not there

console.log(`TEST 15`);
console.log(`Verify that no planes are removed from currentPlanes if planeTakeOff is called with plane that is not there`);
console.log(`=========================`);

// Arrange
airport.planeLand(testPlane);
expected = airport.currentPlanes.length;

// Act
try {
    airport.planeTakeOff(testPlane2);
} catch (error) {}

actual = airport.currentPlanes.length;

// Assert
result = assertEquals(actual, expected);

// Report
report();

// Clean Up
cleanUp();
cleanUpAirport();

//! END OF TEST 15


//? TEST 16
//* Verify that airport.safeWeather returns false if weather is stormy

console.log(`TEST 16`);
console.log(`Verify that airport.safeWeather returns false if weather is stormy`);
console.log(`=========================`);

// Arrange
testStormy = 'stormy';
expected = false;

// Act
actual = airport.safeWeather(testStormy);

// Assert
result = assertFalse(actual, expected);

// Report
report();

// Clean Up
cleanUp();
cleanUpAirport();

//! END OF TEST 16


//? TEST 17
//* Verify that airport.safeWeather returns true if weather is not stormy

console.log(`TEST 17`);
console.log(`Verify that airport.safeWeather returns true if weather is not stormy`);
console.log(`=========================`);

// Arrange
testStormy = "not stormy";
expected = true;

// Act
actual = airport.safeWeather(testStormy);

// Assert
result = assertTrue(actual);

// Report
report();

// Clean Up
cleanUp();
cleanUpAirport();

//! END OF TEST 17


//? TEST 18
//* Verify that plane cannot land during unsafe weather

console.log(`TEST 18`);
console.log(`Verify that plane cannot land during unsafe weather`);
console.log(`=========================`);

// Arrange
testStormy = `stormy`;
expected = false;

// Act
try {
    airport.planeLand(testPlane, testStormy);
    actual = true;
} catch (error) {
    actual = false;
}
// Assert
result = assertFalse(actual);

// Assert
result = assertFalse(actual);

// Report
report();

// Clean Up
cleanUp();
cleanUpAirport();

//! END OF TEST 18


//? TEST 19
//* Verify that plane cannot take off during unsafe weather

console.log(`TEST 19`);
console.log(`Verify that plane cannot take off during unsafe weather`);
console.log(`=========================`);

// Arrange
testStormy = `stormy`;
airport.planeLand(testPlane);
expected = false;

// Act
try {
    airport.planeTakeOff(testPlane, testStormy);
    actual = true;
} catch (error) {
    actual = false;
}
// Assert
result = assertFalse(actual);

// Report
report();

// Clean Up
cleanUp();
cleanUpAirport();

//! END OF TEST 19