const name = "Ganpati"
const repoCount = 50
//console.log(name + repoCount +"value" ); // past feature 

 //******   New Feature *********/
 //// Called string manipulation
console.log(`Hello my name is ${name} and my total repo is ${repoCount}`);
   

 //*** Anothor way to declare string *****/

  const gameName = new String('ganpatiji')
  // string  Methods 
    console.log(gameName.charAt(2)); // n // display charcter at position
    console.log(gameName.indexOf('t'));  // 5 // display at what position  character present

//  substring
  const newString = gameName.substring(0,4)   //ignore negative value
  console.log(newString);                 //ganp
   
// slicing 
   const anotherString = gameName.slice(-8,4) // accept -ve value
   console.log(anotherString);             //anp

// trim 
 const newString2  = "     ganpati   ";  // it take space as well
 console.log(newString2);                //     ganpati 
 console.log(newString2.trim());         // no space //ganpati 

  