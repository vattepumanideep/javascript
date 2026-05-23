let colorCode=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']

let display=document.getElementById("display")
let code=document.getElementById("code")

let currentColor=""

const changeColor = () => {
    let randColor="#"
    for(let i=0;i<6;i++){
        let randNumber=Math.floor(Math.random()*16)
        randColor+=colorCode[randNumber]
    }
    currentColor=randColor
    display.style.backgroundColor = randColor
    console.log(randColor);
    code.innerText=` Your randomly generated color is ${randColor}`
}
const copyColorCode = () => {
    navigator.clipboard.writeText(currentColor)

    alert("Color code copied!")
}