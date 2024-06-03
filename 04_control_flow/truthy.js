// truthy falsy value
 


//+++++++++++++++++ falsy value +++++++++++++++++++++++++ 
// false , 0, -0  , BigInt 0n, " ", null,undefined,NaN
 // ++++++++++++++++truthy value +++++++++++++
  // "0", 'false', '', [] , {} , function () {}


// object in if 

// const emptyobj = {}
// if (Object.keys(emptyobj).length === 0)  {
//     console.log("objects is empty");
// }

// ++++++++++++++++++  Nullish Coalescing Operator(??) : null undefined

// let val1 ;
// val1 = 5  ?? 10 // 5
// val1 = null  ?? 10 // 10
// val1 = undefined  ?? 15 // 15
// console.log(val1); 

//+++++++++++++++++Ternary operator +++++++++++++++++++++++++//
// condition ? true : false       // syntax
const iceprice = 100 
iceprice >= 80 ? console.log("less than 80") : console.log("more");;