var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var numbers = [11, 23, 34, 24, 12];
var varia = numbers.map(Math.log);
console.log(numbers);
console.log(numbers[0]);
console.log(numbers[2]);
numbers[1] = 2000;
console.log(numbers[1]);
console.log(numbers);
var friends = ['Pooja', 'Vinita', 'Shikha'];
console.log(friends);
console.log(friends[2]);
var newlength = friends.push("shila");
console.log("Array Number lenght:" + newlength);
console.log(friends);
var newdata = friends.push("Rani");
console.log(friends);
console.log(typeof friends);
console.log(typeof numbers);
console.log(typeof friends[0]);
console.log(friends.join("----"));
console.log(varia);
var values = ['Nisah', 2, 'Sheru', 3456, 234, 'Leena'];
console.log(typeof values);
console.log(values);
var fruits = ['Apple', 'Banana', 'Orange', 'Grapes'];
for (var index in fruits) {
    console.log(fruits[index]);
}
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
//Single Diemensional Array
var arr;
arr = [1, 2, 3, 4];
console.log("Array[0]:" + arr[0]);
console.log("Array[1]:" + arr[1]);
//Single Dimensional Array for String
var min;
min = ['Apple', 'Grapes', 'Kiwi', 'Dragon Fruit'];
console.log("Array[0] = " + min[0]);
console.log("Array[1] = " + min[1]);
//Multidiemensional Array
var vor;
vor = [[1, 2, 3,], [4, 5, 6]];
console.log(vor[0][0]);
console.log(vor[0][1]);
console.log(vor[0][2]);
console.log(vor[1][0]);
console.log(vor[1][1]);
console.log(vor[1][2]);
//Passing an array to a Function
var arrr = new Array("Car", "Bike", "Truck", "Bus");
//Passing Array in a function
function display(arr_values) {
    for (var i_1 = 0; i_1 < arr_values.length; i_1++) {
        console.log(arrr[i_1]);
    }
}
display(arrr);
var brr = new Array("Jwala", "neha", "piya");
function displays(brr_values) {
    for (var i_2 = 0; i_2 < brr_values.length; i_2++) {
        console.log(brr[i_2]);
    }
}
displays(brr);
//Spread operator
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
//Create new array from existing array
var copyArray = __spreadArray([], arr1, true);
console.log("CopiedArray:" + copyArray);
var newArray2 = __spreadArray([], arr2, true);
console.log("NewArray:" + newArray2);
var mergeArray = __spreadArray(__spreadArray([], arr1, true), arr2, true);
console.log("MergeArray:" + mergeArray);
friends.forEach(function (value) {
    console.log(value.toUpperCase());
    console.log(value.toLowerCase());
});
var newfriends = friends.map(function (value, index) {
    console.log(index, value);
    return value.toUpperCase();
});
console.log(newfriends);
fruits.forEach(function (data) {
    console.log(data.toUpperCase());
});
