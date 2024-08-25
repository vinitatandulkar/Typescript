var arrTuple = [501, "welcome", 505, "Mohan"];
console.log(arrTuple);
var arrTuple2 = [201, "Nikita", 303, "Tandulkar"];
console.log(arrTuple2);
var employee = [1, "Steve"];
console.log(employee[0], employee[1]);
var empTuple = ["Vivek Singh", 22, "Honesty"];
console.log("Name of the Employee is: " + empTuple[0]);
console.log("Age of the Employee is: " + empTuple[1]);
console.log(empTuple[0] + " is known for " + empTuple[2]);
//The push() method adds elements to the tuple.
var employee = [1, "Steve"];
employee.push(2, "Bill");
console.log(employee);
var car = ['Rami', 23, 'Ayodhya Nagar'];
car.push(51, 'Nagpur');
console.log(car);
var empTuples = ["Vivek Singh", 22, "Honesty"];
console.log("Items: " + empTuples);
empTuples.push(10001);
console.log("Length of Tuple Items after push: " + empTuples.length);
console.log("Items: " + empTuples);
//The pop() method removes the last element from the tuple.
var empTuplee = ["Mohit Singh", 25, "GeeksforGeeks", 10001];
console.log("Items: " + empTuplee);
empTuplee.pop();
console.log("Length of Tuple Items after pop: " + empTuplee.length);
console.log("Items: " + empTuplee);
//You can modify tuple elements using their indices and the assignment operator.
var empTuplev = ["Ganesh Singh", 25, "TCS"];
empTuplev[1] = 60;
console.log("Name of the Employee is: " + empTuplev[0]);
console.log("Age of the Employee is: " + empTuplev[1]);
console.log(empTuple[0] + " is working in " + empTuplev[2]);
//Destructuring Tuples
//You can break up the structure of a tuple using destructuring.
var empTupleq = ["Rohit Sharma", 25, "JavaTpoint"];
var nameq = empTupleq[0], age = empTupleq[1];
console.log(nameq);
console.log(age);
//Tuple Creation in TypeScript
var studentTuple = [1, 'Aman', 'CSE', 2, 'Ram', 'CSE'];
console.log(studentTuple);
//Passing Tuples to Functions
//Tuples can be passed as parameters to functions.
var empTupled = ["GeeksforGeeks", 101, "Abhishek"];
function display(tuple_values) {
    for (var i = 0; i < tuple_values.length; i++) {
        console.log(tuple_values[i]);
    }
}
display(empTupled);
