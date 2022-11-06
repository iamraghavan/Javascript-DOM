const foodcontElement = document.getElementById("food-container");

// Trick --->
console.time("a")

for(let i=1; i<=1000; i++) {

    const createList = document.createElement('li');
    createList.textContent = `food item ${i}`;
    createList.className = 'food-item';

    foodcontElement.append(createList)

} 

console.timeEnd("a");

// Method 1
console.time("b")
const fragement = document.createDocumentFragment();
for(let i=1; i<=1000; i++) {

    const createList = document.createElement('li');
    createList.textContent = `food item ${i}`;
    createList.className = 'food-item';

    fragement.append(createList);

} 

foodcontElement.append(fragement);
console.timeEnd("b");




// console.dir(fragement);