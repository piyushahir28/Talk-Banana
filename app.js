var textArea = document.querySelector("#textArea");
var btnClick = document.querySelector("#btn-click");
var divOutput = document.querySelector("#div-opt")

const apiUrl = "https://api.funtranslations.com/translate/minion.json?text=";

function catchEventHandler(error){
   console.log("Oops! Error occured..." + error);
   alert("Oops! Some error occured. Please, try again after some time");   
}

function translate(){
   inputText = textArea.value;
   var url = apiUrl + inputText;
   fetch(url).then(response => response.json()).then(json => {
      divOutput.innerHTML = json.contents.translated
   }).catch(catchEventHandler);
}

btnClick.addEventListener("click", translate);