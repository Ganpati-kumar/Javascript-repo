 // foreach doesn't return anythink   // we use filter

const  coding = ["js","ruby","java","python","cpp"]
  const value = coding.forEach( (item) => {
    console.log(item);
    return item    // undefined do not return 
})
// console.log(value);
 // ++++++++++++++++++ filter +++++++++++++++
const myNums = [1,2,3,4,5,6,7,8,9,10] 
 const newNums = myNums.filter ( (num) => {
     return num > 4 
 }  )                    // in  {} scope we have to return 

 console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]
   
  
 //  ++++++++++++++++++++  same condition using for each loop ++++++++++ //

  //const newNums = []
  myNums.forEach((num) => {
    if (num > 4){
        newNums.push(num)
    }
    
  })

  console.log(newNums);  // [ 5, 6, 7, 8, 9, 10 ]
  

