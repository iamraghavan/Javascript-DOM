let inputFood = document.getElementById("input-food");
let inputBtn = document.getElementById("input-btn");
let despFood = document.getElementById("food-container");

inputBtn.addEventListener("click", () => {
    // console.log(inputFood.value);
    despFood.innerHTML += `<li class="food-item">${inputFood.value.toUpperCase()}</li>`;
});

// getElementByClassName
/* 
To Get The Mutliple HTML Element Values by using the getElementsByClassName Method 
syntax --------> getElementsByClassName(classname)
*/
const foodItems = despFood.getElementsByClassName("food-item");
// console.log(foodItems[0].innerText);

// let a = [].map.call(foodItems, (food) => food.textContent);
// console.log(a);

// Loop The FoodItems
/* 
for (let i = 0; i < foodItems.length; i++){
    console.log(foodItems[i].innerText);
}  
*/