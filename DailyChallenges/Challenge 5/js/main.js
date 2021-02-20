// Please create a function that takes in an array of numbers and returns a new array that only contains odd numbers.
//
// Review our last practice problem from last class if you need some ideas.


function bigStack(arr){
  let odd = arr.filter(function(numz){
    return (numz % 2 !== 0)
  })
  console.log(odd)
}

bigStack([1, 2, 3, 4, 5])
