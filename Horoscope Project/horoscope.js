document.querySelector('#button').addEventListener('click', horoscope)
const selectMonth = document.querySelector('#Month')
const selectDay = document.querySelector('#Day')

// Incomplete, follow the same pattern for the rest of the dates

function horoscope() {
  const month = selectMonth.value
  const day = Number(selectDay.value)
if(month === "December" && day >= 22 || month === "January" && day <= 19){
  return document.querySelector('.answer').innerText = 'Capricorn'
}else if(month === "January" && day >= 20 || month === "February" && day <= 18){
  return document.querySelector('.answer').innerText = 'Aquarius'
}else if(month === "February" && day >= 19 || month === "March" && day <= 20){
  return document.querySelector('.answer').innerText = 'Pisces'
}else if(month === "March" && day >= 21 || month === "April" && day <= 19){
  return document.querySelector('.answer').innerText = 'Aries'
}else if(month === "" && day >=  || month === "" && day <= ){
  return document.querySelector('.answer').innerText = ''
}else if(month === "" && day >=  || month === "" && day <= ){
  return document.querySelector('.answer').innerText = ''
}else if(month === "" && day >=  || month === "" && day <= ){
  return document.querySelector('.answer').innerText = ''
}else if(month === "" && day >=  || month === "" && day <= ){
  return document.querySelector('.answer').innerText = ''
}else if(month === "" && day >=  || month === "" && day <= ){
  return document.querySelector('.answer').innerText = ''
}else if(month === "" && day >=  || month === "" && day <= ){
  return document.querySelector('.answer').innerText = ''
}else if(month === "" && day >=  || month === "" && day <= ){
  return document.querySelector('.answer').innerText = ''
}else{
  return document.querySelector('.answer').innerText = 'Sagittarius'
}
}
