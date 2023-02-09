var translateButton= document.getElementById('btn-translate');
var txtInput=document.getElementById("txt-input");


function clickEvent(){
    console.log("clicked");
    console.log("input",txtInput.value)
};

translateButton.addEventListener("click",clickEvent)
console.log(txtInput);






