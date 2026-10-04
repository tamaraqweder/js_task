let i=1;
while(i<11){
    console.log("the number :" + i);
    i++
}



let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}

console.log(sum);


let numbers = [1, 2, 3, 4, 5];

let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

console.log(largest);


let number= [1, 2, 3, 4, 5];

let summ = 0;

for (let i = 0; i < number.length; i++) {
    summ = summ + number[i];
}

let average = summ / number.length;

console.log(average);


let num = 5;
let factorial = 1;

for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
}

console.log(factorial);


let nums = 10;

let a = 0;
let b = 1;

for (let i = 0; a <= nums; i++) {
    console.log(a);

    let next = a + b;
    a = b;
    b = next;
}



let numm = 20;

for (let i = 2; i <= numm; i++) {

    let isPrime = true;

    for (let j = 2; j < i; j++) {

        if (i % j === 0) {
            isPrime = false;
        }

    }

    if (isPrime) {
        console.log(i);
    }
}


