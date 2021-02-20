document.querySelector('#button').addEventListener('click', horoscope)
const selectMonth = document.querySelector('#Month')
const selectDay = document.querySelector('#Day')

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
}else if(month === "April" && day >= 20 || month === "May" && day <= 20){
  return document.querySelector('.answer').innerText = 'Taurus'
}else if(month === "May" && day >= 21 || month === "June" && day <= 20){
  return document.querySelector('.answer').innerText = 'Gemini'
}else if(month === "June" && day >= 21 || month === "July" && day <= 22){
  return document.querySelector('.answer').innerText = 'Cancer'
}else if(month === "July" && day >= 23 || month === "August" && day <= 22){
  return document.querySelector('.answer').innerText = 'Leo'
}else if(month === "August" && day >= 23 || month === "September" && day <= 22){
  return document.querySelector('.answer').innerText = 'Virgo'
}else if(month === "September" && day >= 23 || month === "October" && day <= 22){
  return document.querySelector('.answer').innerText = 'Libra'
}else if(month === "October" && day >= 23 || month === "November" && day <= 21){
  return document.querySelector('.answer').innerText = 'Scorpio'
}else{
  return document.querySelector('.answer').innerText = 'Sagittarius'
  }
}
