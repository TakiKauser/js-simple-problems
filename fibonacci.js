// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

let fibonacci = [0, 1];
for (let i = 2; i <= 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
// console.log(fibonacci);

// using function
function fibonacciSeries(number) {
    if ((typeof number != "number") || (number <= 0)) {
        return "Error! Invalid Input Type!!!";
    }

    let fibonacci = [];
    if (number == 1) {
        fibonacci = [0];
    }
    else if (number == 2) {
        fibonacci = [0, 1];
    }
    else {
        fibonacci = [0, 1];
        for (let i = 2; i < number; i++) {
            fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        }
    }
    return fibonacci;
}

const fiboSeries = fibonacciSeries(3);
console.log(fiboSeries);