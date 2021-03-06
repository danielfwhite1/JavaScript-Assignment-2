// while loop that prints even numbers 0-100
let i = 0;

while (i <= 100) {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++;
}

// while loop that prints every 3rd number going backwards 100-0
let j = 100;

while (j - 3 >= 0) {
    j -= 3;
    console.log(j);
}

// for loop that prints every other number 1-100
for (let i = 1; i <= 100; i += 2) {
    console.log(i);
}

// for loop that prints every number 0-100, divisible by 3, print "Hello", divisible by 5 print "World"
// divisible by 3 & 5, print "Hello World", else print number
for (let i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("Hello World");
    } else if (i % 3 == 0) {
        console.log("Hello");
    } else if (i % 5 == 0) {
        console.log("World");
    } else {
        console.log(i);
    }
}