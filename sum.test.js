const sum = require('./sum');

test('canary test', () => 
  expect(true).toBe(true));

test('adds 1 + 2 to equal 3', () => {
  // positive test
  expect(sum(1, 2)).toBe(3);
});    