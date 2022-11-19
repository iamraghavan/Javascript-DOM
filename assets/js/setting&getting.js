const inputElement = document.querySelector(".inputName-container input");

// setting the attributes
/* Element.setAttribute("name", "display Name (Full Name)") */
inputElement.setAttribute("value", "Enter Your Some Value");

// Getting the attributes
const isLive = inputElement.getAttribute("isAlive");
const hobbiesDOM = inputElement.getAttribute("hobbies");

console.log(isLive, hobbiesDOM);

/* List all attributes of the Elements */
console.log(inputElement.attributes);

/* Find the index of the first attribute */
console.log(inputElement.attributes[5]);

/* attributes by property name */
console.log(inputElement.attributes.place.value); //Dot Notation

/* attributes by Bracket Notation */
console.log(inputElement.attributes["hobbies"].value);

// Methods
/* Check for attribute existence */
var isTrue = inputElement.hasAttribute("Place");
console.log(isTrue);

var isFalse = inputElement.hasAttribute("Age");
console.log(isFalse);

/* Remove Existeing attributes */
inputElement.removeAttribute("isAlive");

var checkIsAlive = inputElement.hasAttribute("isAlive"); // ----- Testing Purpose ------
console.log(checkIsAlive);

/* Getting the CSS Style attributes */
console.log(inputElement.getAttribute("style"));

/* CSS Style Declaration ---> instances of values */
console.log(inputElement.style);

/* Data Attributes */
