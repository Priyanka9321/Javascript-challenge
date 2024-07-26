// DAY 4: Loops
// Activity 1 : For Loop
// Task 1
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Task 2
for (let i = 1; i <= 10; i++) {
    console.log(`5 * ${i} = ${i * 5}`);
}

// Activity 2 : While Loop
// Task 3
let sum = 0, i = 1;
while (i <= 10) {
    sum += i;
    i++;
}
console.log(`Sum of 1 to 10 numbers is ${sum}.`);

// Task 4
let num = 10
console.log("Printing number is decending order:");
while (num > 0) {
   console.log(`num is ${num}`); 
   num--;
}

// Activity 3 : Do...While Loop
// Task 5
i = 1;
do {
    console.log(`num is ${i}`);
    i++;
} while (i <= 5);

// Task 6
let factroial = 1;
i = 1;
do {
   factroial *= i; 
   console.log(`factroial of ${i} is ${factroial}`); 
   i++;
} while (i <= 10);

// Activity 4 : Nested Loop
// Task 7
for (let i = 1; i <= 5; i++) {
    let star = "";
    for (let j = 1; j <= i; j++) {
        star += "*";
    }
    console.log(star);
}
