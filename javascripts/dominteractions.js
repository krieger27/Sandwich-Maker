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

//when you select none any checked need to deselect, 
// when make a selection if none and another option is checked none needs to clear,
// if none is selected the category needs to be cleared out
//only if something is checked should you be able to add to total
function clearCheckboxes (div) {
    let checkCheckboxes = div.getElementsByClassName(div.id);
    for (let i=0; i<checkCheckboxes.length; i++) {
        sandwichMaker.clearCategoryTotal(div.id, checkCheckboxes[i]);
        checkCheckboxes[i].checked = false;
    }
}

menu.addEventListener("change", function(){
    let category = event.target.closest("div");
    let none = category.getElementsByClassName("none");
     if(event.target.value ==="none") {
        console.log( "you pressed none");
        clearCheckboxes(category);
    } else {
        none[0].checked=false;
    }
    if (!event.target.checked){
        sandwichMaker.removeIngredient(category.id, event.target.value);
    } else if (event.target.checked) {
        sandwichMaker.addIngredient(category.id, event.target.value);
        // if (none[0].checked) {
        //     none[0].checked = false;
        // }
}});


let sandwichOutput = function (sandwichObject){
    let sandwichString = "";
    for(let ingredient in sandwichObject) 
        for(let i =0; i <sandwichObject[ingredient].length; i ++){
            sandwichString += `${sandwichObject[ingredient][i]} `;
        }
        return sandwichString;
    };
 


