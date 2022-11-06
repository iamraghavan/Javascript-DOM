// document.getElementById();
// const eleh1 = document.getElementById('heading');
// eleh1.innerText = "";
// console.log(eleh1.innerText);

let inputFood = document.getElementById("getInputFood");
let inputBtn = document.getElementById("btnSave");
let despResponse = document.getElementById("response");

// console.log(inputFood, inputBtn);

inputBtn.addEventListener("click", () =>{

    despResponse.innerText = inputFood.value

    // console.log(inputFood.value);
    document.write(inputFood.value);

});