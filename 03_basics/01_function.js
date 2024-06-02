 //  function defination

function sayMyName() {   // syntax of function
    console.log("G");
    console.log("A");
    console.log("N");
    console.log("P");
    console.log("A");
    console.log("T");
    console.log("I");
}

// function reference

 //sayMyName ()  // execution of function

function  addTwoNumber (num1 , num2) {  // parameter 
    console.log(num1 + num2);
}

//addTwoNumber(3 , 4) // 7   // arguments

function  addTwoNumber1 (num1 , num2) {  // parameter 
    let result = num1 + num2

    // return num1 + num2 or another way
    return result /// after return no any con sole work inside function
}
const result = addTwoNumber1(5,5) // 10
//console.log(result);

//************************************ */


function loginUserMessage (username)  {
    return `${username} just logged in `
}
 //console.log(loginUserMessage("Ganpati")) //Ganpati just logged in 

 //+++++++++++++++++++++++++++++++++++++++++//
    // rest operator ... // also known as spread operator  
 // in function how we pass multiple value inside a function use rest operator...
  function calculateCarPrice( ...num1){
    return num1
  }
 //console.log(calculateCarPrice(200));  // 200 for single one value

 //console.log(calculateCarPrice(300,233,422)); // [ 300, 233, 422 ] // for multiple use ... rest operator
 
 //+++++++++++++++++++++++++++++++

 //to pass  objects  inside a function 

 const user = {
    username : "Ganpati",
    price : 23133
 }

 function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
 }

 handleObject(user)// username is Ganpati and price is 23133


 // to pass array in function

 const myNewArray = [200.330,100,600]
 function returnValue (getArray) {
    return getArray[1]
 }
 console.log(returnValue(myNewArray)); // 100