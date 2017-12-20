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
        total +=bread.addBread(value);
        break;
        case "meat":
        total +=meat.addMeat(value);
        break;
        case"cheese":
        total+=cheese.addCheese(value);
        break;
        case "condiments":
        total +=condiments.addCondiments(value);
        break;
        case "veggies":
        total += veggies.addVeggies(value);
    }
    console.log("total", total);
    return total;
};

module.exports.removeIngredient = (id, value) => {
    sandwich[id].splice(sandwich[id].indexOf(value), 1);
    switch (id) {
        case "bread":
        total -=bread.addBread(value);
        break;
        case "meat":
        total -=meat.addMeat(value);
        break;
        case"cheese":
        total-=cheese.addCheese(value);
        break;
        case "condiments":
        total -=condiments.addCondiments(value);
        break;
        case "veggies":
        total -= veggies.addVeggies(value);
    }
    console.log("sandwich array", sandwich);
};

module.exports.getTotal = function(){
    return total;
};

module.exports.getSandwich = function(){
    return sandwich;
};
