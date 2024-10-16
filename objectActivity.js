// 1. Create an object called car with the properties type, model, and color
var car = {
    type: "Toyota",
    model: "AE86",
    color: "Black"
};

// 2. Use typeof to check the type of the object and log it to the console
console.log(typeof car); // Outputs: object

// 3. Update the type property to "Toyota" and log the updated object
car.type = "Toyota";
console.log(car); // Outputs: { type: 'Toyota', model: 'AE86', color: 'Black' }

// 4. Add a new property wheels with the value 4 and log the updated object
car.wheels = 4;
console.log(car); // Outputs: { type: 'Toyota', model: 'AE86', color: 'Black', wheels: 4 }
