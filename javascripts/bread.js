"use strict";

let breadCost = 0;
let breadPrices = {
    "white": 0.19,
    "wheat": 0.25,
    "rye": 0.30,
    "none": 0,
};

module.exports.getBreadPrice = (breadType) => {
    return breadPrices[breadType];
};
// module.exports.addBread = function(breadType){
//     breadCost += breadPrices[breadType];
//     console.log(breadCost);
//     return breadCost;
// };

// module.exports.removeBread = (breadType) => {
//     breadCost -= breadPrices[breadType];
//     return breadCost;
// };


// module.exports.breadTotal = () => breadCost;
