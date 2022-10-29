// console.dir(document);
// console.table(document);
// console.log(document.documentElement);
// console.log(document.body);
// console.log(document.head);


// console.log(document.body.constructor.name);
// console.log(document.body instanceof HTMLElement);
// console.log(document.body instanceof HTMLBodyElement);
// console.log(document.body instanceof Node);
// console.log(document.body instanceof EventTarget);
// console.log(document.body.nodeName);

// 1. Example

// const getUserAge = prompt('Enter Your Age');

// if(getUserAge>=18){
//     alert('You are eligible for Voting');
// }else{
//     alert('You are not eligible for Voting');
// }


// 2. Example

const getUserName = prompt('Enter Your Name');
const getUserAge = prompt('Enter Your Age');
const getUserAddress = prompt('Enter Your Address');


const personalDetails ={
    Name: '',
    Age: '' ,
    Address: '',

}

personalDetails.Name = getUserName;
personalDetails.Age = getUserAge;
personalDetails.Address = getUserAddress;


var dispDetails = ((getParameters)=>{

    console.log(`Name : ${getParameters.Name}
                 Age  : ${getParameters.Age}
                 Address : ${getParameters.Address}`);

    

})(personalDetails);

// console.log(document.body.children[0].children[1]);


