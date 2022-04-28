"use strict";

let title= document.getElementById("title");

let a=localStorage.getItem("Data");
let info5=JSON.parse(a);

console.log(info5);

// dear.innerHTML=info5[0];

let cquestion=["When using the POST method, variables are displayed in the URL:",
"What is the correct way to add 1 to the $count variable?",
"Which of the functions is used to sort an array in descending order?",
"Which one of these variables has an illegal name?",
"How do you create a cookie in PHP?",
"How do you create an array in PHP?",
"What gets printed? $var = 'false'; if ($var) { echo 'true';} else { echo 'false';};"
]

let correctanswer=["False", "function myFunction()", "$count++;", "rsort()", "$my-Var", "setcookie()","$cars = array('Volvo', 'BMW', 'Toyota');" ,"true"];
let score=0;
function result(){


   


    for ( var i=0; i< correctanswer.length; i++){
        if(info5[i]==correctanswer[i]){ 
   score++;
   console.log("score is", score);
   if((score<=2)){
       
          title.innerHTML=`<h1> Hard Luck!! You Failed <br> You must study harder! </h1><br><h2> ${score} / 8 Questions</h2>`;
            title.style.color="red";
     } 
        else{
            title.innerHTML=`<h1>Congratulations!! You Passed </h1><br><h2> ${score} / 8 Questions</h2> `; 
          title.style.color="green";
           
        }
      
    }else if (info5[i]!=correctanswer[i])
    if (score==0) {
        title.innerHTML=`<h1> Hard Luck!! You Failed <br> You must study harder! </h1><br><h2> ${score} / 8 Questions</h2>`;
        title.style.color="red";
     } 
}}

result();

    document.getElementById("q1").innerHTML=cquestion[0];
    document.getElementById("q2").innerHTML=cquestion[1];
    document.getElementById("q3").innerHTML=cquestion[2];
    document.getElementById("q4").innerHTML=cquestion[3];
    document.getElementById("q5").innerHTML=cquestion[4];
    document.getElementById("q6").innerHTML=cquestion[5];
    document.getElementById("q7").innerHTML=cquestion[6];
    document.getElementById("q8").innerHTML=cquestion[7];

    document.getElementById("yourAnswer1").innerHTML=info5[0];
    document.getElementById("yourAnswer2").innerHTML=info5[1];
    document.getElementById("yourAnswer3").innerHTML=info5[2];
    document.getElementById("yourAnswer4").innerHTML=info5[3];
    document.getElementById("yourAnswer5").innerHTML=info5[4];
    document.getElementById("yourAnswer6").innerHTML=info5[5];
    document.getElementById("yourAnswer7").innerHTML=info5[6];
    document.getElementById("yourAnswer8").innerHTML=info5[7];


    document.getElementById("CorrectAnswer1").innerHTML=correctanswer[0];
    document.getElementById("CorrectAnswer2").innerHTML=correctanswer[1];
    document.getElementById("CorrectAnswer3").innerHTML=correctanswer[2];
    document.getElementById("CorrectAnswer4").innerHTML=correctanswer[3];
    document.getElementById("CorrectAnswer5").innerHTML=correctanswer[4];
    document.getElementById("CorrectAnswer6").innerHTML=correctanswer[5];
    document.getElementById("CorrectAnswer7").innerHTML=correctanswer[6];
    document.getElementById("CorrectAnswer8").innerHTML=correctanswer[7];


///////////////////////////////////////////////////////////////////////////////////////////
function show() {
    if(info5[0]==correctanswer[0]){
        document.getElementById("qa1").style.backgroundColor="#6EBF8B";
    }else{
        document.getElementById("qa1").style.backgroundColor="#FF1818";
    }if(info5[1]==correctanswer[1]){
        document.getElementById("qa2").style.backgroundColor="#6EBF8B";
    }else{
        document.getElementById("qa2").style.backgroundColor="#FF1818";
    } if(info5[2]==correctanswer[2]){
        document.getElementById("qa3").style.backgroundColor="#6EBF8B";
    }else{
        document.getElementById("qa3").style.backgroundColor="#FF1818";
    } if(info5[3]==correctanswer[3]){
        document.getElementById("qa4").style.backgroundColor="#6EBF8B";
    }else{
        document.getElementById("qa4").style.backgroundColor="#FF1818";
    } if(info5[4]==correctanswer[4]){
        document.getElementById("qa5").style.backgroundColor="#6EBF8B";
    }else{
        document.getElementById("qa5").style.backgroundColor="#FF1818";
    } if(info5[5]==correctanswer[5]){
        document.getElementById("qa6").style.backgroundColor="#6EBF8B";
    }else{
        document.getElementById("qa6").style.backgroundColor="#FF1818";
    } if(info5[6]==correctanswer[6]){
        document.getElementById("qa7").style.backgroundColor="#6EBF8B";
    }else{
        document.getElementById("qa7").style.backgroundColor="#FF1818";
    } if(info5[7]==correctanswer[7]){
        document.getElementById("qa8").style.backgroundColor="#6EBF8B";
    }else{
        document.getElementById("qa8").style.backgroundColor="#FF1818";
    }

    document.getElementById("hidden").style.display= "block";
}

