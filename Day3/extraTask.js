/* EXERCISE 1
Write the code to revert an array.
es:
[ 1 , 3, 5] ==> [5 , 3, 1]
*/
/* WRITE YOUR CODE HERE */
const array = [1,3,5];
console.log(array.reverse());

/* EXERCISE 2
Create a code to get the maximum from an array
*/
/* WRITE YOUR CODE HERE */
console.log(Math.max(...array));

/* EXERCISE 3
Create a code to get the minimum from an array
*/
/* WRITE YOUR CODE HERE */
console.log(Math.min(...array));

/* EXERCISE 4
Create a code to get only even numerical value from an array
*/
/* WRITE YOUR CODE HERE */
const myArray = [1,2,3,4,5];

for (i = 0; i < myArray.length; i++){
    if (myArray[i] % 2 === 0) 
    console.log(myArray[i])
}


/* EXERCISE 5
Write the code to delete the even entries from an array
*/
/* WRITE YOUR CODE HERE */
for (i = 0; i < myArray.length; i++){
    if (myArray[i] % 2 === 0){
        myArray.splice(i,1)
    }
}
console.log(myArray);

/* EXERCISE 6
Write the code to remove all the vocal from a string
*/
/* WRITE YOUR CODE HERE */
let str="olusegun";
str1=str.replace(/[aeiou]/gi, '');
console.log(str1);

/* EXERCISE 7
Write the code to increase all the numeric values in a array by 1
*/
/* WRITE YOUR CODE HERE */

for (i = 0; i < myArray.length; i++){
    myArray[i] = myArray[i] + 1;
}
console.log(myArray);

/* EXERCISE 8 
Replace all the strings into an array by their lenght
es.: [ "strive", "is", "good"] => [ 5 , 2, 4]
*/
/* WRITE YOUR CODE HERE */
strings=["a","ab","abc","abcd","abcdef"];
strLength=[];

for(i=0; i<strings.length; i++){
   strLength.push(strings[i].length);

}
console.log(strLength);