//exercise 1
let cach=1000;
let currentLiabilities=500;
console.log(cach/currentLiabilities);

//exercise 2
 let revenues= 1000; 
 let expenses= 500 ;
 console.log(revenues-expenses);
 //exercise 3
 let liabilities= 1000;
  let equity=500 ;
  console.log(liabilities+equity);
  //exercise 4
  let profit= 1000;
  let sales= 500 
  console.log(profit*sales) 
   //exercise 5
   let a=7;
   let b=9;
   let c=2;
   d=a+b+c;
   console.log(d/3);


   

   //exercise 6
   let  discount= 30; 
   let  price=150;
   let q=price*(30/100);
   console.log(price-q);

   //exercise 7
   let age=20;
   if(age>18 && age<30){
    console.log(true)
   }
   else{
    console.log(false)
   }
   //exercise 8


   let num1=2;
   let num2=3;
   console.log(num1**num2);
   //exercise 9


 let number1 = 10;
let number2 = 4;
console.log(number1%number2);








   //exercise 10


let text='Welcome to Orange';
let upper=text.toUpperCase();
console.log(upper)

let z=text.slice(8,10).toUpperCase();
console.log(z)


let r1=text.replace('Welcome' , 'Hello');
console.log(r1)

console.log(text.length);

let r2 = text.replace('Orange', '"Orange"');

console.log(r2);


let r3=text+" jordan";
console.log(r3)


   //exercise 11
let word="cactus";

let result = word.slice(0, word.lastIndexOf("c")) + "*" + word.slice(text.lastIndexOf("c") + 1);

console.log(result);



   //exercise 12 array
let array1=["Coding" , "Academy" , "By" ,"Orange"];


let push1=array1.push('jordan');
console.log(array1);


let s1=array1.slice(0,2);
console.log(s1);


let a1=array1.unshift("welcome" , "To");
let a2=array1.pop();
console.log(array1);


let splice1=array1.splice(0,3);
console.log(array1)

let add3=array1.unshift('Coding');
console.log(array1.join(" "));


console.log(array1);


let del=array1.splice(1,2);
console.log(array1)




 fruit = ["banana", "apple", "orange", "watermelon"]; 
vegetables = ["carrot", "tomato", "pepper", "lettuce"];


vegetables.pop();
console.log(vegetables)


fruit.shift();
console.log(fruit)



let i1=fruit.indexOf("orange");
console.log(i1)


fruit.push(1);
console.log(fruit)


let length1=vegetables.length;
console.log(length1)

vegetables.push(3);
console.log(vegetables);


let food=fruit.concat(vegetables);
console.log(food)


let removee=food.splice(4,2);
console.log(food);


food.reverse();
console.log(food);


food.reverse();
console.log(food);

   //exercise 13 conditions

   let birth=2003;
   let year=2026
   let agee=year-birth;


   if(agee>30 ){
    console.log("You are not eligible. You may join other programs");
   }

   else if(agee >=18 && agee<=30)
   {
       console.log("“You are eligible. Start your application.”");
   }


   else if(agee<18){
     console.log("You may join the kids' program");
   }

   else if(agee>60){
        console.log("You may join the seniors’ program");
        
   }

      //exercise 14 fuction

    
  function uppandlow(x){
    let r="";
    for(let char of x){
         if(char==char.toUpperCase()){
             r += char.toLowerCase();

         }
         else{
             r += char.toUpperCase();

         }
    }

    return r
  }



  console.log(uppandlow("OrAnG"));




function camelCase(x) {
    let r = "";
    let capitalize = true;

    for (let char of x) {
        if (char == " ") {
            capitalize = true;
        } 
        else if (capitalize) {
            r += char.toUpperCase();
            capitalize = false;
        } 
        else {
            r += char;
        }
    }

    return r;
}

console.log(camelCase("Coding Academy by Orange"));






function removeElement(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == element) {
            arr.splice(i, 1);
        }
    }

    return arr;
}

console.log(removeElement(
    ["Coding", "Academy", "By", "Orange"],
    "By"
));






function oddoreven(o){
   if(o%2==0){
      console.log("the num is even")
   }
   else{
             console.log("the num is even")

   }
}


function check(q){
   if(isNaN(q) == false){
      console.log("this is number")
   }
   else{
      console.log("this is not number")
   }
}

check(4);

function largest(a, b) {

    if (a > b) {
        console.log(a);
    }
    else {
        console.log(b);
    }

}

largest(10, 5);



function triangle(a, b, c) {

    if (a == b && b == c) {
        console.log("Equilateral");
    }
    else if (a == b || a == c || b == c) {
        console.log("Isosceles");
    }
    else {
        console.log("Scalene");
    }

}

triangle(5, 5, 5);



function checkRange(number) {

    if (number >= 10 && number <= 20) {
        console.log("Number is in the range");
    }
    else {
        console.log("Number is not in the range");
    }

}

checkRange(15);



function leapYear(year) {

    if (year % 4 == 0) {
        console.log("Leap Year");
    }
    else {
        console.log("Not a Leap Year");
    }

}

leapYear(2024);



for (let i = 1; i <= 50; i++) {

    if (i % 2 == 0) {
        console.log(i);
    }

}



let i = 1;

while (i <= 50) {

    if (i % 2 == 0) {
        console.log(i);
    }

    i++;
}



for (let i = 2; i <= 50; i += 2) {

    console.log(i);

}



for (let i = 1; i <= 50; i++) {

    if (i % 2 == 0) {
        console.log("Even:", i);
    }

}




for (let i = 1; i <= 50; i++) {

    if (i % 2 != 0) {
        console.log("Odd:", i);
    }

}



for (let i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }

}


function fizzBuzz(number) {

    if (number % 3 == 0 && number % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if (number % 3 == 0) {
        console.log("Fizz");
    }
    else if (number % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(number);
    }

}



function fizzBuzz(number) {

    if (number > 100) {
        return;
    }

    if (number % 3 == 0 && number % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if (number % 3 == 0) {
        console.log("Fizz");
    }
    else if (number % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(number);
    }

    fizzBuzz(number + 1);
}

fizzBuzz(1);


function banknotes(number, notes) {

    for (let i = 0; i < notes.length; i++) {

        while (number >= notes[i]) {

            console.log(notes[i]);

            number = number - notes[i];
        }
    }
}

banknotes(57, [25, 10, 5, 1]);



function countCharacter(text, character) {

    let count = 0;

    for (let i = 0; i < text.length; i++) {

        if (text[i].toLowerCase() == character.toLowerCase()) {
            count++;
        }

    }

    console.log(count);
}

countCharacter("Coding Academy by Orange", "o");




for (let i = 3; i <= 29; i++) {

    if (i % 2 != 0) {
        console.log(i);
    }

}



for (let i = 12; i >= -14; i--) {

    if (i % 2 == 0) {
        console.log(i);
    }

}



for (let i = 50; i >= 20; i--) {

    if (i % 3 == 0) {
        console.log(i);
    }

}




let textt = "CodingAcademy";

let arr = [7, 500, "KH404", "black", 36];

for (let i = 0; i < arr.length; i++) {

    console.log(arr[i]);

}



let numbers = [7, 23, 18, 9, -13, 38, -10, 12, 0, 124];

let evens = [];
let odds = [];

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 == 0) {
        evens.push(numbers[i]);
    }
    else {
        odds.push(numbers[i]);
    }

}

console.log("Evens:", evens);
console.log("Odds:", odds);






