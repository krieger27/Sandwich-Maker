"use strict";

let meatPrices = {
    "turkey": 0.19,
    "ham": 0.25,
    "bacon": 0.30,
    "none": 0,
};

module.exports.getMeatPrice = function(meatType){
    return meatPrices[meatType];
};