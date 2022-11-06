function createAlertElement(message){
    const mainDiv = document.getElementById('main');
    const createDIV = document.createElement("div");
    createDIV.className = "alert"
    const updateTextNode = document.createTextNode(message);
    
    createDIV.append(updateTextNode);
    main.prepend(createDIV)
};

createAlertElement("Food is Updated!");

