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

    
      