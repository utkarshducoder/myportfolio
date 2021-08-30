var baseValue= document.querySelector("#base");
var heightValue= document.querySelector("#height");
var calculateBtn= document.querySelector("#calculate-area");
var outputEl= document.querySelector("#output");

calculateBtn.addEventListener('click', calculateArea);

function calculateArea(){
    var area= areaOfTriangle(Number(baseValue.value), Number(heightValue.value));

    outputEl.innerText= "Area of triangle is: " + area;
}

function areaOfTriangle(b,h){
    var area= (b*h)/2;
    return area;
}


