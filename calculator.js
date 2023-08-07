// document.querySelectorAll(".number").onclick = addToInput(); 
var inputStringAdded = "";
var inputString =document.getElementById("calc-input");
function addToInput(key){
    // console.log(key);
    inputStringAdded += key;
    inputString.value = inputStringAdded;
}

function resetInput(){
    inputStringAdded = "";
    inputString.value = inputStringAdded;
}

function evaluation(){
    var result = eval(inputStringAdded);
    inputString.value = result;
    inputStringAdded = result;
}