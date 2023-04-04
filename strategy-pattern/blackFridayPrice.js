const blackFridayPrice = (originalPrice) => {
    if (originalPrice >= 200 && originalPrice <= 300) {
        return originalPrice((20 / 100) * originalPrice);
    } else if (originalPrice >= 500) {
        return originalPrice((40 / 100) * originalPrice);
    } else {
        return originalPrice((10 / 100) * originalPrice);
    }
};

module.exports = blackFridayPrice;
