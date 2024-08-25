let arrTuple: [number, string, number, string] = [501, "welcome", 505, "Mohan"];
console.log(arrTuple);

let arrTuple2: [number, string, number, string] = [201, "Nikita", 303, "Tandulkar"];
console.log(arrTuple2);

var employee: [number, string] = [1, "Steve"];
console.log(employee[0],
employee[1]);

let empTuple: [string, number, string] = ["Vivek Singh", 22, "Honesty"];
console.log("Name of the Employee is: " + empTuple[0]);
console.log("Age of the Employee is: " + empTuple[1]);
console.log(empTuple[0] + " is known for " + empTuple[2]);

//The push() method adds elements to the tuple.

var employee: [number, string] = [1, "Steve"];
employee.push(2, "Bill"); 
console.log(employee); 

var car:[string, number, string] = ['Rami', 23, 'Ayodhya Nagar'];
car.push(51,'Nagpur')
console.log(car);

let empTuples: [string, number, string] = ["Vivek Singh", 22, "Honesty"];
console.log("Items: " + empTuples);
empTuples.push(10001);
console.log("Length of Tuple Items after push: " + empTuples.length);
console.log("Items: " + empTuples);

//The pop() method removes the last element from the tuple.

let empTuplee: [string, number, string, number] = ["Mohit Singh", 25, "GeeksforGeeks", 10001];
console.log("Items: " + empTuplee);
empTuplee.pop();
console.log("Length of Tuple Items after pop: " + empTuplee.length);
console.log("Items: " + empTuplee);

//You can modify tuple elements using their indices and the assignment operator.

let empTuplev: [string, number, string] = ["Ganesh Singh", 25, "TCS"];
empTuplev[1] = 60;
console.log("Name of the Employee is: " + empTuplev[0]);
console.log("Age of the Employee is: " + empTuplev[1]);
console.log(empTuple[0] + " is working in " + empTuplev[2]);

//Destructuring Tuples
//You can break up the structure of a tuple using destructuring.

let empTupleq: [string, number, string] = ["Rohit Sharma", 25, "JavaTpoint"];
let [nameq, age] = empTupleq;
console.log(nameq);
console.log(age);

//Tuple Creation in TypeScript

let studentTuple: [number, string, string, number, string, string] = [1, 'Aman', 'CSE', 2, 'Ram', 'CSE'];
console.log(studentTuple);

//Passing Tuples to Functions
//Tuples can be passed as parameters to functions.
let empTupled: [string, number, string] = ["GeeksforGeeks", 101, "Abhishek"];

function display(tuple_values: any[]) {
  for (let i = 0; i < tuple_values.length; i++) {
    console.log(tuple_values[i]);
  }
}

display(empTupled);