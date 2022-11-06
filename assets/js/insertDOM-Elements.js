const despFood = document.getElementById("food-container");

// const list = document.createElement("li");
// list.textContent = "Maagi";
// list.className = "food-item";
// despFood.append(list);

let foodItemDesp = "Idli and Vada";

((food)=>{
    const list = document.createElement("li");
    list.textContent = food;
    list.className = "food-item";
    despFood.append(list); //Append
    // despFood.prepend(list); //Prepend
    // despFood.before(list); //Before
    // despFood.after(list); //After
})(foodItemDesp);


// for(let i=0; i<foodItemDesp.length; i++) {
//     ((food)=>{
//         const list = document.createElement("li");
//         list.textContent = food;
//         list.className = "food-item";
//         despFood.append(list); //Append
//         // despFood.prepend(list); //Prepend
//         // despFood.before(list); //Before
//         // despFood.after(list); //After
//     })(foodItemDesp);
// }
