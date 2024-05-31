 const marvel_heros = ["thor","Ironman","spiderman"]
 const dc_heros = ["superman","flaash", "batman"]

  marvel_heros.push(dc_heros)
  console.log(marvel_heros); // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flaash', 'batman' ] ]

   // concate method

     const allHeros = marvel_heros.concat(dc_heros)
     console.log(allHeros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flaash', 'batman' ]

   // Spread to use instead of concat  // same work
   
   const all_new = [...marvel_heros,...dc_heros]
   console.log(all_new); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flaash', 'batman' ]
 

   // if want to fetch  from the multiple arrays
   // use flat 
    const another_array = [1,2,3,[4,5,6],7,[6,7,8]]

    const real_another_array = another_array.flat(Infinity)
     console.log(real_another_array); //  [1, 2, 3, 4, 5, 6, 7, 6, 7, 8]
   
                                            

     //convert into arrays 
                                
     console.log(Array.isArray("Ganpati")) // false
     console.log(Array.from("Ganpati"))   //['G', 'a', 'n', 'p', 'a', 't','i']

     console.log(Array.from({na,e:"Ganpati"})) // intresting as it give [] empty
       

