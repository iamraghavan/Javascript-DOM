let inputFood = document.getElementById("input-food");
let inputBtn = document.getElementById("input-btn");
let despFood = document.getElementById("food-container");

inputBtn.addEventListener("click", () => {

    const list = document.createElement("li");
    const textNode = document.createTextNode(inputFood.value)
    // const comment = document.createComment("Create a li");



    list.className = "food-item";

    list.append(textNode);
    // list.append(comment);
    despFood.append(list);
    

    // despFood.innerHTML += `<li class="food-item">${inputFood.value.toUpperCase()}</li>`;
});
