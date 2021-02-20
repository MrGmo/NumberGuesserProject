
const user = {
  name: 'John',
  surname: 'Smith'
}
user.name = 'Pete'
delete user.name;
console.log(user)



const obj = {}

function isEmpty(obj){
  for(let key in obj){
    return false;
  }
  return true;
}


let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
}

let sum = 0
for(let key in salaries){
  sum = sum + salaries[key]
}

console.log(sum)

let menu = {
  width: 200,
  height: 300,
  title: 'My Menu',
}

function multiplyNumeric(menu){
  for(let key in menu){
    if(typeof menu[key] == 'number'){
      menu[key] *= 2;
    }
  }
}
