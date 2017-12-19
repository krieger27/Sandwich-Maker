"use strict";

let menu = document.getElementById("menu");
let submit = document.getElementById("submit");
let bread = document.getElementById("bread");
let cheese = document.getElementById("cheese");
let condiments = document.getElementById("condiments");
let meat = document.getElementById("meat");
let veggies = document.getElementById("veggies");
let sandwichMaker= require("./sandwichMaker");

//For submit button
submit.addEventListener('click', function(){
    console.log('button clicked');
});

menu.addEventListener("click", function(){
    sandwichMaker.addIngredient(event.target.closest("div").id, event.target.value);
});




