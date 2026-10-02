const fibonacciR = require('./fibonacciR');

test('fibonacciR (1)', () => {
  expect(fibonacciR(3)).toStrictEqual([0,1,1]);
});

test('fibonacciR (2)', () => {
  expect(fibonacciR(8)).toStrictEqual([0,1,1,2,3,5,8,13]);
});
