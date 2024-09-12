const myArr = [1,55,26,7,65]
const myHeros =  ["Iron Man","Black Wido","Thor"]

const myArr2 =  new Array(1,2,3,4,5)
console.log(myHeros[0]);

// Array Methods
myArr.push(8) // add element in lst index
myArr.pop() // delete the last element
//myArr.unshift(20) // aad  element in first index
myArr.shift() //delet the first element
console.log(myArr);
console.log(myArr.includes(26));
console.log(myArr.indexOf(26));

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);
console.log(typeof newArr); //  it's convert the array in string

// slice, splice

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)
console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);












