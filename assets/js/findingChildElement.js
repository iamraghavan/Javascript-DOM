const foodCont = document.querySelector(".food-container");

let listElement = document.querySelectorAll('li');
// console.log(listElement.length);

/* .children */
// console.log(foodCont.children, foodCont.children.length);

/* childNodes */
// console.log(foodCont.childNodes);

/* First/First Child Element */
console.log(foodCont.firstChild);
console.log(foodCont.firstElementChild);

/* Last/Last Child Element */
console.log(foodCont.lastChild);
console.log(foodCont.lastElementChild.innerText);
