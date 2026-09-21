'use strict'
/*var x= 10
console.log(x);*/
// console.log(y);

// function test_fun (x){
//     var z=3;

// }
//     console.log(z);
// let y=10;
// z=5;
// console.log("y=",y);
// console.log("z=",z);

let name = "Orange Coding Academy";
let number = 1;
let boolean = true;
// let true=1; //error
let double = 2.11;
let null_val = null;
let unde_val = undefined;
let obj_val = { name: "John", age: 25 };
let arr_val = [1, 2, 3, 4, 5];
console.log("data type of name=", typeof (name));
console.log("data type of number=", typeof (number));
console.log("data type of obj_val=", typeof (obj_val));
console.log("data type of arr_val=", typeof (arr_val));
// //////////////operation

// +,-, /,*,%
let a = 15;
let b = 20;

let sum = a + b;
console.log("sum=a+b=", sum);

// logical operation and, or, not
let c = 2;
let d = 10;
//<,>, ==, !=,
let great_ope = c > d;
console.log("great_ope=", great_ope);

let less_ope = c < d;
console.log("less_ope=", less_ope);


if (c > d) {
    console.log(c);
} else {
    console.log(d);

}
let day = "Wednesday"
switch (day) {
    case "sunday":
        console.log("this our day");

        break;
    case "Moday":
        console.log("this not our day");

        break;
    case "Tusday":
        console.log("this not our day");

        break;

    default:
        console.log("not found");
        
        break;
}


// string method

let string_val= "orange academy";
console.log("string_val=",string_val.toUpperCase());
let str_lo_val= "ORANGE ACADEMY"
console.log("str_lo_val=", str_lo_val.toLowerCase() );
