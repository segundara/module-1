/* EXERCISE 11
Write a function "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5.
The function returs the sum of the numbers bigger than 5.
*/

/* WRITE YOUR CODE HERE */
const giveMeRandom = function(n){
    let array = [];
    while(array.length < n){
        let num = Math.floor(Math.random() * 11) + 0;
        if(array.indexOf(num) === -1) array.push(num);
    }
    return array
}
//console.log(giveMeRandom(10));

const checkArray = function(array){
    let sum = 0;
    array.forEach(element => {
        if(element > 5){
            sum += element
            console.log(`${element} is greater than 5`)
        }
        else if(element === 5){
            console.log(`${element} is equal to 5`)
        }else console.log(`${element} is less than 5`)
    });

    return sum
}

let numArr = giveMeRandom(5);
console.log(numArr)
console.log(`The total sum of numbers bigger than 5 is ${checkArray(numArr)}`)

/* EXERCISE 12
In your eCommerce you have an array of object called shoppingCart. In this array you have a number of objects with a price, name, id and number to be shipped.
Create a function "shippingCartTotal" which calculates the total due to the shop.
*/

/* WRITE YOUR CODE HERE */
const shoppingCart = [
    {
        price: 20,
        name: "sofa",
        id: 123,
        number: 5
    },
    {
        price: 10,
        name: "table",
        id: 234,
        number: 2
    },
    {
        price: 15,
        name: "cabinet",
        id: 345,
        number: 1
    }
]

const shippingCartTotal = function(item){
    let totalCost = 0;
    for(i = 0; i < item.length; i++){
        totalCost += item[i].number * item[i].price;
    }
    return totalCost
}

console.log(`Total cost of all items in cart is €${shippingCartTotal(shoppingCart)}`)


/* EXERCISE 13
In your eCommerce you have an array of object called shoppingCart. In this array you have a number of objects with a price, name, id and number to be shipped.
Create a function "addToShoppingCart" which receives a new object and add it to shoppingCart and returns the number of items in the shoppingCart.
*/

/* WRITE YOUR CODE HERE */
const addToShoppingCart = function(p, na, id, num){
    let newObj = {
        price: p,
        name: na,
        id: id,
        number: num
    }

    shoppingCart.push(newObj)

    let totalCount = 0;
    for(i = 0; i < shoppingCart.length; i++){
        totalCount += shoppingCart[i].number;
    }
    
    return totalCount

}


const newCart = addToShoppingCart(25, "TV", 111, 2)
console.log(shoppingCart)
console.log(`Total number of items in the cart now is ${newCart}`)


/* EXERCISE 14
In your eCommerce you have an array of object called shoppingCart. In this array you have a number of objects with a price, name, id and number to be shipped.
Create a function "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in the array.
*/

/* WRITE YOUR CODE HERE */
const maxShoppingCart = function(item){
    let max = 0;
    for(i = 0; i < item.length; i++){
        if(item[i].price > max){
            max = item[i].name
        }
    }
    return max
}

console.log(`The most expensive item in the cart is ${maxShoppingCart(shoppingCart)}`)

/* EXERCISE 15
In your eCommerce you have an array of object called shoppingCart. In this array you have a number of objects with a price, name, id and number to be shipped.
Create a function "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

/* WRITE YOUR CODE HERE */
const latestShoppingCart = function(item){
    if(item instanceof Array){
        return item[item.length - 1]
    }
}

console.log(latestShoppingCart(shoppingCart))

/* EXERCISE 16
Create a function "loopUntil" which receives an integer X between 0 and 9.
The function loops and prints a random number between 0 and 9 until the random number is bigger than X three times in a row.
*/

/* WRITE YOUR CODE HERE */
const loopUntil = function(x){
    if (Number.isInteger(x) && 0 <= x && x <= 9){
        let counter = 0
        do{
            let num = Math.floor(Math.random() * 10) + 0;
            if(num > x){
                counter += 1
            }else counter = 0
            console.log(num + " " + counter)
        }while(counter < 3)
    }
}

loopUntil(8)

/* EXERCISE 17
Write a function "average" which receives an array and return the average value. The function automatically skips non-numeric entries in the array.
*/

/* WRITE YOUR CODE HERE */
const average = function(array){
    let sum = 0;
    let counter = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (Number.isInteger(element)){
            sum += element
            counter += 1
        }else {
            sum = sum
            counter = counter
        }        
    }
    let ave = sum / counter
    return ave
}

console.log(average([3,"a",4,"b","c",5]))

/* EXERCISE 18
Write a function "longest" to find the longest string from an given array of strings.
*/

/* WRITE YOUR CODE HERE */
const longest = function(strArr){
    let dLongest = ""
    for (let index = 0; index < strArr.length; index++) {
        if(strArr[index].length > dLongest.length){
            dLongest = strArr[index]
        }else dLongest = dLongest
        //const element = array[index];
    }
    return dLongest
}

let strings = ["long", "longer", "longest"]
console.log(longest(strings))

/* EXERCISE 19
Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
Check if the email is valid using string methods. The email (in this example) is valid if the words SPAM and SCAM does not appear.
*/



/* ****** EXTRA EXERCISES ****** */

/* WRITE YOUR CODE HERE */
const checkEmail = function(emailContent){
    let email = String(emailContent).toUpperCase()
    if(email.indexOf("SPAM") === -1 && email.indexOf("SCAM") === -1){
        return true
    } else return false
}

console.log(checkEmail("scam email"))
console.log(checkEmail("proper email"))
console.log(checkEmail("again spam email"))

/* EXERCISE 20
Write a function that receives a date D as parameter and calculates the number of days passes since the D.
*/

/* WRITE YOUR CODE HERE */
//let D;
const getDate = function(D){
    const one_day = 1000 * 60 * 60 * 24;
    let a = new Date(D)
    let b = new Date()

    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    const result = Math.floor((utc2 - utc1) / one_day);
    return result
}

let givenDate = "2020-03-31"
const myDate = getDate(givenDate)
console.log("its",myDate,"days since",givenDate)

/* EXERCISE 21
Write a function "matrixGenerator" that receives X and Y as parameter. The result should be a matrix of X times Y with, as value, the index of the position.
Ex.: X = 3, Y = 2
["00","01","02"
"10","11","12"]
*/

/* WRITE YOUR CODE HERE */
const matrixGenerator = function(x,y){
    let eachRow = []
    let matrix = []
    for (let col = 0; col < y; col++) {
        for (let row = 0; row < x; row++) {
            eachRow.push(col+""+row)
        }
    }
    while (eachRow.length > 0) {
        matrix.push(eachRow.splice(0,x))
    }
    return matrix
}


 console.log(matrixGenerator(3,4))