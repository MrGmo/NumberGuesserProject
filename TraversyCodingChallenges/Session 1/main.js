// CHALLENGE 1: REVERSE A STRING
// Return an string in reverse
// ex. reverseString('hello') === 'olleh'

// Solution 1
// function reverseString(str){
//   return str
//     .split('')
//     .reverse()
//     .join('')
// }

// Solution 2
// function reverseString(str){
//   let revString = []
//   for(let i = 0; i < str.length; i++){
//     revString.push(str[i])
//   }
//   return revString.reverse().join('')
// }

// Solution 3
// function reverseString(str){
//   let revString = ''
//   for(let i = str.length-1; i >= 0; i--){
//     revString = revString + str[i]
//   }
//   return revString
// }

// Solution 4

// function reverseString(str){
//   let revString = ''
//   for(let i = 0; i < str.length; i++){
//     revString = str[i] + revString
//   }
//   return revString
// }

// Solution 5
// function reverseString(str){
//   let revString = ''
//   for(let x of str){
//     revString = x + revString
//   }
//   return revString
// }

// Solution 6

// function reverseString(str){
//   let revString = ''
//   str.split('').forEach(x => revString = x + revString )
//   return revString
// }

// Solution 7
//
// function reverseString(str){
//   return str.split('').reduce((revString, x) => x + revString)
// }
//
// console.log(reverseString('HELLO'))

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome ('hello') === 'false'

// Solution 1
// function isPalindrome(str){
//   let pali = str.split('').reverse().join('')
//   return pali === str
// }
//
// console.log(isPalindrome('MOM'))



// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

// Solution 1
// function reverseInt(int){
//   const revInt = int.toString().split('').reverse().join('')
//   return parseInt(revInt)
// }
//
// console.log(reverseInt(12345))


// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

// Solution 1
// function capitalizeLetters(str){
//   const strArr = str.toLowerCase().split(' ')
//
//   for(let i = 0; i < strArr.length; i++){
//       strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1)
//   }
//   return strArr.join(' ')
// }

// Solution 2
// function capitalizeLetters(str){
//   return str
//     .toLowerCase()
//     .split(' ')
//     .map(x => x[0].toUpperCase() + x.substring(1))
//     .join(' ')
// }
//
// console.log(capitalizeLetters('i love javascript'))


// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'

// Solution 1
// function maxCharacter(str){
//   const charMap = {}
//   let maxNum = 0
//   let maxChar = ''
//   str.split('').forEach(x => charMap[x] ? charMap[x]++ : charMap[x] = 1)
//
//   for(let x in charMap){
//     if(charMap[x] > maxNum){
//       maxNum = charMap[x]
//       maxChar = x
//     }
//   }
//   return maxChar
// }
//
// console.log(maxCharacter('javascript'))

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".


// Solution 1
// function fizzBuzz(){
//   for(let i = 1; i <= 100; i++){
//     if(i % 15 === 0){
//       console.log('FizzBuzz')
//     }else if(i % 5 === 0){
//       console.log('Buzz')
//     }else if(i % 3 === 0){
//       console.log('Fizz')
//     }else{
//       console.log(i)
//     }
//   }
// }
//
// fizzBuzz()
