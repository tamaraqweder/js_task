let age=27;
if(age>18){
    console.log("you are an adult");
}

let num1=4;
 if(num1%2==0){
    console.log("the number is even")
 }
 else{
    console.log("the number is odd")
 }


 let char="a";
 if(isNaN(char)){
    console.log("it is letter");
    
 }
 else{
    console.log("it is not letter");
    
 }


 let list =[1,2,3];
 if(Array.isArray(list)){
    console.log("it is an array");
 }

 else{
    console.log("it is not an array");
 }


 let x=5;

 if(x>0){
    console.log("x is a positive number")
 }
 else{
    console.log("x is nagative number");
 }



 //


 let pass="mypassword123";
 q=pass.length;
 if(q>8){
    console.log("your password is strong");
    
 }
 else{
    console.log("your passwod is weak");
    
 }


 let age2=30;
 if(age2>=18 && age2<=65){
    console.log("you are of working age")
 }
 else{
    console.log("not allow")
 }



 let color="red";
 if(color=="red" || color=="green" || color=="blue"){
    console.log(color+" is a primary color")
 }




 function isnumber(a){
    if(!isNaN(a)){
        console.log(" it is a number")
    }
    else{
        console.log("not a number")
    }
 }



 isnumber(2)