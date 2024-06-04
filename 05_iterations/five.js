 const coding = ["js","cpp","java", "ds"]
coding.forEach(   function  (item) {
   console.log(item); // js cpp java ds
})      //  callback have no function name

// ++++++++++ using arrrow  function ++++++++
  coding.forEach( (value) => {
    console.log(value); // js cpp java ds
  })

  function printMe(item) {
    console.log(item);
  }
  coding.forEach(printMe); //// js cpp java ds

 // +++++++++++++++++++++++++++////
 
 const myCoding = [
     {
          languageName : "javascript",
          languageFileName: "js"
      },
      {
        languageName : "java",
        languageFileName: "java"
    },
    {
        languageName : "python",
        languageFileName: "py"
    }
]  
myCoding.forEach(   (item) => {
    console.log(item.languageName);
})