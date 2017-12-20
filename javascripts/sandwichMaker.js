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
module.exports.addIngredient = function (id, value){
    if (id ==="bread") {
        sandwich[id].push(value);
        total +=bread.addBread(value);
    } if (id ==="cheese") {
        sandwich[id].push(value);
        total += cheese.addCheese(value);
    } if (id==="condiments") {
        sandwich[id].push(value);
        total +=bread.addBread(value);
    } if (id==="meat") {
        sandwich[id].push(value);
        total += meat.addMeat(value);
    } if (id==="veggies") {
        sandwich[id].push(value);
    }
    console.log("total", total);
     return total;
};

module.exports.getTotal = function(){
    return total;
};

module.exports.getSandwich = function(){
    return sandwich;
};
