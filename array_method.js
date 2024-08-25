//Typescript Array Push() Methode
var numbers = [11, 89, 23, 45, 98];
var newlength = numbers.push(15);
console.log(numbers);
console.log(newlength);
var Fruit = ['Mango', 'Apple', 'kiwi', 'Orange'];
var Newfruit = Fruit.push('Grapes');
console.log(Fruit);
console.log(newlength);
var value = [12, 34, 23, 3, 4, 67, 23];
var newlengths = value.push(1, 2, 3, 4);
console.log(value);
console.log(newlengths);
//Typescript Array Slice() Methode
var nums = [1, 2, 3, 4, 5, 6, 7, 8];
var vars = nums.slice(1, 5);
console.log(nums);
var participants = ['rina', 'mina', 'lina', 'chna', 'tina'];
var newparti = participants.slice(9, 1);
console.log(participants);
console.log(newparti);
//TypeScript Array reverse() Method
var rev = [29, 34, 56, 45, 78];
var newrev = rev.reverse();
console.log(newrev);
//TypeScript Array reduce() Method
//Summing Array Elements
var arrs = [11, 89, 23, 7, 98];
var valu = arrs.reduce(function (a, b) {
    return a + b;
}, 0);
console.log(valu);
//Example 2 of reduce()
var cal = [2, 5, 6, 3, 8, 9];
var result = cal.reduce(function (a, b) {
    return a * b / 2;
}, 0);
console.log(result);
var total = [10, 20, 30, 40];
var newtotal = total.reduce(function (a, b) {
    return a + b / 2;
}, 0);
console.log(newtotal);
//Grades using reduce
var marks = [40, 67, 69, 98, 80];
var newmarks = marks.reduce(function (accumulator, element) {
    return Math.max(accumulator, element);
});
console.log(newmarks);
//TypeScript Array splice() Method
var arrrs = ["G", "e", "e", "k", "s", "f", "o", "r", "g", "e", "e", "k", "s"];
var valr;
// use of splice() method
valr = arrrs.splice(0, 5);
console.log(valr);
console.log(arrrs);
//TypeScript Array concat() Method
var array1 = [11, 12, 13];
var array2 = [14, 15, 16];
var array3 = [17, 18, 19];
var newArray = array1.concat(array2, array3);
console.log(newArray);
var arra = ['A', 'B'];
var arrb = ['C', 'D'];
var arrc = ['E', 'F'];
var newarra = arra.concat(arrb, arrc);
console.log(newarra);
//TypeScript Array some() Method
var numbero = [-1, -2, 3, -4, -5];
var hasPositive = numbero.some(function (num) {
    return num > 0;
});
console.log(hasPositive); // Output: true
//TypeScript Array shift() Method
var numberg = [11, 89, 23, 7, 98];
var firstElements = numberg.shift();
console.log(firstElements); // Output: 11
console.log(numberg); // Output: [ 89, 23, 7, 98 ]
//Second Example
var queue = [2, 5, 6, 3, 8, 9];
var firstInQueue = queue.shift();
var secondInQueue = queue.shift();
console.log(firstInQueue); // Output: 2
console.log(secondInQueue); // Output: 5
console.log(queue); // Output: [ 6, 3, 8, 9 ]
//TypeScript Array toString() Method
var nub = [2, 3, 4, 5, 6];
var newnub = nub.toString();
console.log(newnub);
//TypeScript Array forEach() Method
var arru = [11, 22, 56, 45, 48];
//Printing Each element
arru.forEach(function (index, value) {
    console.log(index, value);
});
//print Square
var square = [1, 2, 3, 4];
square.forEach(function (values) {
    console.log(values * values);
});
//TypeScript Array unshift() Method
var arrq = [2, 3, 4];
var newLengthq = arrq.unshift(1);
console.log(newLengthq);
console.log(arrq);
//Adding Multiple Elements
var arrw = ["f", "o", "r"];
var newLengthw = arrw.unshift("G", "e", "e", "k", "s");
console.log(newLengthw);
console.log(arrw);
//Array pop() Method
var arr5 = [11, 89, 23, 7, 98];
// use of pop() method  
var val5 = arr5.pop();
// printing element 
console.log(val5);
//TypeScript Array map() Method
// Driver code
var arr6 = [11, 89, 23, 7, 98];
// use of map() method
var val = arr6.map(Math.log);
// printing element
console.log(val);
//Second Example
var mar = [4, 5, 6, 7, 8];
mar.map(function (val, index) {
    console.log('Key:', index, 'Number', val * val);
});
