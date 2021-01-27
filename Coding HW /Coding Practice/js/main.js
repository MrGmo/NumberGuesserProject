// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question

// let sentence = 'This is a sentence?'
// if(sentence.includes('?')){
//   alert ('string is a question')
// }else{
//   alert ('It is just a sentence')
// }



//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console


// let design = 'I am a jr. dev'
// if(design.includes('jr. dev')){
//   let replace = design.replace('jr. dev','software engineer')
//   console.log(replace)
// }else{
//   console.log('Nothing to replace')
// }


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissors(){
  let random = Math.random()
  if(random > 0.66){
    return 'rock'
  }else if(random < 0.33){
    return 'paper'
  }else{
    return 'scissors'
  }
}


// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function person(personChoice){
 let botChoice = rockPaperScissors()
 if(botChoice === personChoice){
   console.log('Draw')
 }else if(botChoice === 'paper' && personChoice === 'rock' || botChoice === 'rock' && personChoice === 'scissors' || botChoice === 'scissors' && personChoice === 'paper'){
   console.log('You Lost!')
 }else{
   console.log('You Won!')
 }
}


//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.


function rockGame(arr){
  arr.forEach(x => {
    person(x)
  });

}

rockGame(['rock', 'rock', 'paper'])
