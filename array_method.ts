//Typescript Array Push() Methode

let numbers: number[] = [11,89,23,45,98];
let newlength = numbers.push(15);
console.log(numbers);
console.log(newlength);

var Fruit: string[] = ['Mango','Apple','kiwi','Orange'];
var Newfruit = Fruit.push('Grapes');
console.log(Fruit);
console.log(newlength);

let value: number[] = [12,34,23,3,4,67,23]
let newlengths = value.push(1,2,3,4,);
console.log(value);
console.log(newlengths);

//Typescript Array Slice() Methode

let nums:number[] = [1,2,3,4,5,6,7,8]
let vars:number[] = nums.slice(1,5);

console.log(nums)

let participants: string[] = ['rina','mina','lina','chna','tina'];
let newparti: string[] = participants.slice(9,1);
console.log(participants);
console.log(newparti);

//TypeScript Array reverse() Method

let rev:number[] = [29,34,56,45,78]
let newrev:number[] = rev.reverse();
console.log(newrev);

//TypeScript Array reduce() Method
//Summing Array Elements

let arrs:number[] = [11,89,23,7,98];
let valu:number = arrs.reduce((a, b) => {
    return a + b;
}, 0);
console.log(valu);

//Example 2 of reduce()

let cal:number[] = [2,5,6,3,8,9];
let result:number = cal.reduce((a,b) => {
    return a * b/2;
},0);
console.log(result);

let total:number[] = [10,20,30,40];
let newtotal: number = total.reduce((a,b)=>{
    return a + b/2;
},0);
console.log(newtotal);

//Grades using reduce
let marks:number[] = [40,67,69,98,80];
let newmarks:number = marks.reduce((accumulator, element) => {
        return Math.max(accumulator, element)
}); 

console.log(newmarks);

//TypeScript Array splice() Method

let arrrs: string[] = ["G", "e", "e", "k", "s", "f", "o", "r", "g", "e", "e", "k", "s"];
let valr: string[];

// use of splice() method
valr = arrrs.splice(0, 5);
console.log(valr);
console.log(arrrs);

//TypeScript Array concat() Method

const array1: number[] = [11, 12, 13];
const array2: number[] = [14, 15, 16];
const array3: number[] = [17, 18, 19];

const newArray:number[] = array1.concat(array2,array3);
console.log(newArray);

const arra:string[] = ['A','B']
const arrb:string[] = ['C','D']
const arrc:string[] = ['E','F']

const newarra:string[] = arra.concat(arrb,arrc);
console.log(newarra);

//TypeScript Array some() Method

let numbero: number[] = [-1, -2, 3, -4, -5];
let hasPositive = numbero.some((num)=>{
    return num>0;
});
console.log(hasPositive); // Output: true

//TypeScript Array shift() Method

let numberg: number[] = [11, 89, 23, 7, 98];
let firstElements: number = numberg.shift();

console.log(firstElements);  // Output: 11
console.log(numberg);       // Output: [ 89, 23, 7, 98 ]


//Second Example

let queue: number[] = [2, 5, 6, 3, 8, 9];
let firstInQueue: number = queue.shift();
let secondInQueue: number = queue.shift();

console.log(firstInQueue);  // Output: 2
console.log(secondInQueue); // Output: 5
console.log(queue);         // Output: [ 6, 3, 8, 9 ]

//TypeScript Array toString() Method

let nub:number[] = [2,3,4,5,6]
let newnub:string = nub.toString();
console.log(newnub);

//TypeScript Array forEach() Method

let arru: number[] = [11,22,56,45,48]

//Printing Each element
arru.forEach((index, value: number)=>{
    console.log(index,value);
});

//print Square

let square:number[] = [1,2,3,4]
square.forEach((values:number)=>{
    console.log(values * values);
});

//TypeScript Array unshift() Method

let arrq: number[] = [2, 3, 4];
let newLengthq: number = arrq.unshift(1);
console.log(newLengthq);
console.log(arrq);

//Adding Multiple Elements

let arrw: string[] = ["f", "o", "r"];
let newLengthw: number = arrw.unshift("G", "e", "e", "k", "s");
console.log(newLengthw);
console.log(arrw);

//Array pop() Method

var arr5 = [ 11, 89, 23, 7, 98 ];  
  
    // use of pop() method  
    var val5 = arr5.pop() 
       
    // printing element 
    console.log( val5 ); 


    //TypeScript Array map() Method

    // Driver code
    let arr6: number[] = [11, 89, 23, 7, 98];

    // use of map() method
    let val: number[] = arr6.map(Math.log);

    // printing element
    console.log(val);

    //Second Example

    let mar: number[] = [4,5,6,7,8]

    mar.map((val:number,index:number)=>{
        console.log('Key:',index,'Number',val*val);
    });