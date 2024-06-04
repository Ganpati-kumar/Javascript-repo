// ++++++++++++++++++++ for of +++++++++++++++++

//["","",""]

// for (const iterator of object) {
    
// }

const arr = [1,2,3,4,5]
for (const num of  arr) {
    console.log(num);
}

const greeting = "Hello world"
for (const greet of greeting) {
    console.log(`Each char is ${greet}`);
}

// ++++++++++++++ Map ++++++++++++++ // holds  unique values
 // ++++++++++++++ Map is not iteratable +++++++++++++++++++
const map = new Map() // map key value pair
map.set('IN',"INDIA")
map.set('Fr' ,"France")
console.log(map); // Map(2) { 'IN' => 'INDIA', 'Fr' => 'France' }

 for (const [key, value] of map) {
    console.log(key, ':-' , value); //IN :- INDIA
                                     // Fr :- France
 }
  // in objects 

//  const muObject = {
//     'game1':'NFS',
//     'game2': ' spiderman'   // for of not working in object // their is another ways
//  }
//  for (const [key , value] of myObject) {
//      console.log(key,vlaue);
//  } 
           // for this we have for in loop ++++++++++