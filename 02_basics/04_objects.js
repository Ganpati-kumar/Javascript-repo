// ways 
// const tinderUser = new Object()
// const tinderUser1 = {}  //both are same

const tinderUser = {}
tinderUser.id = "123sfgrs"
tinderUser.name = "Misti"
tinderUser.isLogged = false
//console.log(tinderUser); // { id: '123sfgrs', name: 'Misti', isLogged: false }


// object inside objects

const regularUser = {
    email : "sdfsagdgfv",
    fullname : {
        Userfullname : {
            firstname : " Ganpati",
            lastname : "saw"
        }
    }
}
 //console.log(regularUser.fullname.Userfullname.firstname); //  Ganpati

  // combine object 

  const obj1 = {1:"a",2:"b"}
  const obj2 = {3:"a",4:"b"}
 //const obj3 = {obj1,obj2}
 // console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '1': 'a', '2': 'b' } }
//// object inside object 

 // to use another one // object.assign() to merge two objects

      const obj3 = Object.assign({},obj1,obj2) //  {}optional parameter good to use 
     // console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
       const  obj4 = Object.assign(obj1,obj2)
      
      //console.log(obj4);

// another one is spread wala ... wala
  /// always use in project as well as daily life
const obj5 = {...obj1,...obj2}
//console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' } 
 //******************************** */

  // Destructering of objects
 
  const course = {
     coursename : "js repo",
     price : "0000",
     courseInstructor : "ganpati"
  }

  //console.log( course.courseInstructor )  //ganpati

  const {courseInstructor: Instructor} = course // destructering
  console.log(Instructor); // ganpati

//**************************888 */
 // json  // it js object notation

//  {
//     "name" : "ganpati"
//     "coursenmame" :"dsfgvds",
//     "price" : "free"
//  }