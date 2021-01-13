// Create a function that takes in an array. The function should console.log() the sum of the first value in the array and the last value in the array.


function sumTwo(array){
  let sum  = array[0] + array.pop()
  console.log(sum)
}

sumTwo([1, 2, 3, 4])


// or
//
// function sumTwo(array){
//   console.log(array[0] + array.pop())
// }
//
// sumTwo([1, 2, 3, 4, 5, 6])
