let person = {
    name: "Adam",
    age: 25,
    gender: "male"
};

console.log(person.name);
console.log(person.age);
console.log(person.gender);



person.city = "amman";

console.log(person);

console.log(person.name);


let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
    console.log(number);
});


let fruitsس = ["apple", "banana", "cherry"];

fruits.sort();

console.log(fruitsس);


let fru = ["apple", "banana", "cherry"];

fru.reverse();

console.log(fru);



let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let res = arr1.concat(arr2);

console.log(res);

let numberss = [1, 2, 3, 4, 5, 6];

let result = numberss.slice(0, 2).concat(numberss.slice(4));

console.log(result);


let numb = [1, 2, 3, 4, 5];

numb.splice(2, 1);

console.log(numb);

let number = [1, 2, 3, 4, 5];

console.log(number.indexOf(2));








let fruits = ["apple", "banana", "cherry"];

let joinedFruits = fruits.join(",");
console.log(joinedFruits);


let sentence = "Coding,Academy,Orange";

let splitSentence = sentence.split(",");
console.log(splitSentence);


let names = ["Ali", "Mazen", "Ayham", "Murad"];

console.log(names.length);


let colors = ["red", "blue", "green", "yellow"];

for (let color of colors) {
    console.log(color);
}


let students = ["Adam", "Sara", "Lina"];

console.log(Array.isArray(students));