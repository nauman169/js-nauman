const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

// marvel_heros.push(dc)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const group_heros = marvel_heros.concat(dc) // use only for two array

// console.log(group_heros);

const allHreos = [...marvel_heros, ...dc] // use more then two arrays

// console.log(allHreos);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);



console.log(Array.isArray("Nauman"))
console.log(Array.from("Nauman"))

console.log(Array.from({name: "Nauman"})); // intersting


let scora1 = 100
let scora2 = 200
let scora3 = 300

console.log(Array.of(scora1, scora2, scora3));
