"use strict";

require("./dominteractions");
let bread = require("./bread");
let meat = require("./meat");
let condiments = require("./condiments");
let cheese = require ("./cheese");
let veggies = require ("./veggies");

let total = 0;

let sandwich = {
    bread: [],
    cheese: [],
    meat: [],
    condiments: [],
    veggies:[]
};


//figure out how to make multiple based on ids
// module.exports.addIngredient = function (id, value){
//     if (id ==="bread") {
//         sandwich[id].push(value);
//         total +=bread.addBread(value);
//     } if (id ==="cheese") {
//         sandwich[id].push(value);
//         total += cheese.addCheese(value);
//     } if (id==="condiments") {
//         sandwich[id].push(value);
//         total +=condiments.addCondiments(value);
//     } if (id==="meat") {
//         sandwich[id].push(value);
//         total += meat.addMeat(value);
//     } if (id==="veggies") {
//         sandwich[id].push(value);
//     }
//     console.log("total", total);
//      return total;
// };

//Switch statement --did a way we did every time
module.exports.addIngredient = (id, value) => {
    sandwich[id].push(value);
    switch (id) {
        case "bread":
        total += bread.getBreadPrice(value);
        // total +=bread.breadTotal();
        break;
        case "meat":
        total +=meat.getMeatPrice(value);
        break;
        case "cheese":
        total+=cheese.getCheesePrice(value);
        break;
        case "condiments":
        total +=condiments.getCondimentsPrice(value);
        break;
        case "veggies":
        total += veggies.getVeggiesPrice(value);
    }
    console.log(total,"total");
    return total.toFixed(2);
};

module.exports.removeIngredient = (id, value) => {
    sandwich[id].splice(sandwich[id].indexOf(value), 1);
    console.log(sandwich, "this works like we think maybe");
    switch (id) {
        case "bread":
        total -=bread.getBreadPrice(value);
        break;
        case "meat":
        total -=meat.getMeatPrice(value);
        break;
        case "cheese":
        total-=cheese.getCheesePrice(value);
        break;
        case "condiments":
        total -=condiments.getCondimentsPrice(value);
        break;
        case "veggies":
        total -= veggies.getVeggiesPrice(value);
    }
    console.log("sandwich array", sandwich);
};

module.exports.noneClearIngredient = (id) => {
    sandwich[id]=[];
};

module.exports.getTotal = function(){
    return total.toFixed(2);
};

module.exports.clearCategoryTotal =(id, ingredient) => {
    if (ingredient.checked){
        switch (id){
        case "bread":
        total -= bread.getBreadPrice(ingredient.value).toFixed(2);
        break;
        case "meat":
        total -= meat.getMeatPrice(ingredient.value).toFixed(2);
        break;
        case "cheese":
        total -= cheese.getCheesePrice(ingredient.value).toFixed(2);
        break;
        case "condiments":
        total -= condiments.getCondimentsPrice(ingredient.value).toFixed(2);
        break;
        case "veggies":
        total -= veggies.getVeggiesPrice(ingredient.value).toFixed(2);
        break;
    }
    }
};
//     total -= bread.breadTotal();
// };

module.exports.getSandwich = function(){
    return sandwich;
};
