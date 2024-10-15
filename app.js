// Tasas de cambio 
const dollarToYen = 149; // 1 USD = 149 JPY 10/24
const yenToPound = 0.0051; // 1 JPY = 0.0051 GBP / 1 GBP = 195 JPY

const fromEuroToDollar = (euroAmount) => {
    const exchangeRate = 1.09;
    return euroAmount * exchangeRate;
};

const fromDollarToYen = (dollarAmount) => {
    return dollarAmount * dollarToYen;
};

const fromYenToPound = (yenAmount) => {
    return yenAmount * yenToPound;
};

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };