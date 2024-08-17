


function reversedstring() {
    var str = "Girish kumar girish kumar";
var words=str.split(" ").reverse()
reversedwords=words.map(word => {
    return word.split("").reverse().join("")
})
    var reversed=reversedwords.reverse().join(" ")
    console.log(reversed);
}
reversedstring();

   //    substr()  and    substring()

// i want get only 4 charecters form the string any charecters
let str1="BangaloreHydrabad"
let subst=str1.substr(9,8)  // here we need to give args start index  and how many charts we want for that we need to give the length
console.log(subst)
let substrng=str1.substring(0,9)   // here we need give args start and end index
console.log(substrng)




// trim()   // itrs removed the unwanted back spces of the string begining and end of the string

  let str2="     Bangalore  Hydrabad    "
  let trimedstring=str2.trim()
  console.log(trimedstring)

// slice()   its also similar to substr() and Substring()  methods
   //Extracts elements from index 0 to index 4 (not including index 4)

  let str3=["Girish","Ravi","Harish","kumar","loin","tiger","cat"]
  let spli=str3.slice(1,4)     
  console.log(spli)

// toLowercase()  and toUppercase()

let str4="KB GIRISH KUMAR"
let lowercase=str4.toLowerCase()
console.log(lowercase)

//2 toUppercase()
let str5="kb girish kumar"
let uppercase=str4.toUpperCase()
console.log(uppercase)


// replace() method   here 1st arg replaced by nothing it means remove ₹ symbol and replaced by nothing  ex= "₹",""
let str6="₹9,898".replace("₹","").replace(",","").trim()
console.log(str6)
let str7="₹7878".replace("₹","").replace(",","")
console.log(str7)
//Split()   it will split the string and new Array will return to us 
let str8="girish kumar"
let spi=str8.split()
console.log(spi)