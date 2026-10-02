const fibonacci = require('./fibonacci');

test('fibonacci (1)', () => {
  expect(fibonacci(3)).toStrictEqual([0,1,1]);
});

test('fibonacci (2)', () => {
  expect(fibonacci(8)).toStrictEqual([0,1,1,2,3,5,8,13]);
});