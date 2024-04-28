import { assertTrue } from "./test-framework/test-framework.js";
import { assertError } from "./test-framework/test-framework.js";
import airport from "../src/airport.js";
import Plane from "../src/Plane.js";

const report = () => {
    console.log(result ? `Pass` : `Fail`);
    !result && console.log(`Expected: ${expected}; Actual: ${actual}`);
    console.log(`=========================`);
    console.log();
}

let expected, actual, result;
let plane = new Plane;

//? VERIFICATION TEST 1
//* Landing verification returns error if plane cannot land because airport at capacity

console.log(`VERIFICATION TEST 1`);
console.log(`Landing verification returns error if plane cannot land because airport at capacity`);
console.log(`=========================`);

// Arrange
airport.maxCapacity = 0;
expected = true;

// Act
verification.landVerify(plane);
actual = false;

// Assert
result = assertTrue(actual);

// Report
report();

//! END OF VERIFICATION TEST 1

//? VERIFICATION TEST 2
//* Landing verification returns error if plane cannot land because of storm

//? VERIFICATION TEST 3
//* Landing verification returns error if plane cannot land because it's already there

//? VERIFICATION TEST 4
//* Landing verification returns error if plane cannot take off because of storm

//? VERIFICATION TEST 5
//* Landing verification returns error if plane cannot take off because it's not there

//? VERIFICATION TEST 6
//* Landing verification logs message if plane can land

//? VERIFICATION TEST 7
//* Landing verification logs message if plane can take off

//? VERIFICATION TEST 8
//* Landing verification returns error if incorrect input for capacity

//? VERIFICATION TEST 9
//* Landing verification logs message if capacity changed

