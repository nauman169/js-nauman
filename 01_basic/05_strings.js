const name = "nauman"
const repoCount = 50

// console.log(name + repoCount + " Value");


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Nau-amn')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);


// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0, 4)  // nagative values not allowed
console.log(newString);


const anotherString = gameName.slice(-6,4)
console.log(anotherString);


const newStringOne = "   Nauman    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "http://nauman.com/nauman%20kfsojg"

console.log(url.replace('%20', '-'));
 

console.log(url.includes('nauman'));
 

console.log(gameName.split('-'));
