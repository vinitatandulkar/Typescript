// A new type is created
type type_alias = number | string | boolean;

// Variable is declared of the new type created
let variable: type_alias;

variable = 1
console.log(variable);
variable = "Vinita Tandulkar";
console.log(variable);
variable = true
console.log(variable);

//Example 2: Implementing type alias in a function.

type anotherType = number | string;

let variables:string;

function displayId(id: anotherType){
    if(typeof id === typeof variable){
        return "my id is : " + id;
    }
    return "my Id is = " + `${id.toString()}`
}

console.log(displayId("Vinita"));
console.log(displayId(2345));

//Example 3: String literals as type alias.

type othertype = "Yes" | "no"
let variab: othertype;

variab = "Yes"; //NotError
console.log(variab);
//variab = "Neither"; //Error
//console.log(variab);

// Interface for Array
interface ForList {
    [index:number]:string
}
let newArrays: ForList = ["Vinita","Tandulkar","Software Engineer"];
console.log(newArrays);

//Example of TypeScript Interface:

// Interface for Function
interface ForFunc {
    (key:string,value?:string):void
}

function Pri(key:string,value:string):void{
    console.log(`${key}`+" for "+ `${value}`)
}
let newFunc: ForFunc = Pri;
newFunc("Interface","Function")

// Interface for Class
// Interface for Class
interface ForClass {
    readonly var1:string;               
}
interface ForLists extends ForClass{
    var2:string;
    var3:string; 
}
let newclass: ForLists = {
    var1: "Interface", 
    var2: "for", 
    var3: "Array"
};

console.log(newclass);


// Example of Interface

interface ForFunct {
    (key: string, value?: string): void;
}

function printInfo(key: string, value: string): void {
    console.log(`${key} for ${value}`);
}

const newFunct: ForFunct = printInfo;
newFunct("Interface", "Function");

