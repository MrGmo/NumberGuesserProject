// // *Variables*
// // Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console

let bob = 'yo'
bob = 'Fourth of July'.toUpperCase()

console.log(bob)

//
// //Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

let sam = 'Austin'
sam = sam.slice(3, sam.length)
alert(sam)
//
//
// // *Functions*
// // Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.


function fiveNums(n1, n2, n3, n4, n5){
  alert(Math.abs(100 - n1 - n2 - n3 - n4 - n5))
}

fiveNums(1, 1, 1, 1, 100)


// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

function threeNums(n1, n2, n3){
  let low = Math.min(n1, n2, n3)
  let high = Math.max(n1, n2, n3)
  console.log(low, high)
}

threeNums(1, 2, 3)



// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

function coinFlip(){
  let random = Math.random()
  if(random > 0.5){
    return ('Tails')
  }else{
    return ('Heads')
  }
}

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

function bigStack(num){
  for(let i = 1; i <= num; i++){
    let result = coinFlip()
    console.log(result)
  }
}

bigStack(5)
