// Variable is declared of the new type created
var variable;
variable = 1;
console.log(variable);
variable = "Vinita Tandulkar";
console.log(variable);
variable = true;
console.log(variable);
var variables;
function displayId(id) {
    if (typeof id === typeof variable) {
        return "my id is : " + id;
    }
    return "my Id is = " + "".concat(id.toString());
}
console.log(displayId("Vinita"));
console.log(displayId(2345));
var variab;
variab = "Yes"; //NotError
console.log(variab);
var newArrays = ["Vinita", "Tandulkar", "Software Engineer"];
console.log(newArrays);
function Pri(key, value) {
    console.log("".concat(key) + " for " + "".concat(value));
}
var newFunc = Pri;
newFunc("Interface", "Function");
var newclass = {
    var1: "Interface",
    var2: "for",
    var3: "Array"
};
console.log(newclass);
function printInfo(key, value) {
    console.log("".concat(key, " for ").concat(value));
}
var newFunct = printInfo;
newFunct("Interface", "Function");
