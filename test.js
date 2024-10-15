const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('1 euro should be 1.9 dollars', () => {
    expect(fromEuroToDollar(1)).toBe(1.09);
});

test('1 dollar should be 149 yen', () => {
    expect(fromDollarToYen(1)).toBe(149);
});

test('1000 yen should be 5.1 pounds', () => {
    expect(fromYenToPound(1000)).toBeCloseTo(5.1);
});