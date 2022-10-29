// To Check DOM Loaded in Browser
// document.addEventListener("DOMContentLoaded", ()=>{
//     // alert("DOM Loaded Successfully")
//     const myApp = document.getElementById('app');
//     myApp.innerHTML = `<h1>I have Change</h1>`
//     console.log(myApp);

// })

// const myApp = document.getElementById('app');
// myApp.innerHTML = `<h1>I have Change</h1>`
// console.log(myApp);

document.addEventListener("DOMContentLoaded", ()=>{


    const myApp = document.getElementById('app');
    const myHeading = myApp.children[0];
    const myImage = myApp.children[1];
     myHeading.innerHTML = `<h1>I have Change</h1>`
    console.log(myHeading,myImage);

    console.log(myImage.offsetWidth,myImage.offsetHeight)
    console.log(`image size: ${myImage.offsetHeight},${myImage.offsetWidth}` )
    
});




window.addEventListener('load', ()=>{
    const myApp = document.getElementById('app');
    const myHeading = myApp.children[0];
    const myImage = myApp.children[1];
     myHeading.innerHTML = `<h1>I have Change</h1>`
    console.log(myHeading,myImage);

    console.log(myImage.offsetWidth,myImage.offsetHeight)
    console.log(`image size: ${myImage.offsetHeight},${myImage.offsetWidth}`)
});


// window.onbeforeunload()
