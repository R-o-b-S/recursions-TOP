const mergeSort = require("./mergeSort");

test('mergeSort (1)', () => {
    expect(mergeSort([])).toStrictEqual([]);
});

test('mergeSort (2)', () => {
    expect(mergeSort([3])).toStrictEqual([3]);
});

test('mergeSort (3)', () => {
    expect(mergeSort([1,2,3,4,5])).toStrictEqual([1,2,3,4,5]);
});

test('mergeSort (4)', () => {
    expect(mergeSort([3,2,1,13,8,5,0,1])).toStrictEqual([0,1,1,2,3,5,8,13]);
});

test('mergeSort (5)', () => {
    expect(mergeSort([105,79,100,110])).toStrictEqual([79,100,105,110]);
});