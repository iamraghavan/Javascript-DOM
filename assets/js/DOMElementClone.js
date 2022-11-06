const despFoods = document.getElementById("food-container");
const duplicateElements = document.getElementById("duplicateData")
const SyncElements = document.getElementById("elSync");

/* 
cloneNode ---> retrun the copy of node it will accept the true/false
cloneNode ---> (False) only clones the top of the element
*/
// let cloneEl = despFood.cloneNode();
// console.log(cloneEl);


/* cloneNode ---> (True) all the elements and its subtree are display */



SyncElements.addEventListener("click",()=>{
    duplicateElements.innerHTML="";

    let cloneElTrue = despFoods.cloneNode(true);
    duplicateElements.append(cloneElTrue);

});