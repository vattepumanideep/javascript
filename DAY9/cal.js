function add(num1,num2) {
    return num1+num2
}

function sub(num1,num2) {
    return num1-num2
}

const mul = (num1,num2) => num1*num2

const div = (num1,num2) => num1/num2

const power = (num1,num2) => num1**num2

export default add

export {sub,mul,div,power}