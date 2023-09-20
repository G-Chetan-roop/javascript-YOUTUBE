//primitive
// 7 types string,,number,boolean,null,undefined,symbol- to make value unique,BigInt
//reference (non primitive)
// array,objects,functions
//js JavaScript is
//  a dynamically typed 
//  language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program 
//  as we assign different values to them.
const id=Symbol("223")
const anId=Symbol("223")
console.log(id===anId)
//symbol is used to uniquely identify the variables
const heros=["h1","h2","h3"]
let obj={
    name:"chetan",
    age:55,

}
const myfun=function(){
console.log("hello world")
}
console.log(typeof myfun);
// use typeof to find out the datatype of a variable
