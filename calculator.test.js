const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);

    expected = 10;
    actual = sum(5, 5);
    expect(actual).toBe(expected);
  });  

  test('can add two large positive numbers', () => { 
    expected = 88;
    actual = sum(66, 22);
    expect(actual).toBe(expected);

    expected = 100;
    actual = sum(55, 45);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -20;
    actual = sum(-5, -15);
    expect(actual).toBe(expected);

    expected = -88;
    actual = sum(-22, -66);
    expect(actual).toBe(expected);
    
  });

  test('can add zero', () => {
    expected = 10;
    actual = sum(10, 0);
    expect(actual).toBe(expected);

    expected = 8;
    actual = sum(8, 0);
    expect(actual).toBe(expected);
    
  });

});

describe('subtract', () => {
  test('can subtract two small positive numbers', () => {
  expected = 8;
    actual = subtract(15, 7);
    expect(actual).toBe(expected);

    expected = 5;
    actual = subtract(10, 5);
    expect(actual).toBe(expected);
  });
});

describe('multiply', () => {
  test('can multiply two small positive numbers', () => {
  expected = 10;
    actual = multiply(2, 5);
    expect(actual).toBe(expected);

    expected = 16;
    actual = multiply(2, 8);
    expect(actual).toBe(expected);
  });
});

describe('divide', () => {
  test('can divide two small positive numbers', () => {
  expected = 2;
    actual = divide(8, 4);
    expect(actual).toBe(expected);

    expected = 5;
    actual = divide(15, 3);
    expect(actual).toBe(expected);
  });
});

describe('modulus', () => {
  test('can do a modulus two small positive numbers', () => {
  expected = 2;
    actual = modulus(8, 3);
    expect(actual).toBe(expected);

    expected = 1;
    actual = modulus(9, 2);
    expect(actual).toBe(expected);
  });
});

describe('even', () => {

});

describe('odd', () => {

});
