/* Exercise 1 — Hoisting & Scoping Challenge
● Predict the output before running the code         :   Undefine 20
● Explain how hoisting works with var.     : Hoisting with `var` means that JavaScript lifts the variable declaration to the top of its scope before the code executes, but the value remains in its original place


● Identify the difference between function scope and block scope
     Function -- The variable works inside the whole function.
     BlockThe variable works only inside { }.
● Rewrite the example using let where appropriate.:
  console.log(name); 
var name = "Jone"; 
function test() 
{ let x = 10; if (true)
 { let y = 20; } 
console.log(y); }
 test(); // 
console.log(x);  */ 



//Exercise 2 — Constructor Functions & Prototypal Inheritance





//Exercise 3 — Array Methods Playground
let students1 = [
    "Ahmad",
    "Sara",
    "Omar",
    "Lina",
    "Yousef",
    "Maya",
    "Ali",
    "Dana",
    "Khaled",
    "Rania",
    "Zaid",
    "Hala",
    "Sami",
    "Nour",
    "Tareq",
    "Leen",
    "Adam",
    "Farah",
    "Othman",
    "Reem",
    "Laith",
    "Aya",
    "Fadi",
    "Jana",
    "Hamza"
];

let students2 = [
    "Malak",
    "Samer",
    "Hussein",
    "Dima",
    "Baraa",
    "Salma",
    "Mahmoud",
    "Razan",
    "Anas",
    "Hiba",
    "Yazan",
    "Mira",
    "Bassam",
    "Saja",
    "Alaa",
    "Nadia",
    "Ibrahim",
    "Rama",
    "Ayman",
    "Layan",
    "Bilal",
    "Joud",
    "Mousa",
    "Esraa",
    "Qais"
];


let students=students1.concat(students2);
console.log(students);


let sorted=students.sort();
console.log(sorted);


let rev=students.reverse();
console.log(rev);

console.log(students.includes("Ahmad"));


students.forEach(function(x, index) {
    console.log(index, x);
});




//Exercise 4 — Student Records Manager
let student = [
    { id: 1, name: "Ahmad", grade: 85 },
    { id: 2, name: "Sara", grade: 92 },
    { id: 3, name: "Omar", grade: 78 },
    { id: 4, name: "Lina", grade: 95 },
    { id: 5, name: "Yousef", grade: 88 },
    { id: 6, name: "Maya", grade: 76 },
    { id: 7, name: "Ali", grade: 90 },
    { id: 8, name: "Dana", grade: 83 },
    { id: 9, name: "Khaled", grade: 72 },
    { id: 10, name: "Rania", grade: 89 },
    { id: 11, name: "Zaid", grade: 94 },
    { id: 12, name: "Hala", grade: 81 },
    { id: 13, name: "Sami", grade: 77 },
    { id: 14, name: "Nour", grade: 91 },
    { id: 15, name: "Tareq", grade: 69 },
    { id: 16, name: "Leen", grade: 86 },
    { id: 17, name: "Adam", grade: 93 },
    { id: 18, name: "Farah", grade: 79 },
    { id: 19, name: "Othman", grade: 84 },
    { id: 20, name: "Reem", grade: 97 },
    { id: 21, name: "Laith", grade: 73 },
    { id: 22, name: "Aya", grade: 87 },
    { id: 23, name: "Fadi", grade: 80 },
    { id: 24, name: "Jana", grade: 96 },
    { id: 25, name: "Hamza", grade: 75 },
    { id: 26, name: "Malak", grade: 82 },
    { id: 27, name: "Samer", grade: 71 },
    { id: 28, name: "Hussein", grade: 88 },
    { id: 29, name: "Dima", grade: 90 },
    { id: 30, name: "Baraa", grade: 68 },
    { id: 31, name: "Salma", grade: 85 },
    { id: 32, name: "Mahmoud", grade: 79 },
    { id: 33, name: "Razan", grade: 92 },
    { id: 34, name: "Anas", grade: 74 },
    { id: 35, name: "Hiba", grade: 89 },
    { id: 36, name: "Yazan", grade: 95 },
    { id: 37, name: "Mira", grade: 83 },
    { id: 38, name: "Bassam", grade: 78 },
    { id: 39, name: "Saja", grade: 91 },
    { id: 40, name: "Alaa", grade: 70 },
    { id: 41, name: "Nadia", grade: 86 },
    { id: 42, name: "Ibrahim", grade: 93 },
    { id: 43, name: "Rama", grade: 81 },
    { id: 44, name: "Ayman", grade: 76 },
    { id: 45, name: "Layan", grade: 98 },
    { id: 46, name: "Bilal", grade: 84 },
    { id: 47, name: "Joud", grade: 87 },
    { id: 48, name: "Mousa", grade: 73 },
    { id: 49, name: "Esraa", grade: 90 },
    { id: 50, name: "Qais", grade: 80 }
];

