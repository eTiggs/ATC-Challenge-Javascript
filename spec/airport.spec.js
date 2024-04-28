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
let testPlane = "EthanAir 1";
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
testPlane = "EthanAir 1";
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



console.log(`Test 3`);
console.log(`==================`);
console.log(
    `Ensure I cannot land null at the airport`
);
// Arrange
testPlane = null
testAirport = new Airport();
expected = false;

// Act
testAirport.landPlane(testPlane);

actual = testAirport.getPlanes().includes(testPlane);

// Assert
result = assertEquals(actual, expected);

// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();



console.log(`Test 4`);
console.log(`==================`);
console.log(
    `Check if a plane can leave the airport`
);
// Arrange
testPlane = "EthanAir 1";
testAirport = new Airport();
expected = false;

// Act
testAirport.landPlane(testPlane);
testAirport.takeOffPlane(testPlane);

actual = testAirport.getPlanes().includes(testPlane);

// Assert
result = assertEquals(actual, expected);

// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();



console.log(`Test 5`);
console.log(`==================`);
console.log(
    `Check if a the plane is at the airport`
);
// Arrange
testPlane = "EthanAir 1";
testAirport = new Airport();
expected = true;

// Act
testAirport.landPlane(testPlane);
actual = testAirport.getPlanes().includes(testPlane);
testAirport.takeOffPlane(testPlane);

// Assert
result = assertEquals(actual, expected);

// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();



console.log(`Test 6`);
console.log(`==================`);
console.log(
    `Ensure that I cannot take off a null plane`
);
// Arrange
testPlane = null;
testAirport = new Airport(testPlane);
expected = true;

// Act
testAirport.takeOffPlane(testPlane);
actual = testAirport.getPlanes().includes(testPlane);

// Assert
result = assertEquals(actual, expected);

// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();



console.log(`Test 6`);
console.log(`==================`);
console.log(
    `Cannot land planes over maximum capacity`
);
// Arrange
testPlane = "EthanAir 1";
let testPlane2 = "EthanAir 2";
let testPlane3 = "EthanAir 3";
testAirport = new Airport();
expected = true;

// Act
testAirport.landPlane(testPlane);
testAirport.landPlane(testPlane2);
testAirport.landPlane(testPlane3);

actual = testAirport.getMaxCapacity() === 2;


// Assert
result = assertEquals(actual, expected);

// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();



console.log(`Test 7`);
console.log(`==================`);
console.log(
    `I can change the max capacity of the airport`
);
// Arrange
testPlane = "EthanAir 1";
testPlane2 = "EthanAir 2";
testPlane3 = "EthanAir 3";
testAirport = new Airport();
expected = true;

// Act
testAirport.landPlane(testPlane);

testAirport.setMaxCapacity(1);

actual = testAirport.getMaxCapacity() === 1;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();



console.log(`Test 8`);
console.log(`==================`);
console.log(
    `Capacity will track plane count`
);
// Arrange
testPlane = "EthanAir 1";
testPlane2 = "EthanAir 2";
testAirport = new Airport();
expected = true;

// Act
testAirport.landPlane(testPlane);
testAirport.landPlane(testPlane2);

actual = testAirport.getPlanes().length === 2;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();



console.log(`Test 9`);
console.log(`==================`);
console.log(
    `I cannot set the capacity lower than the current plane count`
);
// Arrange
testPlane = "EthanAir 1";
testPlane2 = "EthanAir 2";
testAirport = new Airport();
expected = true;

// Act
testAirport.landPlane(testPlane);
testAirport.landPlane(testPlane2);

testAirport.setMaxCapacity(1);

actual = testAirport.getPlanes().length === 2;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();



console.log(`Test 10`);
console.log(`==================`);
console.log(
    `I cannot change the capacity to a number outside the bounds of 0 to 150`
);
// Arrange
testPlane = "EthanAir 1";
testPlane2 = "EthanAir 2";
testAirport = new Airport();
expected = false;

// Act
testAirport.landPlane(testPlane);
testAirport.landPlane(testPlane2);

testAirport.setMaxCapacity(151);

actual = testAirport.getMaxCapacity() === 151;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();



console.log(`Test 11`);
console.log(`==================`);
console.log(
    `Check if the weather is stormy`
);
// Arrange
testAirport = new Airport();
expected = true;

// Act

actual = testAirport.isStormy();

// Assert
result = assertEquals(actual, expected);

// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);



// Clean Up
afterEach();

console.log(`Test 12`);
console.log(`==================`);
console.log(
    `If the weather is stormy, don't allow a plane to land`
);
// Arrange
testAirport = new Airport();
testPlane = "EthanAir 1";

testAirport.landPlane(testPlane);

expected = false;

// Act

actual = testAirport.getPlanes().includes(testPlane);

// Assert
result = assertEquals(actual, expected);

// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();



console.log(`Test 13`);
console.log(`==================`);
console.log(
    `If the weather is stormy, don't allow a plane to take off`
);
// Arrange
testPlane = "EthanAir 1";
testAirport = new Airport(testPlane);

testAirport.takeOffPlane(testPlane);
expected = true;

// Act

actual = testAirport.getPlanes().includes(testPlane);

// Assert
result = assertEquals(actual, expected);

// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();
