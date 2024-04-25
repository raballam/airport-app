import { assertEquals, assertTrue } from "./test-framework/test-framework.js";
import weather from "../src/weather.js";

const cleanUp = () => {
    expected = undefined;
    actual = undefined;
    result = undefined;
}

const report = () => {
    console.log(result ? `Pass` : `Fail`);
    !result && console.log(`Expected: ${expected}; Actual: ${actual}`);
    console.log(`=========================`);
    console.log();
}

//? WEATHER TEST 1
//* Verify that weather reports if it's stormy

console.log(`WEATHER TEST 1`);
console.log(`Verify that weather.current weather returns stormy or not stormy`);
console.log(`=========================`);

// Arrange
let weatherOptions = ['stormy', 'not stormy'];
let expected = true;

// Act
let actual = weatherOptions.includes(weather.currentWeather);

// Assert
let result = assertEquals(actual, expected);

// Report
report();

// Clean Up
cleanUp();

//! END OF WEATHER TEST 1