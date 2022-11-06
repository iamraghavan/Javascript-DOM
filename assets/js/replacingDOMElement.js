const despFood = document.getElementById("food-container");

const querySelectList = document.querySelector('.food-container :first-child');
// console.log(querySelectList);

const ElList = document.createElement("li");
ElList.textContent = 'Paruppu Rasam';
ElList.className = "food-item";

// replaceWith
/*Replaces node with nodes, while replacing strings in nodes with equivalent Text nodes.*/

// querySelectList.replaceWith(ElList);

/* Old Method */
// querySelectList.parentNode.replaceChild(ElList, querySelectList);

// querySelectList.replaceWith("Text 1","text 2");
querySelectList.replaceChildren("Text 1","text 2");