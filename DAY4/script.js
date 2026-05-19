

// let arr = [10,412.123,"hello",true]

// console.log(arr);
// arr.push(30)
// arr.pop()

// arr.unshift(30)
// arr.shift()

// console.log(arr.length);
// console.log(arr);

// let obj = {
//     id: 1,
//     name: "Mani",
//     age: 23,
//     salary: 200000,
//     techstack: ["Python","HTML","CSS","Javascript"]
// }

// console.log(obj.techstack[2]);
// console.log(obj.techstack[3]);
// console.log(obj.techstack);
// console.log(obj.name);
// console.log(obj.salary);

// let data = [
//     {
//         id: 1,
//         name: "Praveen",
//         age: 23,
//         salary: 230000
//     },
//     {
//         id: 2,
//         name: "Yash",
//         age: 23,
//         salary: 260000
//     }
// ]

// console.log(data[0].salary);
// console.log(data[1].salary);
// console.log(data[0].name);
// console.log(data[1].name);
// console.log(data[0].id);
// console.log(data[1].id);
// console.log(data[0].age);
// console.log(data[1].age);


let arr = ["mani","praveen","yash","tauseef","shan"]

// for (var i=0 ; i<5 ; i++){
//     console.log(arr[i]);
// }

arr.push(20)
arr.pop()
arr.splice(2,3,10,20)
console.log(arr);

let object =[ {
    brand: "INFINIX",
    model: "GT 20 pro",
    price: 26000
},
{
    brand: "APPLE",
    model: "20 pro",
    price: 266000

}
]
// console.log(obj.brand,obj.model,obj.price);


for (i of object){
    for(j in i){
        console.log(i[j])
    }
}











