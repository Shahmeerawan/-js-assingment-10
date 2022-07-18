//******** CHP 35 - 38********* */

//********* TASK 01******** */
// function greetuser(greeting) {
//     document.write(greeting)
    
// }
// greetuser(new Date());




// //********* TASK 02******** */
// function name(naam){
//     alert("Welcome mrs/mrs " + naam)
// }
// name(prompt("eneter you name"))




// //********* TASK 03******** */
// function sum(add){
//     alert(add)

// }
// sum(+prompt("enter any first number") + +prompt("entrer any second number"))





// //********* TASK 04******** */

// function cal(p1 , p2 , p3) {
//     if(p3 == "+"){
//     document.write(p1 + p2)}
//     else if(p3 == "-"){
//         document.write(p1 - p2)}
//         else if(p3 == "*"){
//             document.write(p1 * p2)}
//             else {
//                 document.write(p1 / p2)}
    
// }
// cal( +prompt("enter first number") , +prompt("Enter second number") , prompt("enter any operator") )




// //********* TASK 05******** */

// function name(square) {
//     document.write(square * square)
// }
// name(+prompt("Enter any number"))



// //********* TASK 06******** */

// function fac(inp) {
//     if(inp === 0){
//         document.write("1")
//     }
//     else if (inp === 1){
//         document.write("1")
//     }else{
//         for(var i = inp ; i >= 1 ; i--){
//         document.write(+ [i]- 1)}
//     }
// }
// fac(+prompt("enter any number"))


// //********* TASK 07******** */

// function counting(inp1 , inp2) {

//     for(var i = inp1 ; i <= inp2 ; i++){
//         document.write( i + "<br>")
//     }
// }
// counting(+prompt("enter first number"),+prompt("enter second number"))



// //********* TASK 08******** */

// function hyp(base,perp) {
//     document.write("The hypotenuse is " + ((base * base) + (perp * perp)))

    
// }
// hyp(+prompt("enter the base") , +prompt("enter the perp"))


// ******** TASK 09 ********


// function area(height , width) {
//     var a = height * width ;
// document.write(a  + " is the area")    
// }
// area( +prompt("enter the height") , +prompt("enter the width") );




// ******** TASK 10 ********

// function pelim(inp) {
//     var a = inp.split("").reverse().join("") ;
//     if(a === inp){
//         alert("The word is pelindrom")
//     }
//     else{
//         alert("Its not a pelimdrom word")
//     }
// }
// pelim(prompt("Enter any word"))





// ******** TASK 11 ********

// function capi(inp) {
//     var a = inp.split(" ");
//     console.log(a)
//     for(var i = 0 ; i < a.length ; i++){
//         var b = a[i].replace(a[i].charAt(0),a[i][0].toUpperCase());
//         // var j = a.join(" ");
//     console.log(a)

//         document.write(b)
//         console.log(b)
//     }
    
// }
// capi(prompt("Enter any line"))





// ******** TASK 12 ********
// var arr = [];

// function longestLength(user) {
//     var spliting = user.split(" ");
//     var length = 0;
//     var index;
//     var biggestNumber = 0;
//     console.log(spliting);
//     for (var i = 0; i < spliting.length; i++) {
//         length = spliting[i].length;
//         if (length >= biggestNumber) {
//             biggestNumber = length;
//             index = spliting[i];
//         }
//     }
//     return index;
// }

// var user = prompt("Enter your Sentence");
// var result = longestLength(user);

// document.write("Your sentence was " + user);
// document.write("<br >");
// document.write("Longest word in your Sentence is " + result + " and its length is " + result.length);




// ******** TASK 13 ********

// var flag1 = false;
// var flag2 = false;
// function occuranceOfGivenNumber(userSentence, userLetterOccurance) {
//     var count = 0;
//     for (var i = 0; i < userSentence.length; i++) {
//         if (userSentence[i] === userLetterOccurance) {
//             count = ++count;
//             flag1 = true
//         }

//     }
//     if (flag1 === false) {
//         alert("There is no occurance of the letter " + userLetterOccurance)
//         flag2 = true;
//     }
//     return count;
// }

// var userSentence = prompt("Give your sentence");
// var userLetterOccurance = prompt("Find the number of occurance of ");

// var result = occuranceOfGivenNumber(userSentence, userLetterOccurance);
// if (flag2 === false) {
//     alert("The number Occurance of " + userLetterOccurance + " is " + result);
// }




// ******** TASK 14 ********


// function name(inp) {
//     var a = 2 * 2.147 * inp ;
//     var b = 2.147 * (inp * inp)
//     document.write(a + " is the circumference of circle" + "<br>");
//     document.write(b + " is the area of circle")

    
// }
// name(+prompt("Enter the radius"))