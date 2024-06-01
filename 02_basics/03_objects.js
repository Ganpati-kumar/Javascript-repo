// singleton   // it made from constructor   // object .create //is se singleton banta hai

// object literals  // iss se singleton nhi banta hai 
//****************************************** */ 
// object creation  

const JsUser = { 
     name:"Ganpati kumar",    // key value pair  // name as string by complier
     age : 23,
     "full name" : "Ganpati kumar saw",  // ** statement to acess this we use second ways 
     email : "gankjfdncskj.com",
     isLoggedIn:false,
     lastLoginDays : ["Monday","saturday"]
}


//*******************++++++++++ */
// ways to access objects 

 console.log(JsUser.name);  //Ganpati kumar
 // OR ANOTHER ways 
 console.log(JsUser["name"]);
  // Ganpati kumar  // this ways is when we have to acess ** one statement

   //console.log(JsUser.full name);  // error wrong way // not to use " "
  console.log(JsUser["full name"]); // Ganpati kumar saw


//**************************************** */
  // symbol creation  // to reffer symbol use []
  const mySum = Symbol("Key1")
   const user = {
    [mySum] : " mykey1"  // write way to declare // syntax 
   } 
   console.log(user[mySum]);  // mykey1


   // to change value  in objects
   JsUser.name = " Duggu"  // changing name
   console.log(JsUser["name"]); // duggu

   // to make freeze 
   //  Object.freeze(JsUser)  // No  changes will reflect now 
   
   //******************************* */

   // functions

   JsUser.greeting = function () {
    console.log("Happay Birthday Duggu");
   }

   JsUser.greetingTwo = function () {
    console.log(`Hello My Son,${this.name}`);  // string manipulation
   }
   //console.log(JsUser.greeting)  // undefined // [function (anonymous)]
   console.log(JsUser.greeting()); // Happay Birthday Duggu
   console.log(JsUser.greetingTwo()); //Hello My Son, Duggu




