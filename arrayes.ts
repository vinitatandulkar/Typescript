var numbers: number[] = [11,23,34,24,12];

let varia: number[] = numbers.map(Math.log);
console.log(numbers);
console.log(numbers[0]);
console.log(numbers[2]);

numbers[1] = 2000;
console.log(numbers[1]);
console.log(numbers);

let friends:string[] = ['Pooja','Vinita','Shikha'];
console.log(friends);
console.log(friends[2]);

let newlength = friends.push("shila");
console.log("Array Number lenght:" + newlength);
console.log(friends);
let newdata = friends.push("Rani");
console.log(friends);

console.log(typeof friends);
console.log(typeof numbers);
console.log(typeof friends[0]);
console.log(friends.join("----"));
console.log(varia);


var values: (string|number)[] = ['Nisah',2,'Sheru',3456,234,'Leena']
console.log(typeof values);
console.log(values);


let fruits: string[] = ['Apple','Banana','Orange','Grapes'];

for( var index in fruits){
    console.log(fruits[index]);
}

for( var i=0; i < fruits.length; i++){
    console.log(fruits[i]);
}

//Single Diemensional Array

let arr:number[];
arr = [1,2,3,4];
console.log("Array[0]:" + arr[0]);
console.log("Array[1]:" + arr[1]);

//Single Dimensional Array for String

let min:string[];
min = ['Apple','Grapes','Kiwi','Dragon Fruit'];
console.log("Array[0] = " + min[0]);
console.log("Array[1] = " + min[1]);

//Multidiemensional Array
let vor:number[][];
vor = [ [1,2,3,],[4,5,6] ];
console.log(vor[0][0]);
console.log(vor[0][1]);
console.log(vor[0][2]);

console.log(vor[1][0]);
console.log(vor[1][1]);
console.log(vor[1][2]);
