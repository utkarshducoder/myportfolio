var baseValue= document.querySelector("#base");
var perpedicularValue= document.querySelector("#perpendicular");
var calculateBtn= document.querySelector("#calculate-hypo");
var outputMessage= document.querySelector("#output");

calculateBtn.addEventListener('click', calculateHypotenuse);

function calculateHypotenuse(){
    var hypotenuse= hypotenuseLength(Number(baseValue.value), Number(perpedicularValue.value));

    var hypotenuseValue= Math.sqrt(hypotenuse);
    outputMessage.innerText= "Hypotenuse is: " + hypotenuseValue;
}

function hypotenuseLength(b,p){
    var hypotenuse= b*b + p*p;
    return hypotenuse;
}