// 10% discount for pre-sale

const preSalePrice = (originalPrice) => {
    return originalPrice - (10 / 100) * originalPrice;
};

module.exports = preSalePrice;
