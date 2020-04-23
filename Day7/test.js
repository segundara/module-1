let num = "2.5+3"
console.log(num.length)
let n = num.split('+')
console.log(n.length)
console.log(n[1].length)
let sum = 0
for(i = 0; i < n.length; i++){
    sum += parseFloat(n[i])
}
console.log(n)
console.log(sum)
