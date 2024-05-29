///**************Number */

const score = 400
console.log(score);  // 400

// Explicitly
const balence = new Number (100)
console.log(balence);   // [Number: 100]


// Another methods   //************* */

console.log(balence.toString().length); // 100 // 3
console.log(balence.toFixed(2));       // 100.00   // used in projects

 
const otherName2 = 23.3435
const otherName3 = 123.893435
console.log(otherName2.toPrecision(3));  // 23.3
console.log(otherName3.toPrecision(3));  //124

const hundreds = 1000000
const hundreds2 = 1000000000
console.log(hundreds.toLocaleString('en-IN'));  // 10,00,000 in indian values
console.log(hundreds.toLocaleString()); //1,000,000 in American values
 
//****************** Maths +++++++++++++++++*/

console.log(Math);   // Object [Math] {}
console.log(Math.abs(-4)); // 4

console.log(Math.round(4.6)); // 5
 
console.log(Math.ceil(4.2)); // 5 //  takes upper value 

console.log(Math.floor(4.6)); // 4  // takes lower value

console.log(Math.min(4,5,6,7,8)); // 4
console.log(Math.max(4,5,6,7,8)); // 8

 //++++++++++ Random Value  lies between 0 to 1 only +++++++++//

console.log(Math.random()); // 0.44937870141784697

console.log((Math.random()*10)+1);   // 4.63547874691216
console.log(Math.floor(Math.random()*10)+1); // 5


//////////////+++++++++ Another Ways ++++++++++++// 
   
   const min = 10;
   const max = 20;
    
    console.log(Math.floor(Math.random()*(max - min + 1))) + min;  // 6
