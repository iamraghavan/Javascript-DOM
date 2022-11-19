let inputFood = document.getElementById("input-food");
let inputBtn = document.getElementById("input-btn");
let despFood = document.getElementById("food-container");

inputBtn.addEventListener("click", () => {

    const list = document.createElement("li");
    const divItem = document.createElement("div");
    const removeEl = document.createElement("div");

    list.append(removeEl);

    removeEl.parentElement.setAttribute('onclick', "removeItem(event)")

    removeEl.innerHTML = '<i class="fa fa-xmark"></i>';

    list.append(divItem)

    // const textNode = document.createTextNode(inputFood.value)
    divItem.textContent = inputFood.value;
    list.className = "food-item";

    despFood.append(list);
    list.append(divItem);
    list.append(removeEl);


});

function removeItem(event){

    let exList = event.target.parentNode.parentNode
    // Remove the Element
    exList.remove();

}


