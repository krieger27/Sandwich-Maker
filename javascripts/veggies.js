"use strict";

let veggiesPrices = {
    "peppers": 0.19,
    "onions": 0.25,
    "lettuce": 0.30,
    "none": 0,
};

module.exports.getVeggiesPrice = function(veggiesType){
    return veggiesPrices[veggiesType];
};