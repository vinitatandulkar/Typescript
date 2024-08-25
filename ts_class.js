var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hello, I'm ".concat(this.name, ", My Age is ").concat(this.age));
    };
    return Person;
}());
var vinita = new Person('Neha', 22);
vinita.greet();
var Employee = /** @class */ (function () {
    function Employee(emp_name, emp_age) {
        this.emp_name = emp_name;
        this.emp_age = emp_age;
    }
    Employee.prototype.emp = function () {
        console.log("Hello My name is ".concat(this.emp_name, ", My age is ").concat(this.emp_age));
    };
    return Employee;
}());
var john = new Employee('Terra', 34);
john.emp();
//Constructors in TypeScript
var Persons = /** @class */ (function () {
    function Persons(name, ages) {
        this.name = name;
        this.ages = ages;
    }
    return Persons;
}());
var Dud = new Persons('Niki', 67);
console.log("My name is ".concat(Dud.name));
//Example: Simple Object
var Zudo = /** @class */ (function () {
    function Zudo(name, age) {
        this.name = name;
        this.age = age;
    }
    Zudo.prototype.greet = function () {
        console.log("This is my ".concat(this.name, " and age is ").concat(this.age));
    };
    return Zudo;
}());
var person = new Zudo('Seela', 38);
console.log(person.name);
person.greet();
