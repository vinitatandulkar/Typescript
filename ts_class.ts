class Person {
    constructor(public name:string,public age:number){}

    greet(): void {
        console.log(`Hello, I'm ${this.name}, My Age is ${this.age}`);
    }
}

const vinita = new Person('Neha',22);
vinita.greet();

class Employee{
    constructor(public emp_name:string, public emp_age:number){}

    emp():void{
        console.log(`Hello My name is ${this.emp_name}, My age is ${this.emp_age}`);
    }
}

const john = new Employee('Terra',34);
john.emp();

//Constructors in TypeScript

class Persons{
    constructor(public name: string,public ages: number){

    }
}
const Dud = new Persons('Niki',67);
console.log(`My name is ${Dud.name}`)

//Example: Simple Object

class Zudo {
    name: string;
    age: number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`This is my ${this.name} and age is ${this.age}`);
    }
}

const person = new Zudo('Seela',38);
console.log(person.name);
person.greet(); 
