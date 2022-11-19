/* Task 1*/

const foodCont = document.querySelectorAll(".food-container li");
const emptFoodItem = [];

for(const item of foodCont){
    emptFoodItem.push(item.innerText)
}
console.log(emptFoodItem);

// Spread Operator

foodCont.forEach((foodInstance) => console.log("Food : " + foodInstance.nodeType));
const foodValue = [...foodCont].forEach((foodInstance) => console.log("Food : ", foodInstance));

/* Array.From */

let newArrayForm = Array.from(foodCont).forEach((foodInstance) => console.log("Food : ", foodInstance));
console.log(newArrayForm);