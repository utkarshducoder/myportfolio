var inputs = document.querySelectorAll('.angle-input');
var isTriangleBtn = document.querySelector("#is-triangle-btn");
var output = document.querySelector("#output");

function CalculateSumOfAngles(angle1, angle2, angle3){  //takes input of angles
    var sumOfAngles = angle1 + angle2 + angle3;   //calculate the sum of angles
    //console.log(sumOfAngles);
    return sumOfAngles; 

}

function isTriangle(){
    var sumOfAngles = CalculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));    //converts the string(all angles) into number 
    if(sumOfAngles === 180){
       
        output.innerText = "yippyyy, The angles form a perfect triangle";
    }   
    else{
       
        output.innerText = "No, the angles don't form a tringle";
    }
}

isTriangleBtn.addEventListener("click",isTriangle);