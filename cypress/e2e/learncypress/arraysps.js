
// array2=["Girish","Jagadeesh","Harish","Ravindra","Manjual","Keerthi"]
// console.log(array2)
// console.log(array2.length)
// console.log(array2[5])
// console.log(array2.indexOf("Keerthi"))

// array2.push("Kumar")
// console.log(array2)
// array2.unshift("Giri")
// console.log(array2)
catalog={
Books : [
    {
        "bid"   : "bk01",
        "author":" A khan",
        "bookname":"Beautifull life",
        "price":800,
        "pages" : 120
    },

    {
        "bid"   : "bk02",
        "author":"Ramu",
        "bookname":"life is Beautifull",
        "price":700,
        "pages" : 110
    },

    {
        "bid"   : "bk03",
        "author":"NTR",
        "bookname":"My life Story",
        "price":600,
        "pages" : 100
    },
    {
        "bid"   : "bk04",
        "author":" MGR",
        "bookname":"My habits",
        "price":500,
        "pages" : 150
    },
    {
        "bid"   : "bk05",
        "author":"Sri Sri",
        "bookname":"Colour World",
        "price":400,
        "pages" : 200
    }
]
}

// Filtering the price of books having more than 550 Rupees

const books = catalog.Books
const PRICE = books.filter(function(book) {
    return book.price >= 550;
});
console.log(PRICE);


// Filtering tthe page of books having less than 150 Pages

const pages=catalog.Books.filter(function(book){
return book.pages < 150
})
console.log(pages)

 //By using map we fetching the Prices of the books
 console.log(catalog.Books.length)
 const prices=catalog.Books.map( Books => Books.price)
 const bookids=catalog.Books.map( Books => Books.bid)
 console.log("Before sorting Pricess");
 console.log(prices);
 console.log("After sorting Pricess");
 console.log( prices.sort())
 console.log( bookids)



// N 2nd    Filter


array2=[20,30,71,40,50,60,27,64]
nums=array2.filter(function(evn){
return evn%2==0
})
console.log(nums)    // Result 20,30,40,50,60,64


agess=[20,23,25,28,30,32,34,38,37,40,50,60,80]
age=agess.filter(function(AGE){
return AGE>=25
})
console.log(age)    //  Result 25,28,30,32,34,38,37,40,50,60,80


//reduse ()    by using this methos we will get Maximum number of the array
const array =[1,4,150,6,7,9]
const max=array.reduce(function(acc,ele) {

    if(acc>ele){
             return acc
    }
    else {
             return ele
    }

},array[0])
console.log(max)   // result Maximum nuber in this Array  150


//reduse ()    by using this methos we will get Maximum number of the array
const arrayi =[1,1,1,1,1,1]
const Sum=arrayi.reduce(function(acc,ele)
 {

    return acc+ele

},0)
console.log(Sum)    //rusult  Sum of all the numbers is 6




var array2=["Girish","Jagadeesh","Harish","Ravindra","Manjual","Keerthi"]
var array3=["abc","def","ghij"]
array2.sort()
console.log(array2)
array2.splice()
console.log(array2)
console.log(array2.reverse())
if(array2.includes("Naresh")){

    console.log("Element is Present")
}
else{
    console.log("Element is not Present")
}
console.log(array2.concat(array3))


// To Write a java script programm for reverse string
 str1="girishkumar"
 reverse=str1.split("").reverse().join("")
 console.log(reverse)


 str2="ramukhsirig"
 reverse2=str2.split("").reverse().join("")
 console.log(reverse2)


// Write a program to revese a given words
 
 var str3="Girish kumar from bangalore"
 function reversewords(str){
//Split the string by spaces to get an array of words

   let  wordssplit=str3.split(" ")

 // Reverse the array of words

 let reversedwords=wordssplit.reverse()

 //Join the reversed array of words back into a single string
 let revrseString=reversedwords.join(" ")

 return revrseString
 }
var reversallwords=reversewords(str3)
console.log(reversallwords)


//2nd type



function reversedWords(string){

    //let str4="Girish kumar from bangalore"
    let words=string.split(" ")
    
   let reversedwords=words.map(  word =>{

   return word.split("").reverse().join("")

    })
    console.log(reversedwords)
    let reversedString=reversedwords.join(" ")
return reversedString
}
let sentence="Girish kumar from bangalore"

console.log(sentence)

let reversedsentence=reversedWords(sentence)

console.log(reversedsentence)



// 2nd example for the above model


function reversestr(str){
let words=str.split(" ");
let reversedwords=words.map(word =>{
    return word.split("").reverse().join("")
})
console.log(reversedwords)
let reversedstrings=reversedwords.join(" ")
return reversedstrings
}
let sentencee="Girish kumar from bangalore"
let revesedsent=reversestr(sentencee)
console.log(revesedsent)


