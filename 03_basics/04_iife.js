// Immediately Invoked Function Expression(IIFE)

(function One () {                     // named IIFE
    console.log(`db connected`);      
}) (); // to end the iife life cycle use ;

// basically () => function defination  () calling

//  to prevent global scope polution  ,, so we use IIFE

( () => {
    console.log(`db connesdf `);
} )() 
 // to pass variable

 ( (name) => {                       // UNNAMED IIFE
    console.log(`db connesdf ${name}`);
} )("ganpati") 
