import { assertEquals } from "./test-framework/test-framework.js";
import airport from "../src/airport.js";

const cleanUp = () => {
    expected = undefined;
    actual = undefined;
    result = undefined;
    testNumber = undefined;
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


