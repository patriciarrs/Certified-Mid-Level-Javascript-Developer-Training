// 1. Number List
const numbers = [23, 54, 32, 87, 47, 15, 98, 6, 63, 41];

// 2. Even/Odd Counter
let evenCount = 0;
let oddCount = 0;

numbers.forEach((number) => {
    if (number % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
});

console.log(`Even numbers: ${evenCount}`);
console.log(`Odd numbers: ${oddCount}`);

// 3. Range Classifier
let low = 0;
let medium = 0;
let high = 0;

numbers.forEach((number) => {
    if (number < 30) {
        low++;
    } else if(number > 70) {
        high++;
    } else {
        medium++;
    }
});

console.log(`Low numbers: ${low}`);
console.log(`Medium numbers: ${medium}`);
console.log(`High numbers: ${high}`);

// 4. Sum and Average
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(`Sum: ${sum}`);

const average = (sum / numbers.length).toFixed(2);
console.log(`Average: ${average}`);