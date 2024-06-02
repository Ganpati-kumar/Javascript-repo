// this keyword specifies current context // works only inside objects
const user = {
    username : "ganpati",
    price : 999,
    welcomeMessage : function () {
        console.log(`${this.username}, welcome to my website`);
    }
} 
 //user.welcomeMessage() // ganpati, welcome to my website
 user.username= "Duggu"
 //user.welcomeMessage()  //Duggu, welcome to my website

// ++++++++++++++++++++++++++++//// this  do not work inside function // +++++++++
// function hello () {
//     let username = "ganpati"
//     console.log(this.username); // undefined
// }
// hello()

//++++++++++++++++++++++ Arrow function  +++++++++++++++++++// 

// syntax  () => {}
const addTwo = (num1,num2) => {   // basic syntax // explicitle return
    return num1 + num2
}
console.log(addTwo(3,4)); // 7

 // or another way implicit 
                        //{} isme return keyword likna padega or agr () me likhe ,, no need to return
 const addone = (num1,num2) => (num1 +num2) 
 const addone2 = (num1,num2) => ({username : "ganpati"})  // object return({})
 console.log(addone(6,7)); // 13
 console.log(addone2(3,4));  // 7 //{ username: 'ganpati' }





