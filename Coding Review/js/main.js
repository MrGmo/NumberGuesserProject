// *Variables*
// Declare a variable and assign it to a sentance that is a positive affirmation. Print the affirmation to the console multiple times using a method


let funky = 'You are NOT a donkey'
console.log(`Again: ${funky.repeat(30)}`)

// Declare a variable, assign it an array of letters, combine the letters into one word, and alert it

let arr = ['G', 'R', 'E', 'A', 'T']
let bobo = arr.join('')
alert(bobo)

//
// *Functions*
// Create a function that returns rock, paper, lizard, spock or scissors as randomly as possible

function spock(){
  let maf = Math.random()
  if(maf > 0.8){
    return 'rock'
  }else if(maf > 0.6){
      return 'paper'
  }else if(maf > 0.4){
      return 'lizard'
  }else if(maf > 0.2){
      return 'spock'
  }else{
      return 'scissors'
  }
}


// *Conditionals*
// Create a function that takes in a choice (rock, paper, scissors, lizard, or spock) and determines if they won a game of rock paper scissors against a bot using the above function

function game(brb){
  let games = spock()

  if(games === brb){
    console.log('DRAW')
  }else if(games === 'scissors' && brb === 'paper' || games === 'paper' && brb === 'rock' || games === 'rock' && brb === 'scissors' || games === 'lizard' && brb === 'scissors'){
    console.log('You LOST!')
  }else{
    console.log('You WON!')
  }
}

game('rock')
