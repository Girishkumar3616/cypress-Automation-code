
//   write a function to revese a sentense  like = "abcd is alpabets "      to change like="dcba si stebapla" 
//BALAYYA HINDUPUR MLA
function reversesentence(str){
//1 step split the words from a string
let words =str.split(" ")
//2 step we need to reverse all the words by using map()
// here map() will transform each word from the array
reversedWords=words.map(word => {
return word.split("").reverse().join("")  
})
// 3 step  make a reversed string with reversed words
let revesestring=reversedWords.join(" ")      // here all reversed word will join  like string
return revesestring
}
// now we need to give the senntence 
let sentence="BALAYYA HINDUPUR MLA"
// we call the function   reversesentence(str)
let reversed=reversesentence(sentence)

//print/log the reversed variable let and see 
console.log(reversed)
