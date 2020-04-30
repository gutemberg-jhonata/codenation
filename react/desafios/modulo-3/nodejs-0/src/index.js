'use strict'

const fibonacci = () => {
    let fibonacciSeq = new Array(0, 1);
    for (let i = 1; i < fibonacciSeq.length; i++) {
        if (fibonacciSeq[i] >= 350)
            break;
        fibonacciSeq.push(fibonacciSeq[i - 1] + fibonacciSeq[i]);
    }
    return fibonacciSeq;
}

const isFibonnaci = (num) => {
    if (num == null || num == undefined)
        return false;
    const n1 = 5 * Math.pow(num,2) + 4;
    const n2 = 5 * Math.pow(num,2) - 4;
    const sqrt1 = Math.sqrt(n1);
    const sqrt2 = Math.sqrt(n2);
    if (Math.pow(sqrt1.toFixed(0), 2) == n1 || Math.pow(sqrt2.toFixed(0), 2) == n2) {
        return true;
    }
    return false;
}

module.exports = {
    fibonacci,
    isFibonnaci
}
