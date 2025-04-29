document.querySelector("#display").value="0";
function appendToDisplay(buttonvalue){
 if(document.querySelector("#display").value=="0"){
    document.querySelector("#display").value="";
    document.querySelector("#display").value+=buttonvalue;
 }
 else{
    document.querySelector("#display").value+=buttonvalue;
 }
};

function allClearFromDisplay(){
    document.querySelector("#display").value="0";
}

function deleteLast() {
    let currentDisplay = document.getElementById('display').value;
    if(currentDisplay.length==1){
        document.getElementById('display').value="0";
    }
    else if(currentDisplay!='0'){
        document.getElementById('display').value = currentDisplay.slice(0, -1);
    }
}
 function calculate(){
    result=eval(document.querySelector("#display").value);
    document.querySelector("#display").value=result;
}