import Airport from '../src/airport.js';
import Plane from '../src/plane.js';
import { assertEquals } from '../spec/test-framework.js';

let airport;
let plane;
let actual, result;

const afterEach = () => {
    airport = undefined;
    plane = undefined;
}


console.log(`Test 1`);
console.log(`==================`);
console.log(
    `Check if the plane can land at the airport`
);
// Arrange
let testPlane = new Plane('EthanAir 1');
let testAirport = new Airport();
let expected = 1;

// Act
testAirport.landPlane(testPlane);

actual = testAirport.getPlanes().length;
// Assert

result = assertEquals(actual, expected);

// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();