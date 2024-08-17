// var marks=85
// if(marks<=90){ 

// console.log("My grade is : A")

// }

// else if(marks<=70){

// console.log("My grade is : B")
    
//     }
//     else if(marks<=60){

//     console.log("My grade is : C")
        
//         }
//         else if(marks<=50){

//         console.log("My grade is : D")
            
//             }
//             else {

//                 console.log("I am failed in this examination")
//             }



            // var number=100
            // for(let i=1;i<=number;i++){
            //   if(i%3==0 && i%5==0){

            //    console.log("fizz buzz")

            //   }

            //   else if(i%3==0 ){

            //     console.log("fizz")
 
            //    }
 
            //    else if( i%5==0){

            //     console.log("buzz")
 
            //    }
            //   else {

            //    console.log(i)
            //    }

            // }
// function reversed (str){
//             var str="Girish"
//             var emptStr=""
//             var length=str.length
//             for(let i=length-1;i>=0;i--){

//                 emptStr +=str[i]
              
//             }
//             console.log(emptStr)
//             }
//             reversed ()


function Reversed(){

var str="hsiriG"
var vstr="Girish"
var lenth=str.length
var emptystr=""

for(let i=lenth-1;i>=0;i--){


    emptystr += str[i]
}
console.log(emptystr)
if(emptystr.localeCompare(str)){

    console.log("Given String is palindrome")
}




}
Reversed()