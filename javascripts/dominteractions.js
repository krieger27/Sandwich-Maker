"use strict";

let menu = document.getElementById("menu");
let submit = document.getElementById("submit");
let bread = document.getElementById("bread");
let cheese = document.getElementById("cheese");
let condiments = document.getElementById("condiments");
let meat = document.getElementById("meat");
let veggies = document.getElementById("veggies");
let output = document.getElementById("output");
let sandwichMaker= require("./sandwichMaker");

//For submit button
submit.addEventListener('click', function(){
    output.innerHTML= `${sandwichMaker.getTotal()} ${sandwichOutput(sandwichMaker.getSandwich())}`;
});

menu.addEventListener("change", function(){
    sandwichMaker.addIngredient(event.target.closest("div").id, event.target.value);
});

let sandwichOutput = function (sandwichObject){
    let sandwichString = "";
    for(let ingredient in sandwichObject) {
        console.log(sandwichObject[ingredient]);
        for(let i =0; i <sandwichObject[ingredient].length; i ++){
            sandwichString += `${sandwichObject[ingredient][i]} `;
        }
    }
    return sandwichString;
};


