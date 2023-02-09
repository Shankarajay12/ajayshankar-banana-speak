var translateButton= document.getElementById('btn-translate');
var txtInput=document.getElementById("txt-input");

var output=document.getElementById("output");


function clickEvent(){
   
    output.innerText="asd asdjas dad"+txtInput.value;
};

translateButton.addEventListener("click",clickEvent)
console.log(txtInput);






