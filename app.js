var translateButton= document.getElementById('btn-translate');
var txtInput=document.getElementById("txt-input");
var output=document.getElementById("output");

//var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverURL="https://api.funtranslations.com/translate/minion.json";

function getTranslatedURL(text){
    return  serverURL+"?"+"text="+text;
}

function errorOccured( error)
{
    console.log("Error Occured"+error);
    alert("Someting wroung with the serve ! Please try after sometime")
}


function clickEvent(){
   
    var inputText=txtInput.value;
    
    fetch(getTranslatedURL(inputText))
    .then(response=>response.json())
    .then(json=>{
        var outputText=json.contents.translated;
        output.innerHTML=outputText;
    })
    .catch(errorOccured);
};

translateButton.addEventListener("click",clickEvent)
console.log(txtInput);






