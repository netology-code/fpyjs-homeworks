let count = 0;
function fibo(n) {
    console.log("я вызвался", count++);
    if(n < 2) {
        return n;
    }
    return fibo(n - 1) + fibo(n - 2);
}

// 1 1 2 3 5 8
/* console.log(fibo(2));
console.log(fibo(3));
console.log(fibo(4));
console.log(fibo(5)); */
console.log(fibo(6));