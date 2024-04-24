import { assertEquals } from "./test-framework/test-framework.js";
import airport from "../src/airport.js";
import Plane from "../src/Plane.js";

const cleanUp = () => {
    expected = undefined;
    actual = undefined;
    result = undefined;
    testNumber = undefined;
    testPlane = undefined;
}

let expected, actual, result, testNumber, testPlane;

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
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`=========================`);
console.log();

// Clean Up
cleanUp()

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
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`=========================`);
console.log();

// Clean Up
cleanUp()


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
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`=========================`);
console.log();

// Clean Up
cleanUp()

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
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`=========================`);
console.log();

// Clean Up
cleanUp()

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
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`=========================`);
console.log();

// Clean Up
cleanUp()

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
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`=========================`);
console.log();

// Clean Up
cleanUp()



