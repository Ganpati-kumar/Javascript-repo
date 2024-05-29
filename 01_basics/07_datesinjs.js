 // Dates  represents a single moment in time //
 // since the midnight at the beginning of January1,1970,UTC//
  
 //  Date is objects in javascript 
 


 let myDate = new Date()
 console.log(myDate); //2024-05-29T17:27:58.412Z

 console.log(typeof myDate); // object
  
 console.log(myDate.toDateString()); // Wed May 29 2024
 console.log(myDate.toISOString()); //2024-05-29T17:29:47.836Z
 console.log(myDate.toLocaleString()); //5/29/2024, 5:29:47 PM
 
 // month start with 0 in js  0 => january

 let muCreatedDate = new Date(2023,0,23)

 console.log(muCreatedDate); //2023-01-23T00:00:00.000Z

 console.log(muCreatedDate.toDateString()); // Mon Jan 23 2023

 let myTimestamp = Date.now()
 console.log(myTimestamp); // 1717004646993
 console.log(muCreatedDate.getTime()); //1674432000000 in millisecond
 console.log(Math.floor(Date.now()/1000)); //1717004896 //// to convert millisecond to second in round value 
 

 ///+++++++++++++++++++  some Date method ++++++++++++++//
 let newDate = new Date ()
 console.log(newDate); //2024-05-29T17:51:26.557Z
  
 console.log(newDate.getMonth()); // 4
 console.log(newDate.getDay()); // 3

 newDate.toLocaleString('default',{
    weekday: "long",
    
 })