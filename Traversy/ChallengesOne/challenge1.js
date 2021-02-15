
// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

// Solution 1
// function reverseString(str) {
//   return str
        // .split('')
        // .reverse()
        // .join('')
// }

// Solution 2
// function reverseString(str){
//   let newStr = ''
//   for(let i = str.length-1; i >= 0; i--){
//     newStr+= str[i]
//   }
//     return newStr
// }

// Solution 3
// function reverseString(str){
//   let newStr = ''
//   for(let i = 0; i <= str.length-1; i++){
//     newStr = str[i] + newStr
//   }
//     return newStr
// }

// Solution 4
// function reverseString(str){
// let revString = ''
// for(let x of str){
//   revString = x + revString
//   }
// return revString
// }

// Solution 5
// function reverseString(str){
//   let revString = ''
//   str.split('').forEach(x => revString = x + revString)
//   return revString
// }

// Solution 6
// function reverseString(str){
//   return str.split('').reduce((a, b) => b + a, '')
// }
//
// console.log(reverseString('HELLO'))


// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

// Solution 1
// function isPalindrome(str){
//   return str.split('').reverse().join('') === str
// }

// console.log(isPalindrome('racecar'))


// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

// Solution 1
// function reverseInt(int) {
//   let string = int.toString().split('').reverse().join('')
//   return parseInt(string)
// }
//
// console.log(reverseInt(123))


// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

// Solution 1
// function capitalizeLetters(str){
//   const strArr = str.toLowerCase().split(' ')
//   for(let i = 0; i < strArr.length; i++){
//     strArr[i]=strArr[i].substring(0,1).toUpperCase() + strArr[i].substring(1)
//   }
//   return strArr.join(' ')
// }


// Solution 2
// function capitalizeLetters(str) {
//   return str.split(' ').map(x => x[0].toUpperCase() + x.substring(1)).join(' ')
// }
//
// console.log(capitalizeLetters('i love javascript'))

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
// function maxCharacter(str) {}



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
// function fizzBuzz() {}
