// Arrays

// Arrays are resizeable in js

// ways to declare arrays in js

const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman","naagraj"]

const myArr2 = new Array(1,2,3,4) // another way 
console.log(myArr[1]);// 1

//Arrays method

// myArr.push(6) // add value in last
// myArr.push(7)
// myArr.pop()  // delete  last value
// console.log(myArr);

// Another method shift and unshift  works same as push pop do

//  myArr.unshift(9)  // add value to front index
//  myArr.shift()     // delete value from first index
// console.log(myArr);

// console.log(myArr.includes(9));  // false // to check value present or not
// console.log(myArr.indexOf(4));  // index = 4
// console.log(myArr.indexOf(9));   // -1 not exist


// const newArr = myArr.join()
// console.log(myArr);   // [ 0, 1, 2, 3, 4, 5 ]
// console.log(newArr);   //  0,1,2,3,4,5

// console.log(typeof newArr); //string

// slice , splice
 console.log("A",myArr);  // A [ 0, 1, 2, 3, 4, 5 ]
 const myn1 = myArr.slice(1,3)
 console.log(myn1);      // [ 1, 2 ]
 console.log("B",myArr)  // B [ 0, 1, 2, 3, 4, 5 ]

 // splice

 const myn2 = myArr.splice(1,3)  
 console.log("C",myArr)   //  C [ 0, 4, 5 ]

 console.log(myn2);   ///   [ 1, 2, 3 ]