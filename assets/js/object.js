// Object Example

const person = {
    name : 'John', // Properties
    place : 'Chennai', // Properties

    grreetUser(){
        return  `Hello, My Name is ${person.name} and i am Coming From ${person.place}`
        // return  `Hello, My Name is ${this.name} and i am Coming From ${this.place}`
    },

};

// person.name = "Raghavan";
// person.place = "Trichy";

// Get The User Values dynamically
// console.log(window);

/* Get User Name */ 
const getName = prompt("What is Your Name ?");
const getPlace = prompt("Where are you coming from ?");
// console.log(getName);
// console.log(getPlace);

person.name = getName;
person.place = getPlace;

// let testing = person.grreetUser();  
// console.log(testing);


// Print to Document
// document.body.innerHTML = `<h1>${testing}</h1>`;
// document.body.innerHTML = `<p>${testing}</p>`;
// document.write(testing);

document.write(person.grreetUser());