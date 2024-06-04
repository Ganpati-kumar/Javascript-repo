 // map  is a callback function // automatically return value

const myNumber = [1,2,3,4,5,6,7,8,9,10]
  const newNums = myNumber.map( (num) => num + 10)
 console.log(newNums);              // {} need to  write return 

 // chainning 

const newNums2 = myNumber
                .map ( (num) => num*10)
                 .map( ( num ) => num + 1)
                 .filter((num)=> num >=40)

                 console.log(newNums2);
