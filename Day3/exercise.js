/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/

/* EXERCISE 1
Create and array with the first 5 positive numbers
*/

/* WRITE YOUR CODE HERE */
//const firstFivePositive = [0,1,2,3,4];
const firstFivePositive = [];

for (i = 0; i < 5; i++){
    firstFivePositive.push(i);
}

//console.log(firstFivePositive);

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

/* WRITE YOUR CODE HERE */
let myObject = {
    name: "segun",
    surname: "okedara",
    "email address": "odara@gmail.com",
    age: 10,
};

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license
*/

/* WRITE YOUR CODE HERE */
myObject.haveDrivingLicense = true;
//console.log(myObject);

/* EXERCISE 4
Remove from the previously created object the age
*/

/* WRITE YOUR CODE HERE */
delete myObject.age;
//console.log(myObject);

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address
*/

/* WRITE YOUR CODE HERE */
let mySecondObj = {
    name: "olu",
    surname: "oke",
    "email address": "oluoke@gmail.com",
};

//myObject["email address"] !== mySecondObj["email address"] ? console.log("different email") : console.log("same email");

/* EXERCISE 6
You are working for a eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50€, they can have free shipping (otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.
*/

/* WRITE YOUR CODE HERE */
let totalShoppingCart = 60;
let shipping = 10;
let totalCost;

(totalShoppingCart > 50) ? (totalCost = totalShoppingCart) : (totalCost = totalShoppingCart + shipping)
//console.log(totalCost);

/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.
*/

/* WRITE YOUR CODE HERE */
let totalShopping;
let blackFridayPromo = 0.2;
let purchasedPromo = totalShoppingCart * blackFridayPromo;
let totalAfterPromo = totalShoppingCart - purchasedPromo;
let shippingPromo = shipping * blackFridayPromo;
let finalShipping = shipping - shippingPromo;

(totalAfterPromo > 50) ? (totalShopping = totalAfterPromo) : (totalShopping = totalAfterPromo + finalShipping)
//console.log(totalShopping);

/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it and change the licensePlate without affecting the original car.
Do it for five cars.
*/

/* WRITE YOUR CODE HERE */
const myCarObject1 = {
    brand: "toyota",
    model: "corolla",
    licensePlate: "abc-123",
};

const myCarObject2 = {};
const myCarObject3 = {};
const myCarObject4 = {};
const myCarObject5 = {};

Object.assign(myCarObject2, myCarObject1);
Object.assign(myCarObject3, myCarObject1);
Object.assign(myCarObject4, myCarObject1);
Object.assign(myCarObject5, myCarObject1);

myCarObject2.licensePlate = "def-123";
myCarObject3.licensePlate = "ghi-123";
myCarObject4.licensePlate = "jkl-123";
myCarObject5.licensePlate = "mno-123";

// console.log(myCarObject1)
// console.log(myCarObject2)
// console.log(myCarObject3)
// console.log(myCarObject4)
// console.log(myCarObject5)

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise
*/

/* WRITE YOUR CODE HERE */

//comment from Ricardo
// totalCost = totalShoppinCart > 50 ? totalShoppingCart: totalShoppingCart + shipping
// const carsForRent = [car1, car2, car3]
// carsForRent.push(car1)

// carsForRent.push(car2)


const carsForRent = [
    {brand: "toyota", model: "corolla", licensePlate: "abc-123"},
    {brand: "toyota", model: "corolla", licensePlate: "def-123"},
    {brand: "toyota", model: "corolla", licensePlate: "ghi-123"},
    {brand: "toyota", model: "corolla", licensePlate: "jkl-123"},
    {brand: "toyota", model: "corolla", licensePlate: "mno-123"}
]

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR CODE HERE */
const lastCar = carsForRent.pop();
const firstCar = carsForRent.splice(0,1);

//console.log("last car: ",lastCar);
//console.log("first car: ",firstCar);
//console.log(carsForRent);

/* EXERCISE 11
Print in the console, the types of a single car, of the car licensePlate and of the brand
*/

/* WRITE YOUR CODE HERE */
//console.log(carsForRent);
for (let i = 0; i < carsForRent.length; i++){
    //console.log("brand: ",carsForRent[i].brand, " licensePlate: ", carsForRent[i].licensePlate);
}

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays
*/

/* WRITE YOUR CODE HERE */
const carsForSale = [
    {brand: "honda", model: "civic", licensePlate: "abc-123"},
    {brand: "honda", model: "accord", licensePlate: "def-123"},
    {brand: "honda", model: "jazz", licensePlate: "ghi-123"}
];

let totalCars;

totalCars = carsForRent.length + carsForSale.length;
//console.log(totalCars);

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array
*/

/* WRITE YOUR CODE HERE */
for (let i = 0; i < carsForSale.length; i++){
    //console.log(carsForSale[i]);
}

/* WHEN YOU ARE FINISHED
Send the code via Slack to the tutor! In the next days we'll also learn how to use GIT 
*/
