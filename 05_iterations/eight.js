// ++++++++++++++++++++ reduce()  +++++++++++++++++//

 const myNums = [1,2,3]
 const myTotal = myNums.reduce(  function (acc,currval){
    console.log(`acc : ${acc} and currval : ${currval}`);
    return acc + currval  }, 0) 
  
 console.log(myTotal); // 6

 // ++++++++++ in arrow function ++++++++++++

 const myTotal1 = myNums.reduce( (acc,currval) => acc+currval, 0)
 console.log(myTotal1); // 6

 const shopingcart = [
     {
           itemName : " java developer",
           price : 12999
     },
     {
        itemName : " PYthon developer",
        price : 2999
     },
     {
        itemName : " cpp developer",
        price : 1999
  },
] 

// to add price of all 

  const totalprice =shopingcart.reduce( (acc , item) =>  acc + item.price,0)
console.log(totalprice); // 17997