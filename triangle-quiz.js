var formData= document.querySelector("#form-data");
var submitBtn= document.querySelector("#submit-btn");
var outputMessage= document.querySelector(".output");

var correctAnswers= ["180°", "3", "A polygon", "Scalene Triangle", "Right"];


submitBtn.addEventListener('click', calculateScore);

function calculateScore(){
   var score=0;
   var i= 0;

   var formResult = new FormData(formData); //all the values of form will come here and not the index
   
   for (let answers of formResult.values()) { 
  
       if (answers === correctAnswers[i]){
           score = score+1;
       }
       i=i+1;
   }

   outputMessage.innerText= "You're Score is:" + score;
}