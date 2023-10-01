// array 
const myArr=[0,1,2,3,4,5]
// shallow copy changes the actual value if cchanged in it as it refers the same object
//deep copies are independent ogf each other
const hero=["jell","jdvsj"]
const myArr2=new Array(1,2,3,4)

console.log(myArr[0])
//array methods


// myArr.push(6)
// myArr.push(7)//pushes an elemnet

// myArr.pop()//removes last element
//myArr.unshift(0)
//inserts the element at start
//myArr.shift()
//removes the elemn from start

// // console.log(myArr.includes(9))
// // console.log(myArr.indexOf(5))
// const newArr=myArr.join()
// //converts in a string

// console.log(myArr)
// console.log(typeof(newArr));
//slice splice

console.log("a ",myArr);

const myn1=myArr.slice(1,3)

console.log(myn1);
console.log("B ",myArr);

const myn2=myArr.splice(1,3)
console.log("c ",myArr )
console.log(myn2)

//slice doesnt change the arrray and gives the portion that included in 
//given range but splice removes the total portion that is present between the range given


