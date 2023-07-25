
function reverseString(word) {
 // create an array from the input string
 //const wordArray = word.split("");
// reverse the array
//const reversedWordArray = wordArray.reverse();
// create a string from the reversed array
//const reversedWord = reversedWordArray.join("");
 // return the reversed string
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  // Write your algorithm here
 //  reverse the input string
 const reversedWord = reverseString(word);
 //if the reversed string is same as the input
  return word===reversedWord;
}

/* 
  Add your pseudocode here
  reverse the input string

if the reversed string is the same as the input
  return true
else
  return false
*/

/*
  Add written explanation of your solution here
  The function isPalindrome takes a string as its only aqgument.
  It checks if the string is palindrome and returns true.
  If the string is not palindrome it returns false
  Calling the function with the string to be tested should return true or false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
isPalindrome("abba") // true
isPalindrome("racecar") //true
isPalindrome("a") // true
isPalindrome("robot") //false
isPalindrome("ab") //false