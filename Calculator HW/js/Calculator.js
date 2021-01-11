document.querySelector('#plus').addEventListener('click', plus)
document.querySelector('.minus').addEventListener('click', minus)
document.querySelector('.divide').addEventListener('click', divide)
document.querySelector('.multiply').addEventListener('click', multiply)

function plus(){
  const num1 = Number(document.querySelector('#inOne').value)
  const num2 = Number(document.querySelector('#inTwo').value)
  const sum = num1 + num2
  return document.querySelector('.answer').innerText = sum
}

function minus(){
  const num1 = Number(document.querySelector('#inOne').value)
  const num2 = Number(document.querySelector('#inTwo').value)
  const sum = num1 - num2
  return document.querySelector('.answer').innerText = sum
}

function divide(){
  const num1 = Number(document.querySelector('#inOne').value)
  const num2 = Number(document.querySelector('#inTwo').value)
  const sum = num1 / num2
  return document.querySelector('.answer').innerText = sum
}

function multiply(){
  const num1 = Number(document.querySelector('#inOne').value)
  const num2 = Number(document.querySelector('#inTwo').value)
  const sum = num1 * num2
  return document.querySelector('.answer').innerText = sum
}
