const myObject = {
    js : "javascript",
    cpp: "c++ ",
    rb : "ruby",
    swift : "swift by apple"
}
for (const key in myObject) {
   // console.log(key); //js cpp   rb swift
    console.log(`${key} shortcut for ${myObject[key]}`);  // js shortcut for javascript
                                                         //cpp shortcut for c++ 
                                                         // rb shortcut for ruby
                                                        //swift shortcut for swift by apple
  
     
}

const programming =["js","rb","cpp","java"]
for (const key in programming) {
     //console.log(key); // 0 1 2 3
     console.log(programming[key]); // js rb cpp java
}