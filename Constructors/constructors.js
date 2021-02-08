//Person Constructors

function Person(name, dob){
  this.name = name;
  // this.age = 30;
  this.birthday = new Date(dob)
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }
}


// const mike = new Person('Mike', 36)
// const john = new Person('John', 30)
//
// console.log(john.age)

const mike = new Person('Mike', '09/02/1988')


console.log(mike.calculateAge())
