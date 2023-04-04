// discount 15% for greater then equal 100 and discount 12% for less then 100

const promotionPrice = (originalPrice) => {
    if (originalPrice >= 100) {
        return originalPrice - (15 / 100) * originalPrice;
    } else {
        return originalPrice - (12 / 100) * originalPrice;
    }
};

module.exports = promotionPrice;
