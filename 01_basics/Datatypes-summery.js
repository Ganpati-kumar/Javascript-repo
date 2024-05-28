// Primitive 
 // types : String, Number, Boolean,null,undefined, Symbol , BigInt 

const bigNumber = 3142532625n // n use for big int 


 // Reference (Non primitive)
   types: Array, Object , Function

   const hero = [" ganpati","hjdj" , "sdfss"] ; // arrays

   let myObj = {                  // objects
        name: "ganpati",   
        age:23
   }

   const myFunction = function(){              // function
    console.log("Hello Duggu");
   }
   


   //to know datatype - use typeof function

   console.log(typeof bigNumber);// bigint
   // undefined -  undefined
   // Null -        object



   ///*********** **************************************** */

// Memory => Stack (primitive)  and Heap (Non primitive)


let myProfileName = " ganpatidotcom"

let anothername = myProfileName

anothername = " Ganpatiji"

console.log(myProfileName ); // ganpatidotcom

console.log(anothername );  // Ganpatiji 

let userOne = { 
     email: "sdsgv@1232"
   
}
let usertwo = userOne
                             // changes in heap memory reflect on both one
usertwo.email = " ganpati@1223"
console.log(userOne.email);    // ganpati@1223
console.log(usertwo.email);      // ganpati@1223
     

 

