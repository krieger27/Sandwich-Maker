"use strict";

let cheesePrices = {
    "american": 0.19,
    "pepperjack": 0.25,
    "munster": 0.30,
    "none": 0,
};

module.exports.getCheesePrice = function(cheeseType){
    return cheesePrices[cheeseType];
};
