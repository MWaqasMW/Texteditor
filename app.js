function boldClick() {

    var input = document.getElementById("inputText");
    output = input.style.fontWeight = "750";
}

function italicClick() {
    var input = document.getElementById("inputText");
    output = input.style.fontStyle = "italic";
}

function underLine() {
    var input = document.getElementById("inputText");
    output = input.style.textDecoration = "underline";
}
function dropDown() {

    var input = document.getElementById("inputText");
    var dropdown = document.getElementById("textColor").value;
   
    var output= input.style.color= dropdown;


}


function backGround() {
    var input = document.getElementById("inputText");
    var dropdown = document.getElementById("bgColor").value;
   
    var output= input.style.backgroundColor= dropdown;
}

function alingLeft() {
    var input = document.getElementById("inputText");
    var output = input.style.textAlign = "left"
}
function alingcenter() {
    var input = document.getElementById("inputText");
    var output = input.style.textAlign = "center"
}
function alingright() {
    var input = document.getElementById("inputText");
    var output = input.style.textAlign = "right"
}


function fontSize() {
    var input = document.getElementById("inputText");
    var font = document.getElementById("font").value;
    var output = input.style.fontSize = font;

}
function fontStyle(){
    var input = document.getElementById("inputText");
    var fontstyle = document.getElementById("fontstyle").value;
    var output = input.style.fontFamily = fontstyle;
}




function letCase(){
    var input = document.getElementById("inputText");
var letterCase=document.getElementById("letterCase").value;
var output = input.style.textTransform = letterCase;
}