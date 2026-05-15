


function myfun(num1,num2) {
    return num1+num2
    
}
console.log(myfun(2,3));

function myfun(num1,num2) {
    return num1-num2
}

function myfun(num1,num2) {
    return num1*num2
}

function myfun(num1,num2) {
    return num1**num2
}


let num1=10;
let num2=20;
let op="*"

switch (op) {
    case "+":
        console.log(num1+num2);
        break
    case "-":
        console.log(num1-num2);
        break
        
    case "*":
        console.log(num1*num2);
        break
    
    case "**":
        console.log(num1**num2);
        break
        
    default:
        console.log("invalid input");
        
        break;
}

// function myfun() {
//     "declaration function"
// }


// const fun = function(num1,num2){
//     return num1+num2
// }

// const fun = (num1,num2) => {
//     return num1+num2
// }

const fun = (num1,num2) => num1+num2

console.log(fun(1,1));
