function calculateArea(Length, Width) {return Length*Width
    
}
undefined
console.log(calculateArea(20,5))
VM245:1 100
undefined
console.log(calculateArea(5,3))
VM355:1 15
undefined
function greet(name) {
  return "Good Afternoon, " + name;
}
undefined
console.log(greet("Chizurum"))
VM848:1 Good Afternoon, Chizurum
undefined
console.log(greet("Chinazum"))
VM875:1 Good Afternoon, Chinazum
undefined
function sumNumbers(numbers){let total = 0; for(let num of numbers){total += num;}return total;}
undefined
consle.log(sumNumbers)([7,7,7])
VM1180:1 Uncaught ReferenceError: consle is not defined
    at <anonymous>:1:1
(anonymous) @ VM1180:1
console.log(sumNumbers)([7,7,7])
VM1190:1 ƒ sumNumbers(numbers){let total = 0; for(let num of numbers){total += num;}return total;}
VM1190:1 Uncaught TypeError: console.log(...) is not a function
    at <anonymous>:1:24
(anonymous) @ VM1190:1
console.log(sumNumbers)([7,7,7]);
VM1196:1 ƒ sumNumbers(numbers){let total = 0; for(let num of numbers){total += num;}return total;}
VM1196:1 Uncaught TypeError: console.log(...) is not a function
    at <anonymous>:1:24
(anonymous) @ VM1196:1
console.log sumNumbers([7,7,7])
VM1220:1 Uncaught SyntaxError: Unexpected identifier 'sumNumbers'
console.log (sumNumbers([7,7,7]))
VM1234:1 21
undefined
console.log (sumNumbers([6,-2,7]))
VM1245:1 11
undefined
console.log (sumNumbers([3,19,7]))
VM1257:1 29
undefined
for (let i = 1; i <= 17; i++){console.log(i);}

    
VM1369:1 1
VM1369:1 2
VM1369:1 3
VM1369:1 4
VM1369:1 5
VM1369:1 6
VM1369:1 7
VM1369:1 8
VM1369:1 9
VM1369:1 10
VM1369:1 11
VM1369:1 12
VM1369:1 13
VM1369:1 14
VM1369:1 15
VM1369:1 16
VM1369:1 17
undefined
let num = 1; while (num <= 17) {consoe.log(num);num++;
    
}
VM1457:1 Uncaught ReferenceError: consoe is not defined
    at <anonymous>:1:33
(anonymous) @ VM1457:1
let num = 1; while (num <= 17) {console.log(num);num++;
    
}
VM1462:1 1
VM1462:1 2
VM1462:1 3
VM1462:1 4
VM1462:1 5
VM1462:1 6
VM1462:1 7
VM1462:1 8
VM1462:1 9
VM1462:1 10
VM1462:1 11
VM1462:1 12
VM1462:1 13
VM1462:1 14
VM1462:1 15
VM1462:1 16
VM1462:1 17
17
function sumFor(numbers){let sum = 0; for(let i = 0; i < numbers.length; 1++){sum += numbers[i];}return sum; }
VM1671:1 Uncaught SyntaxError: Invalid left-hand side expression in postfix operation
function sumFor(numbers){let sum = 0; for(let i = 0; i < numbers.length; i++){sum += numbers[i];}return sum; }
undefined
function sumWhile(numbers){let sum = 0; for(let i = 0; while (i < numbers.length){sum += numbers[i]; i++}return sum; }
VM1854:1 Uncaught SyntaxError: Unexpected token 'while'
function sumWhile(numbers){let sum = 0; let i = 0; while (i < numbers.length){sum += numbers[i]; i++}return sum; }
undefined
console.log (sumFor([3,19,7]))
VM1914:1 29
undefined
console.log (sumWhile([3,19,7]))
VM1933:1 29
undefined
console.log (sumWhile([9,74,7]))
VM1962:1 90
undefined
console.log (sumFor([9,74,7]))
VM1977:1 90
undefined
const array = [2,4,6,8,10]; for (let i = 0; i < array.length; i++){console.log(array[i]);}
VM2223:1 2
VM2223:1 4
VM2223:1 6
VM2223:1 8
VM2223:1 10
undefined
const fruits = ["banana","apple","pineapple","guava","papaya",]; while (i < fruits.length){console.log(fruits[i]);i++}
VM2360:1 Uncaught ReferenceError: i is not defined
    at <anonymous>:1:75
(anonymous) @ VM2360:1
const fruits = ["banana","apple","pineapple","guava","papaya",];let while (i < fruits.length){console.log(fruits[i]);i++}
VM2379:1 Uncaught SyntaxError: Unexpected token 'while'
const fruits = ["banana","apple","pineapple","guava","papaya",];let i = 0; while (i < fruits.length){console.log(fruits[i]);i++}
VM2393:1 banana
VM2393:1 apple
VM2393:1 pineapple
VM2393:1 guava
VM2393:1 papaya
4
function checkEvenorOdd(num){if(num % 2 === 0){return "Even";}else {return "Odd";}}
undefined
console.log (checkEvenorOdd(20));
VM2687:1 Even
undefined
console.log (checkEvenorOdd(781));
VM2753:1 Odd
undefined
console.log (checkEvenorOdd(76.4));
VM2811:1 Odd
undefined
 function gradingSystem(score){if(score >= 80){return 'A';}else if (score >= 65){return 'B';}else if (score >= 50){return 'C';}else if (score >= 30){return 'D';}else{return 'F';}}
undefined
console.log(gradingSystem(67))
VM3307:1 B
undefined
console.log(gradingSystem(0))
VM3443:1 F
undefined
