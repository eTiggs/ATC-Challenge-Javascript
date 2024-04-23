import Airport from '../src/airport.js';
import Plane from '../src/plane.js';
import { assertEquals } from '../spec/test-framework.js';

let actual, result;

const afterEach = () => {
    testAirport = undefined;
    testPlane = undefined;
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

console.log(`Test 2`);
console.log(`==================`);
console.log(
    `Check if the plane is already in the airport`
);
// Arrange
testPlane = new Plane('EthanAir 1');
testAirport = new Airport();
expected = testPlane;

// Act
testAirport.landPlane(testPlane);

actual = testAirport.getPlanes()[0];

// Assert
result = assertEquals(actual, expected);

// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();