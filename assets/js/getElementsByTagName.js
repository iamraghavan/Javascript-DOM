/* getElementsByTagName */

let inputFood = document.getElementById("input-food");
let inputBtn = document.getElementById("input-btn");
let despFood = document.getElementById("food-container");

inputBtn.addEventListener("click", () => {
    despFood.innerHTML += `<li class="food-item">${inputFood.value.toUpperCase()}</li>`;
});

/* 
To Get a Multiple HTML Elements Values by using the HTML Tags.
syntax --------> getElementsByTagName(tagName)
*/

const foodItemsEl = despFood.getElementsByTagName('li');
// console.log(`i have ${foodItemsEl.length} items`);

// getElementsByName
/*
const GetInputName = document.getElementsByName("inputFoodName");
console.log(GetInputName);
*/