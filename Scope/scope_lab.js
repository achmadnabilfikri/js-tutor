// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"


//block scope
console.log(blockVar);
//console.log(blockLet);


function show(){
    var functionVar = "im a blocked scope var"
    let functionLet = "im a blocked scope let"
    const functionConst = "im ablock scope const"
}
show()

//console.log(functionVar)
//console.log(functionLet)
//console.log(functionLet)