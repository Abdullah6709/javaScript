const name2 ="Sajid"
const age  = 22
console.log(name2 + age);
console.log(`Hello my name is ${name2} and age ${age}`);


const name = new String('abdullah') 
console.log(name[0]);
console.log(name.__proto__);
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.charAt(2));
console.log(name.indexOf('u'));

const newString = name.substring(0, 4)
console.log(newString);

const anotherString = name.slice(-8, 4)
console.log(anotherString);

const newString2 = "     Sajid       "
console.log(newString2);
console.log(newString2.trim());

const url = "https://sajid.com%20module"
console.log(url.replace('%20', '_'));
console.log(url.includes('sajid'));
console.log(name2);










