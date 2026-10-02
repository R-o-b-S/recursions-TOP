function fibonacciR (n) {

    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const sequence = fibonacciR(n - 1);
    const nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    return [...sequence, nextNumber];

}

console.log(fibonacciR(8));

module.exports = fibonacciR;