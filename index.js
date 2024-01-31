function flavorCount () {
 // Take a string user input separated by commas   
    const orderInput = prompt('Enter list of flavor separated by commas:');

// split string into array string
    const flavorList = orderInput.split(",");   
    console.log(flavorList)

    // count helper object
    let flavorCount = {}

    for (let i = 0; i < flavorList.length; i++) {
         let flavor = flavorList[i]
         console.log(flavor)
    }





}
flavorCount()
// Take a string user input separated by commas


// console.log(flavorList)

// flavorSum = 0;


//     // itarate through array of flavor
// for (const item = 0; item <= flavorList.length; item++) {
//     flavorSum += flavorList[item]
// }



// function froyoCount (flavorSum) {

//     let van = 0
//     let straw = 0
//     let cof = 0
//     // check how many time an item appear in a list and record insde a variable
//     for (const type of flavorSum) {
//         // if (flavorSum.filter((flavorSum) => flavorSum.length[i] === 'vanilla') &&  flavorSum.filter((flavorSum) => flavorSum === 'strawberry') && flavorSum.filter((flavorSum) => flavorSum === 'coffee')) {
//         //     let vanilla = 
//         // }
//         // const flavorType  = {}


//         // van = flavorSum.filter((flavorSum) => flavorSum.length[i] === 'vanilla')
//         // straw = flavorSum.filter((flavorSum) => flavorSum.length[i] === 'strawberry')
//         // cof = flavorSum.filter((flavorSum) => flavorSum.length[i] === 'coffee')

//     }

//     return 

// }

// const flavorcount  = {};

// // object referencing array of flavor
// // const flavorType  = {}


// // console.log(flavor)

// // assigning values from froyo object to orderList
// orderList = Object.values(froyo);
// orderSum = 0;

// // for (const flavor in orderList) {
// //     order += 
// // }


