// if statement

// if (condition) {

// }

if ( 2 == " 2") {
    console.log("executed");    // run 
}
// === checked datatype also 

if ( 2 === "2") {
    console.log("executed");    // not equal
}
console.log("not equal");

//+=========================== if else=======================//
 const temperature = 42
 
 if (temperature === 41){
    console.log("less than current temperature");
 } else {
    console.log(" greater");
 }

const score = 200
if ( score > 100){
    const power = " fly"   // if we use var then their scope is global .,,this is not good
    console.log(`user power ${power}`);  // user power  fly
}
console.log(`user power ${power}`); //  power is not defined // outside the scope

// implicit scope ++++++++++++++++++++++++
const balance = 1000
if (balance > 500) console.log("test"); // test
 
//++++++++++++++++++++ if else and else if+++++++++

if ( balance < 500) {
    console.log("less");
} else if ( balance < 750) {
    console.log("less than 750");
}  else if ( balance < 950) {
    console.log("less than 950");
} else {
    console.log("less than 1000"); // less than 1000
}

