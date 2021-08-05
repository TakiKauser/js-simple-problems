const numbers = [2, 1, 4, 5, 9, 7, 8, 6, 3, 0];
let sum1 = 0;

for (let i = 0; i < numbers.length; i++){
    sum1 += numbers[i];
}
// console.log(sum1);

// using function
function arraySum(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}
const total = arraySum(numbers);
console.log(total);
