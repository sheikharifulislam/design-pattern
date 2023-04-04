const defaultPrice = require("./defaultPrice");
const blackFridayPrice = require("./blackFridayPrice");
const preSalePrice = require("./preSalePrice");
const promotionPrice = require("./promotionPrice");

const getPrice = (price, status) => {
    const priceStrategyes = {
        default: defaultPrice,
        "black-friday": blackFridayPrice,
        "pre-sale": preSalePrice,
        promotion: promotionPrice,
    };

    return priceStrategyes[status](price);
};

const result = getPrice(100, "pre-sale");
console.log(result);
