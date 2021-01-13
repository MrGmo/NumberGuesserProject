// Create a function that takes in a number and a word. If the length of the word multiplied by the number passed into the function is greater than 100, alert 'Winner'


// function numWord(num, word){
//   let num1 = Number(num)
//   let word1 = Number(word.length)
//   if(num1 * word1 > 100){
//     alert('WINNER')
//   }else{
//     alert('Less than a hundo')
//   }
// }
//
// numWord(10, 'manufacturing')

function numWord(num, word){
  let num1 = Number(num)
  let word1 = Number(word.length)
  num1 * word1 > 100 ? alert('WINNER') : alert('Less than a hundo')
}

numWord(10, 'man')
