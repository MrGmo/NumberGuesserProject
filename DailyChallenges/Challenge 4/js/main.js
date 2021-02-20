
// Please create a function that takes in the name of a person. This function should add this person to a names list and let them know their position on the list. The names list should be created outside of the function.



let bigList = ['James', 'Karen', 'Mike', 'Sara']

function personName(bozo){
  bigList.push(bozo)
  console.log(`${bozo} you are #${bigList.length} in the array`)
}

personName('Willy')
