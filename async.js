//USE of setTimeout
/*
setTimeout(()=>{
 console.log("setTimeout loaded");
},5000);

console.log("one")
console.log("two")
setTimeout( sumit, 2000)

function sumit() {
 console.log("sumit")
}
console.log("three")
console.log("four")

*/

//callBack Function
/*
function sum(a,b){
 console.log(a+b);
}
function calculator(x, y sum){
sum(x,y)
}
calculator(1,2 ,sum)

function calculator(a, b, sum) {
 sum(a, b); // Calls the passed function with arguments a and b
}

calculator(1, 2, (x, y) => {
 console.log(x + y); // Logs the sum of a and b
});
*/

//PROMISE

// let promise = new Promise((resolve, reject) => {
//  console.log("i am promised")
//  resolve("success")
//  // reject("error")
// })


// const myPromise = new Promise((resolve, reject) => {
//  let success = true; // Change this to `false` to test the reject path.
//
//  if (success) {
//   resolve("I promise to always give my best effort!");
//  } else {
//   reject("I couldn't fulfill my promise this time.");
//  }
// });
//
// // Using the promise
// myPromise
//     .then((message) => {
//      console.log("Promise fulfilled: " + message);
//     })
//     .catch((error) => {
//      console.log("Promise rejected: " + error);
//     });

// const myPromise = new Promise((resolve, reject) => {
//  setTimeout(() => {
//   let success = true; // Change to `false` to test the reject path.
//
//   if (success) {
//    resolve("I promise to always give my best effort!");
//   } else {
//    reject("I couldn't fulfill my promise this time.");
//   }
//  }, 2000); // Simulates a 2-second delay
// });
//
// // Using the promise
// myPromise
//     .then((message) => {
//      console.log("Promise fulfilled: " + message);
//     })
//     .catch((error) => {
//      console.log("Promise rejected: " + error);
//     });

//promises
// const getPromise = ()=>{
//     return new Promise((resolve, reject)=>{
//         console.log("i am promises");
//
//     })
// }
//
// let promise = getPromise()
// promise.then(res=>{
//     console.log("promise fulfilled",res);
// })
// promise.catch(err=>{
//     console.log("rejected",err)
// })


//promise chain normal
// function asyncFunc(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some data1")
//             resolve("success")
//
//         },2000);
//     });
// }
//
// console.log("fetching data1")
// let p1 = asyncFunc();
// p1.then((res) => {
//     console.log(res)
// })

//promise chain (insted of callback)
//
// function asyncFunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some data1")
//             resolve("success")
//
//         },3000);
//     });
// }
// function asyncFunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some data2")
//             resolve("success")
//
//         },3000);
//     });
// }
//
//
// console.log("fetching data1")
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log("fetching data2")
//    let  p2 = asyncFunc2();
//     p2.then((res) => {
//
//     })
// })

// console.log("fetching data1..")
// asyncFunc1().then(res=>{
//     console.log("fetching data2...");
//     asyncFunc2().then(res=>{})
// })


//use promises
// function getData(dataid){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataid);
//             resolve("success")
//         },3000);
//     })
// }

//promise chain
// getData(1).then((res) => {
//     console.log(res);
//     getData(2).then((res) => {
//         console.log(res);
//     })
// })
//more modified
// getData(1)
//     .then((res)=>{
//         return getData(2);
//
//     })
//         .then((res)=>{
//             return getData(3);
//         })
//             .then((res)=>{
//                 return getData(4);
//             })
//                 .then((res)=>{
//                     console.log(res);
//                 })

//Async await
//
//  function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("weather data");
//             resolve(200);
//         },2000);
//     })
// }
// async function getWeatherData(){
//     await api();
//     await api();
// }

function getData(dataid){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataid);
            resolve("success")
        },3000);
    })
}

async function getAllData(){
    await  getData(1)
    await  getData(2)
    await  getData(3)
}