//splice
   //add
let q=student.splice(0,0,{id : 0, name: "tamara",grade : 100});
console.log(student)
   //remove
console.log(student.splice(49,1));
console.log(student);
  //replace

let r= student.splice(48,1,{ id : 49 , name : "adel" , grade : 100});
console.log(student);

//slice
   
let slice1= student.slice(0,5);
console.log(slice1);
//Sort students by grade.
student.sort(function(a, b) {
    return a.grade - b.grade;
});

console.log(student);


//● Print the final list using forEach().



student.forEach(function(x,index){
    console.log(index,x)
})


//////////////////////////////////////////////////////
//Exercise 5 — JSON Converter

const product = {
    id: 1,
    name: "Laptop",
    price: 500,
    category: "Electronics",
    available: true
};



let product2=JSON.stringify(product);
console.log(product2)


let product3=JSON.parse(product2);
console.log(product3);

console.log(product);



const invalid = `{
    "name": "tamara"
    "age": "23" 
}`;

try{
    const invalid1=JSON.parse(invalid);
        console.log(invalid1);

}
catch (error) {
    console.log("Invalid JSON");
}


//Exercise 6 — Product Inventory Analyzer



const inventory = [
    {
        id: 1,
        name: "Laptop",
        price: 500,
        category: "Electronics",
        quantity: 10
    },
    {
        id: 2,
        name: "Phone",
        price: 300,
        category: "Electronics",
        quantity: 15
    },
    {
        id: 3,
        name: "Headphones",
        price: 50,
        category: "Electronics",
        quantity: 20
    },
    {
        id: 4,
        name: "Keyboard",
        price: 40,
        category: "Accessories",
        quantity: 12
    },
    {
        id: 5,
        name: "Mouse",
        price: 25,
        category: "Accessories",
        quantity: 30
    },
    {
        id: 6,
        name: "Monitor",
        price: 200,
        category: "Electronics",
        quantity: 8
    },
    {
        id: 7,
        name: "Tablet",
        price: 350,
        category: "Electronics",
        quantity: 6
    },
    {
        id: 8,
        name: "Backpack",
        price: 60,
        category: "Bags",
        quantity: 18
    },
    {
        id: 9,
        name: "Smart Watch",
        price: 150,
        category: "Electronics",
        quantity: 9
    },
    {
        id: 10,
        name: "USB Cable",
        price: 10,
        category: "Accessories",
        quantity: 50
    }
];

console.log(inventory);


inventory.sort(function(a, b) {
    return a.price - b.price;
});

console.log(inventory);

const check= inventory[2];

console.log(inventory.includes(check));


//● Use splice() to remove a discontinued product.



console.log(inventory.splice(1,1));
console.log(inventory);


let slice2=console.log(inventory.slice(0,5));
console.log(slice2);


const inventory2 = [
    {
        id: 1,
        name: "Laptop",
        price: 800,
        category: "Electronics",
        quantity: 5
    },
    {
        id: 2,
        name: "Phone",
        price: 500,
        category: "Electronics",
        quantity: 10
    }
]

console.log(inventory.concat(inventory2));
/////////////////////////////////////////////
//Exercise 7 — Arrow Function Transformation

const squ= (a) => a*a;
console.log( squ(10));


const even = (x) => {
    if(x%2==0){
        console.log("the " + x+ " is an even number")
    }
    else{
        console.log("the " + x+ " is an odd number")

    }
}

even(10);

const total = (p,n) => p*n;
console.log(total(100,5));
////////////////////////////////////////////
//Exercise 8 — Destructuring & Default Parameters


const info={
    user:"tamara",
    email:"qqq@gmail.com",
    age:23,
    address:"karak"
};

const {user}=info;
console.log({user});
const {user : username} = info;
console.log(username);


const info2 = ["tamara" , "adel" ,"qweder"];
const[a,b]=info2
console.log(a,b);

function createuser(name = "Unknown",age = 18){

     return {
        name: name,
        age: age
    };
};

const user1 = createuser("Sara", 25);
console.log(user1);

const user2 = createuser();
console.log(user2);

////////////////////////////
//Exercise 9 — Spread, Rest, Map & Set Challenge
const courses = [
    {
        id: 1,
        name: "JavaScript",
        instructor: "Ahmad",
        price: 50
    },
    {
        id: 2,
        name: "React",
        instructor: "Sara",
        price: 60
    }
];

const student1 = [
    {
        id: 1,
        name: "Tamara",
        age: 22,
        course: "JavaScript"
    },
    {
        id: 2,
        name: "Omar",
        age: 24,
        course: "React"
    }
];


const all=[...courses,...student1];

function test(...items) {
    console.log(items);
}

