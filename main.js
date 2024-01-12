// let arr = new Array[10,20,30];

// Array.prototype.sum = function (){
//   let sum = 0;
//   for(let el of this){
//     sum += el;
//   }
//   return sum;  
// }

// let res = arr.sum();
// console.log(arr);

// console.log(res);

// console.log([10,20,80].sum());




// Array.prototype.fltr = function(callback){
//   let res =[];
//   for(let i =0; i < this.length; i++){
//     let check = callback(this[i],i,this);
//     if(check){
//       res.push(this[i])
//     }
//   }
//   return res;
// }

// let arr = [5,4,6,8,7];

// let even = arr.filter((el) => el % 2 ===0);
// console.log(even);


// js-13.1

// Array.prototype.trm = function(string, value){
//     this.value= value
//     string.trim(){
//       if(value.length() <= 2){
//         return value
//       }
//     }
// }
// let arr = " Hello world ";

// let even = arr.trim();

// console.log(even);

// js-13-2

// Array.prototype.upperCase = function(arr){
//   let res = [];
//   for(let i =0; i< this.length; i++){
//     if(this[i] == this[i].toLowerCase){
//           res += this[i].toUpperCase;
//     }
//   }
//   return res;
// }

// let arr = "yahyojon";

// let even = arr.toUpperCase
// console.log(even);

// js-13-3

// Array.prototype.has = functon(arr){
//   let res = [];
//   if(arr.includes(arr.el)){
//     true
//   }
//  return res;
// }

// let arr = ["banana","orange","ptatoes","apple"];

// let even = arr.includes("orange");
// console.log(even)

// js-13-4


//  Array.prototype.has = functon(arr){
//   let res = [];
// for(let el of arr){

  //   if(arr.slice(2,3)){
  //    res += el
  //   }
// }
//  return res;
// }
// let arr = 'yahyojon';

// let even = arr.slice(2,3);
// console.log(even)

// js-13-5


//  Array.prototype.has = functon(arr){
//   let res = [];
// for(let el of arr){

  //   if(arr.slice(2,3)){
  //    res += el
  //   }
// }
//  return res;
// }
// let arr = 'yahyojon';

// let even = arr.repeat(2)
// console.log(even)

// js-13-6

// Array.prototype.fixed = function(number){
//   let res = [];
//   for(let el of number){
//     res += el.tofixed()
//   }
//   return res ;
// }

// let number = 222.5;
// let even = tofixed(number);
// console.log(even);

// js-13-7

//  Array.prototype.fixed = function(number){
//   let res = [];
//   for(let el of number){
//     res += el.round(2)
//   }
//   return res ;
// }

// let number = "5.10.102";
// let even = round(number);
// console.log(even);

// Js-13-8

// Array.prototype.issquare = function(){
//   if (Number.isInteger(Math.sqrt(n))) {
//     return true;
// } else {
//     return false;
// }
// }

// js-13-9
// Array.prototype.count = function(arr){
//   let sum = 0;
//   for(let i=0; i< arr.length; i++){
//     sum += arr[i]
//   }
//   return sum;
// }

// js-13-10

// Array.prototype.sum = function(arr){
//   let sum = 0;
//   for(let el of arr){
//     if(el >0){
//       sum += el;
//     }
//   }
//   return sum;
// }

// let arr = (1,2,3,45)
// for(let i= 0; i< arr.length; i++){
//   sum += el>0;
//   return sum;
// }
// console.log(sum);


// js-13-11

// Array.prototype.map = function(){

//   const numbers = [65, 44, 12, 4];
//   const newArr = numbers.map(myFunction)
  
//   function myFunction(num) {
//     return num * 10;
//   }
// }
// console.log(number);

// js-13-12

// Array.prototype.very = function(){

// //   const numbers = [65, 44, 12, 4];
// //   const newArr = numbers.very(myFunction)
  
// //   function myFunction(num) {
// //     return num * 10;
// //   }
// // }
// // console.log(number);

// js-13-13

// Array.prototype.reduce = function (){
//   const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduce(myFunction);

// document.getElementById("demo").innerHTML = "The sum is " + sum;

// function myFunction(total, value, index, array) {
//   return total + value;
// }
// }

// js-13-14

// Array.prototype.findIndex = function{
//   const ages = [3, 10, 18, 20];

// ages.findIndex(checkAge);

// function checkAge(age) {
//   return age > 18;
// }
// }
// console.log(ages);

// js-13-15

// Array.prototype.splice = function{
//   const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.splice(2, 0, "Lemon", "Kiwi");
// }

// console.log(fruits);

// js-13-16






