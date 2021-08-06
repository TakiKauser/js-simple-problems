// fibonacci element
function fibonacci(n){
    if(n == 0){
        return 0;
    }
    if(n == 1){
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

const fiboElement = fibonacci(7);
console.log(fiboElement);

// fibonacci series
function fibonacciSeries(n){
    if(n == 0){
        return [0];
    }
    if(n == 1){
        return [0, 1];
    }
    const fibo = fibonacciSeries(n - 1);
    fibo[n] = fibo[n - 1] + fibo[n - 2];
    return fibo;
}

const fiboSeries = fibonacciSeries(11);
console.log(fiboSeries);
