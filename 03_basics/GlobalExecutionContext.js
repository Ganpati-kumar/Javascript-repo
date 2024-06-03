// Javascript Execution Context 
//  {} -> Global execution => this
     // -> Function execution context
     // -> eval execution context
   
 // {} - >   Memory creation phase 
 //    -> execution phase 

 //++++++++++++++++++++++++++//
 // suppose we have code 
        //  let val1 = 10
        //  let val2 = 5
       //  function addNum(num1,num2){
         //     let total = num1 + num2
      //     return total 
       //  }
       //  let result1 = addNum(val1,val2)
       //  console.log(result1);
      //  let result2 = addNum(10,3)
     //  console.log(result2);
     
   //++++++++++++++++++++++++++ codes flow steps++++++++++++++++++++//
   
    // 1) Global execution -> this
    // 2) Memory phase -> val1 => undefined             // first cycle
                          //val2 => undefined
                          //addNum -> defination
                         // result1 => undefined 
   // 3) Execution Phase
        // val1 <-  10
        // val2 <-  5

       // addNum -->[new variable enviroment + execution thread]  => after process it will delete also
                  // -> 1) Memory phase ->val1=>undefined val2 ->undefined  total => undefined
                     //-> 2) execution context -> num1 -> 10 num2 -> 3 total ->13
                     // total will return to global execution context