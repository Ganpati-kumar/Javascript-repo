// let a= 10;
// const b  = 20;
// var c = 30

 // var failure in scope  // so not to use 

 let a = 300
 var c = 333  //not print value 
if(true) {
    let a = 10
   console.log("Inner", a);    //  Inner 10
    const b = 20
    var c = 305
}

console.log(a); // a is not defined
console.log(b);// b is not defined
console.log(c); // 305   // this is drawback for var use
console.log(a); // 300

//+++++++++++++++++++++++++++++++++++++++++++++++//

//function inside function//
 // clousers // inner function can access outside function as well

function one(){
    const username = "ganpati"
    function two () {
        const website = " youtube"
       console.log(username);

    }

    //console.log(website);// cannot access as out of scope
    
    two() // ganpati
}
one()


// now scope example 

if (true) {
    const username = "ganpati"
    if (username === "ganpati") {
        const website = "youtube"
        console.log(username + website); // ganpatiyoutube
    }
     //console.log(website);  // not accessible 
}
//console.log(username); // not accessible

// +++++++++++++++++ intresting  ++++++++++++++


console.log(addone(34))                  //its oky to use this way
 function addone(num) {
    return num + 1
 }
 

 // another way
// expression

 // console.log(addTwo(334))   // this make errror//  Cannot access 'addTwo' before initialization
 const addTwo = function(num) {
    return num + 2
 }
   console.log(addTwo(334)) // 336