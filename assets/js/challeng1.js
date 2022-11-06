const favFood = ['Briayani','Kadi Chicken','Meean Kulumbu','Chicken 65'];
let despFood = document.getElementById("food-container");
const favFoodFragment =  document.createDocumentFragment();

favFood.forEach((food)=>{

    const list = document.createElement("li");

    list.textContent = food;
    list.className = "food-item";

    favFoodFragment.append(list);

});

despFood.append(favFoodFragment);