const inputElement = document.querySelector(".inputName-container input");

/* You can get attributes value by DOT Notation */
console.log(typeof(inputElement));    
// let a = inputElement.value = "Love you";
// console.log(a);


inputElement.setAttribute("value", "Enter Your Some Value");