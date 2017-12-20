"use strict";

let condimentsPrices = {
    "ketchup": 0.19,
    "mustard": 0.25,
    "mayo": 0.30,
    "none": 0,
};

module.exports.getCondimentsPrice = function(condimentsType){
    return condimentsPrices[condimentsType];
};