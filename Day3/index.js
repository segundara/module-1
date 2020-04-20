// TERNARY OPERATOR

// const studentAge = 19;

// const price = (studentAge > 18 && studentAge < 30) ? "20$" : "15$";

// console.log(price);

// TRUTHY OR FALSY

//const truthyOrFalsy = 2 - 2 ? "truthy" : "falsy";
// const truthyOrFalsy = undefined ? "truthy" : "falsy";
// const truthyOrFalsy = null ? "truthy" : "falsy";
// const truthyOrFalsy = NaN ? "truthy" : "falsy";
// const truthyOrFalsy = "" ? "truthy" : "falsy";
// const truthyOrFalsy = 1 ? "truthy" : "falsy";

//console.log(truthyOrFalsy);

// const myObject = {
//     name: "John",
//     age: 32,
//     isStudent: true,
// };

// console.log(myObject.name);

// if (myObject.lastName){
//     console.log(myObject.lastName);
// }else {
//     myObject.lastName = "Rambo";
//     console.log(myObject.lastName);
// }

// delete myObject.name;
// console.log(myObject);

// console.log("age" in myObject);

// const obj1 = {
//     a: 1,
// };

// //const obj2 = obj1; // do not do this because it binds the two together and any change to one will affect the other

// const obj2 = {};
// Object.assign(obj2, obj1) //right way to clone 
// console.log(obj2); //obj2 = {a: 1}

// obj2.a = 2;
// console.log(obj2) //obj2 = {a: 2} 
// console.log(obj1) //obj1 = {a: 1} 

// ARRAYS

// let listOfNumbers = [1,2,3,4,5,6,990,1213];
// console.log(listOfNumbers);
// console.log(listOfNumbers[0]);
// console.log("The length of the array is: ", listOfNumbers.length);

// const listOfObjects = [{x: 0, arrayProp:[2,4]}, 2, "asd"];
// console.log(listOfObjects);
// console.log(listOfObjects[0]);
// console.log(listOfObjects[0].arrayProp);
// console.log(listOfObjects[0].arrayProp[1]);

// const listOfObjects = [{x: 0, arrayProp:[2,4]}];

// listOfObjects.push({y: 1, arrayProp: [23, 34]});

// console.log(listOfObjects);

// const lastElement = listOfObjects.pop();
// console.log(listOfObjects);

// for (let num = 0; num <= 5; num++){
//     console.log(num)
// }

// const array = [1,2,3,4];
// for (let index = 0; index < array.length; index++){
//     console.log("index", index, "=>", "element: ", array[index]);
// }

// for (let entry of array){
//     console.log("element: ", entry);
// }

// let num = 0;
// let sum = 0;
// while (num <= 5) {
//     //console.log(num);
//     sum = sum + num;
//     num++;
// }

// let sum = 0;

// do {
//     sum = sum + num;
//     num++;
// }
// while (num <= 5);

//console.log(sum);