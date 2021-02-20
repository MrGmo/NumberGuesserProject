//Create a button that adds 1 to a botScore stored in localStorage

if(!localStorage.getItem('botScore')){
  localStorage.setItem('botScore', 0)
}

document.querySelector('button').addEventListener('click', addOne)

function addOne(){
  let totalPoints = Number(localStorage.getItem('botScore'))
  let addPoint = totalPoints + 1
  localStorage.setItem('botScore', addPoint)
  document.querySelector('h2').innerText = addPoint
}
