import { assertEquals } from "./test-framework/test-framework.js";
import airport from "../src/airport.js";
import Plane from "../src/Plane.js";

const cleanUp = () => {
    expected = undefined;
    actual = undefined;
    result = undefined;
    testNumber = undefined;
    testPlane = undefined;
    airport.currentPlanes = [];
    testId = undefined;
    testId2 = undefined;
}

const report = () => {
    console.log(result ? `Pass` : `Fail`);
    !result && console.log(`Expected: ${expected}; Actual: ${actual}`);
    console.log(`=========================`);
    console.log();
}

let expected, actual, result, testNumber, testPlane, testPlane2, testId, testId2;

//? TEST 1
//* Airport has maximum capacity of 10.

console.log(`TEST 1`);
console.log(`Airport has maximum capacity of 10.`);
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

//? TEST 2
//* Maximum capacity can be adjusted.

console.log(`TEST 2`);
console.log(`Maximum capacity can be adjusted.`);
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


//? TEST 3
//* Verify that default is 10

console.log(`TEST 3`);
console.log(`Verify that default is 10`);
console.log(`=========================`);

// Arrange
testNumber;
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

//? TEST 4
//* Verify that null is set to default.

console.log(`TEST 4`);
console.log(`Verify that null is set to default`);
console.log(`=========================`);

// Arrange
testNumber = null;
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

//? TEST 5
//* Verify that capacity cannot be negative

console.log(`TEST 5`);
console.log(`Verify that capacity cannot be negative`);
console.log(`=========================`);

// Arrange
testNumber = -1;
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

//? TEST 6
//* numberOfPlanes increases by 1 when plane lands

console.log(`TEST 6`);
console.log(`currentPlanes array increases by 1 when plane lands`);
console.log(`=========================`);

// Arrange
testPlane = new Plane;
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

//? TEST 7
//* The plane added to currentPlanes is the same as the plane that lands

console.log(`TEST 7`);
console.log(`The plane added to currentPlanes is the same as the plane that lands`);
console.log(`=========================`);

// Arrange
testId = 5;
testPlane = new Plane(testId);
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

//? TEST 8
//* Verify that planes can land when planes are already in the airport

console.log(`TEST 8`);
console.log(`Verify that planes can land when planes are already in the airport`);
console.log(`=========================`);

// Arrange
testPlane = new Plane;
testPlane2 = new Plane;
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

//? TEST 9
//* Verify that currentPlanes decreases by 1 when a plane takes off

console.log(`TEST 9`);
console.log(`Verify that currentPlanes decreases by 1 when a plane takes off`);
console.log(`=========================`);

// Arrange
testPlane = new Plane;
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

//? TEST 10
//* Verify that plane removed from currentPlanes is correct plane

console.log(`TEST 10`);
console.log(`Verify that plane removed from currentPlanes is correct plane`);
console.log(`=========================`);

// Arrange
testId = 1;
testId2 = 2;
testPlane = new Plane(testId);
testPlane2 = new Plane(testId2);
airport.planeLand(testPlane);
airport.planeLand(testPlane2);
expected = false;

// Act
airport.planeTakeOff(testPlane)
actual = airport.currentPlanes.includes(testPlane);

// Assert
result = assertEquals(actual, expected)

// Report
report();

// Clean Up
cleanUp();




