var CarName;
(function (CarName) {
    CarName[CarName["Honda"] = 0] = "Honda";
    CarName[CarName["Swift"] = 1] = "Swift";
    CarName[CarName["Alto"] = 2] = "Alto";
    CarName[CarName["MahendraXUV"] = 3] = "MahendraXUV";
})(CarName || (CarName = {}));
console.log(CarName);
console.log('This are Various Car:' + CarName.MahendraXUV);
//Example 2 of Enum
var CarNames;
(function (CarNames) {
    CarNames[CarNames["Honda"] = 10] = "Honda";
    CarNames[CarNames["Swift"] = 11] = "Swift";
    CarNames[CarNames["Alto"] = 12] = "Alto";
    CarNames[CarNames["MahendraXUV"] = 13] = "MahendraXUV";
})(CarNames || (CarNames = {}));
console.log(CarNames);
console.log('This are Various Car:' + CarNames.MahendraXUV);
//Example no 3 Enum
var fruitsName;
(function (fruitsName) {
    fruitsName["Apple"] = "APPLE";
    fruitsName["Banana"] = "Banana";
    fruitsName["Mango"] = "Mango";
    fruitsName["Papaya"] = "Papaya";
})(fruitsName || (fruitsName = {}));
console.log(fruitsName);
console.log("Fruit name is : " + fruitsName.Apple);
//Example 4 using Heterogeneous Enums(Both string and number)
var studentDetails;
(function (studentDetails) {
    studentDetails["name"] = "ABCD";
    studentDetails[studentDetails["age"] = 20] = "age";
    studentDetails[studentDetails["rollno"] = 12345] = "rollno";
    studentDetails["address"] = "XYZ Place PQR city";
    studentDetails["school_name"] = "ABCDEFG";
})(studentDetails || (studentDetails = {}));
console.log(studentDetails);
//Example 4 
//Computed enums: Computed enums in TypeScript allow us to generate enum values dynamically based on computations or function calls. 
//This provides greater flexibility in defining enum members, enabling more complex scenarios where enum values need to be calculated
// at runtime.
var Weekdays;
(function (Weekdays) {
    Weekdays[Weekdays["Monday"] = 1] = "Monday";
    Weekdays[Weekdays["Tuesday"] = 2] = "Tuesday";
    Weekdays[Weekdays["Wednesday"] = 3] = "Wednesday";
    Weekdays[Weekdays["Thursday"] = 4] = "Thursday";
    Weekdays[Weekdays["Friday"] = 5] = "Friday";
    Weekdays[Weekdays["Saturday"] = 6] = "Saturday";
    Weekdays[Weekdays["Sunday"] = 7] = "Sunday";
})(Weekdays || (Weekdays = {}));
console.log(Weekdays);
