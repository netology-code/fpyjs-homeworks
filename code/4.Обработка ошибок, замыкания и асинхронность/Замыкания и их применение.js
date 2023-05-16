function counter(initialValue){
    let counter = initialValue;
    return () => {
        counter++
        return counter;
    }
}

let counterResult = counter(0);
console.log(counterResult());
console.log(counterResult());
console.log(counterResult());
console.log(counterResult());

let otherCounterResult = counter(10);
console.log(otherCounterResult());
console.log(otherCounterResult());
console.log(otherCounterResult());
console.log(otherCounterResult());

console.log(counterResult());
console.log(counterResult());

console.log(otherCounterResult());
