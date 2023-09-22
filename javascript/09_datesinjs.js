//dates

let myDate=new Date()//gives the present date
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate);//date is an object
//let myCreatedDate=new Date(2023,0,23,5,3)
let myCreatedDate=new Date("01-14-2023")//format declaration of date can be done
//console.log(myCreatedDate.toLocaleString());
// let myTimeStamp=Date.now();//present time is shown
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Date.now()/1000)


let newDate=new Date()
console.log(newDate)
console.log(newDate.getDay())

newDate.toLocaleString('default',{
    weekday:"long"
})