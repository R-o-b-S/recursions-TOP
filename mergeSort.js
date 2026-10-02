function mergeSort (array) {
    if (array.length === 0) {
        return [];
    } else if (array.length === 1){ 
        return [array[0]];
    } else {
        const half = Math.floor(array.length/2);
        const left = mergeSort(array.slice(0,half));
        const right = mergeSort(array.slice(half,array.length));
        const newArray = [];
        while(left.length && right.length){
            if (left[0] < right[0]){
                newArray.push(left[0]);
                left.shift();
            } else {
                newArray.push(right[0]);
                right.shift();
            }
        }
        return [...newArray, ...left, ...right];
    }
}

module.exports = mergeSort;
