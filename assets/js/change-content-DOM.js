
const a =document.querySelector(".alert .alert-message");
// console.log(a);

// innerText
console.log(a.innerText);

// innerHTML
console.log(a.innerHTML);

// textContent
console.log(a.textContent);



// altering the content

// a.innerText = "<strong>👍Sucessfull</strong> Hello, i have been Modified!";
a.innerHTML = "<strong>👍Sucessfull</strong> Hello, i have been <i> Modified! </i>";

// a.textContent = "<strong>👍Sucessfull</strong> Hello, i have been Modified!";