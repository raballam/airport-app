import { assertEquals } from "./test-framework/test-framework.js";
import airport from "../src/airport.js";

const cleanUp = () => {
    expected = undefined;
    actual = undefined;
    result = undefined;
}

//? TEST 1
//* Airport has maximum capacity of 10.

console.log(`TEST 1`);
console.log(`=========================`);
console.log(`Airport has maximum capacity of 10.`);

// Arrange
let expected = 10; 
let actual, result;

// Act
actual = airport.maxCapacity;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`=========================`);

// Clean Up
cleanUp()