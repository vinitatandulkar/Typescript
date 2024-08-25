enum CarName {
    Honda,
    Swift,
    Alto,
    MahendraXUV
}
console.log(CarName);
console.log('This are Various Car:' + CarName.MahendraXUV)

//Example 2 of Enum
enum CarNames {
    Honda = 10,
    Swift,
    Alto,
    MahendraXUV
}
console.log(CarNames);
console.log('This are Various Car:' + CarNames.MahendraXUV)

//Example no 3 Enum

enum fruitsName {
    Apple = "APPLE",
    Banana = "Banana",
    Mango = "Mango",
    Papaya = "Papaya"
}
console.log(fruitsName);

console.log("Fruit name is : " + fruitsName.Apple);

//Example 4 using Heterogeneous Enums(Both string and number)

enum studentDetails {
    name = "ABCD",
    age = 20,
    rollno = 12345,
    address = "XYZ Place PQR city",
    school_name = "ABCDEFG"
}
console.log(studentDetails);

//Example 4 
//Computed enums: Computed enums in TypeScript allow us to generate enum values dynamically based on computations or function calls. 
//This provides greater flexibility in defining enum members, enabling more complex scenarios where enum values need to be calculated
// at runtime.

enum Weekdays {
    Monday = 1,
    Tuesday = Monday + 1,
    Wednesday = Tuesday + 1,
    Thursday = Wednesday + 1,
    Friday = Thursday + 1,
    Saturday = Friday + 1,
    Sunday = Saturday + 1
}

console.log(Weekdays);

