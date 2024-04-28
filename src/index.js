import Airport from './airport.js';
console.log("-------------------");
console.log("Welcome to the main entry point of the application. This is where we will demonstrating the exciting features of this new application!!!!")
console.log("We have a lot of cool stuff to show you, so let's get started!")
console.log(" ");
console.log("FIRST. We are going to demonstrate how we can implement an exact model of your airport!")
console.log("We have a list of all the airports in the world, and we can show you how to use it in your application.")
let Stansted = new Airport();
console.log("Stansted Airport created!!");
console.log("");
console.log("Easy right?")
console.log("");
console.log("-------------------");
console.log("");
console.log("SECOND. We are going to demonstrate how we can land a plane at the airport.")
console.log("First we need to set the maximum capacity of the airport.")
Stansted.setMaxCapacity(4);
console.log(`The maximum capacity of Stansted Airport is: ${Stansted.getMaxCapacity()}`);
console.log("");
console.log("Lets land a few airplanes at Stansted Airport.");
console.log("The planes we are going to land are: Boeing 747, Airbus A380, Boeing 787, Boeing 737.")
Stansted.landPlane("Boeing 747");
Stansted.landPlane("Airbus A380");
Stansted.landPlane("Boeing 787");
Stansted.landPlane("Boeing 737");
console.log("");
console.log(`The planes currently stationed at Stansted Airport are: ${Stansted.getPlanes().join(", ")}!`);
console.log("We have landed 4 planes at Stansted Airport. The airport is now full.")
console.log("");
console.log("Lets try to land another plane.")
Stansted.landPlane("Airbus A320");
console.log("Attempting to land another plane!")
console.log(`The planes currently stationed at Stansted Airport are: ${Stansted.getPlanes().join(", ")}!`);
console.log("The airport is full and we cannot land another plane.")
console.log("");
console.log("-------------------");
console.log("");
console.log("THIRD. We are going to demonstrate how we can take off a plane from the airport.")
console.log("Lets take off the Boeing 747 from Stansted Airport.")
Stansted.takeOffPlane("Airbus A380");
console.log(`The planes currently stationed at Stansted Airport are: ${Stansted.getPlanes().join(", ")}!`);
console.log("The Boeing 747 has taken off from Stansted Airport.")
console.log("");
console.log("Lets take off the Airbus A380 from Stansted Airport.")
Stansted.takeOffPlane("Boeing 787");
console.log(`The planes currently stationed at Stansted Airport are: ${Stansted.getPlanes().join(", ")}!`);
console.log("The Airbus A380 has taken off from Stansted Airport.")
console.log("");
console.log("FOURTH. We are going to demonstrate how the weather will affect landing and taking off planes.")
console.log("Lets set the weather to stormy.")
Stansted.setStormy(true);
console.log(`The weather at Stansted Airport is stormy: ${Stansted.isStormy()}`);
console.log("");
console.log("The weather is stormy and we cannot land or take off any planes.")
console.log("");
console.log("Lets try land the Airbus A320 at Stansted Airport again.")
console.log("Lets make sure there is still room in the airport!");
Stansted.setMaxCapacity(5);
console.log(`The maximum capacity of Stansted Airport is: ${Stansted.getMaxCapacity()}`);
Stansted.landPlane("Airbus A320");
console.log(`The planes currently stationed at Stansted Airport are: ${Stansted.getPlanes().join(", ")}!`);
console.log("");
console.log("What if we try to take off Boeing 737 from Stansted Airport while stormy?")
Stansted.takeOffPlane("Boeing 737");
console.log(`The planes currently stationed at Stansted Airport are: ${Stansted.getPlanes().join(", ")}!`);
console.log("The weather is stormy and we cannot take off any planes.")
console.log("");
console.log("-------------------");
console.log("");
console.log("This software is robust and can handle all the edge cases that you can throw at it.")
console.log("This includes but is not limited to: Checking real names of planes before landing or taking off, checking if the plane is already in the airport before taking off, checking if the airport is full before landing,");
console.log("checking if the airport is not stormy before landing or taking off, checking if the maximum capacity is positive, and many more.");
console.log("");
console.log("-------------------");
console.log("");
console.log("Thank you for using our software! We hope you enjoyed the demonstration!")
console.log("Please let us know if you have any questions or feedback! We are always happy to help!")
console.log("");
console.log("-------------------");
