const foodCont = document.querySelector("#food-container li");
// console.log(foodCont.innerText);

/* Parent Node */
let parentNode = foodCont.parentNode;
console.log(parentNode);

/* Parent Element */
let parentElement = foodCont.parentElement.parentElement;
console.log(parentElement);

// Document is one type of Node (Node Will be Anything)
console.log(document.nodeType);
