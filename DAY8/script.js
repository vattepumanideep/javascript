// function myfun() {
//     console.log(3);
// }

// try{
//     console.log(y);   
// }catch(err){
//     console.log(err.name);
    
// }
// console.log("Hello");


// setTimeout(myfun,2000)
// setInterval(myfun,2000)
// clearInterval()


// fetch('https://dog.ceo/api/breeds/image/random')
// .then((res) => res.json())
// .then((data) => console.log(data.status)
// .catch(err => console.log(err)
// )
// )

let display =document.getElementById("display")

const changeImage = async () => {
    try{
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json()
        display.style.backgroundImage = `url(${data.message})`
    } catch(err){
        console.log(err);
        
    }
}