
/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/

const area = function(I1, I2){
    return I1 * I2
}

const areaOfRec = area(2,3);
console.log(areaOfRec);

/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/

const crazySum = function(int1, int2){
    if (int1 === int2){
        let result = (int1 + int2)
        return (`${result * 3}`)
    }else return (`Given integers are not equal`)
}

const tripleSum = crazySum(2,2)
console.log(tripleSum);

/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/
const crazyDiff = function(num){
    let result = Math.abs(num - 19)
    if (num > 19){
        return (`Given number is greater than 19 so triple their absolute diff gives ${result * 3}`)
    }else return (`Given number is less than 19 so the absolute diff is ${result}`)
}

const tripleDiff = crazyDiff(22)
console.log(tripleDiff);

/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/
const boundary = function(N){
    //return ((20 <= N <= 100) || (N === 400)) ? true : false;
    if ((20 <= N) && (N <= 100) || (N === 400)){
        return true
    }else return false
}

const checkBound = boundary(4);
console.log(checkBound);

/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.
*/

/* WRITE YOUR CODE HERE */
const strivify = function(S){
    if (S.startsWith("Strive")){
        return S
    }else return ("Strive"+ S)
}

const checkStr = strivify("Super");
console.log(checkStr);

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

/* WRITE YOUR CODE HERE */
const check3and7 = function(num){
    if ((num % 3 === 0) && (num % 7 === 0)){
        return (`${num} is a multiple of 3 and 7`)
    }else if (num % 7 === 0){
        return (`${num} is a multiple of 7`)
    }else if (num % 3 === 0){
        return (`${num} is a multiple of 3`)
    }else (`please give another number`)
}

const checkNum = check3and7(14);
console.log(checkNum);

/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR CODE HERE */
const reverseString = function(str){
    let reversed = "";    
    for (var i = str.length - 1; i >= 0; i--){        
      reversed += str[i];
    }    
    return reversed;
}

const myStr = reverseString("Hello");
console.log(myStr);

// function reverseString(str){
//     return [...str].reverse().join('');
//   }
// const myStr = reverseString("Hello");
// console.log(myStr);

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/

/* WRITE YOUR CODE HERE */
const upperFirst = function(str){
    let splitStr = str.toLowerCase().split(" ");
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(" "); 
}

const myStr = upperFirst("hello strivers and welcome back for debrief!");
console.log(myStr);

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */
const cutString = function(str){
    let splitStr = str.toLowerCase().split("");
    let firstChar = splitStr.shift();
    let lastChar = splitStr.pop();
    return splitStr.join("")
}

console.log(cutString("strive"))

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
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
console.log(giveMeRandom(4));


/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/