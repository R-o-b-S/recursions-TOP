function fibonacci (n) {
    const sequence = [];
    for (let i=0; i<n; i++){
        if (i===0) {
            sequence.push(0);
        } else if (i === 1) {
            sequence.push(1);
        } else {
            const sum = sequence[i-1]+sequence[i-2];
            sequence.push(sum);
        }
    }
    return sequence;
}

module.exports = fibonacci;