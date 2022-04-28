"use strict";

let item= [document.getElementById("label1"),document.getElementById("label2"),document.getElementById("label3"),document.getElementById("label4")];

let item2=[document.getElementById("option1"),document.getElementById("option2"),document.getElementById("option3"),document.getElementById("option4")];

let useranswer=[];



let cssquestions = [
    {
    numb: 1,
    question: "When using the POST method, variables are displayed in the URL:",
    answer: "False",
    options: [
      "False",
      "True",
      "just first variable",
      "just final variable"
    ] 
       
  },
    {
    numb: 2,
    question: "What is the correct way to create a function in PHP ?",
    answer:  "function myFunction()",
    options: [
      "new_function myFunction()",
      "function myFunction()",
      "create myFunction()",
      "echo Function()"
    ]
  },
    {
    numb: 3,
    question: "What is the correct way to add 1 to the $count variable?",
    answer: "$count++;",
    options: [
      "count++; ",
      "++count",
      "$count =+1",
      "$count++;"
    ]
  },
    {
    numb: 4,
    question: "Which of the functions is used to sort an array in descending order?",
    answer:  "rsort()",
    options: [
      "sort()",
      "asort()",
      "rsort()",
      "dsort()"
    ]
  },
    {
    numb: 5,
    question: "Which one of these variables has an illegal name?",
    answer:"$my-Var",
    options: [
      "$my-Var",
      "$my_Var",
      "$myVar",
      "$myVar2"
    ]
  },
  {
    numb: 6,
    question: "How do you create a cookie in PHP?",
    answer:"setcookie()",
    options: [
      "createcookie",
      "startcookie()",
      "setcookie()",
      "makecookie()"
    ]
  },
  {
    numb: 7,
    question: "How do you create an array in PHP?",
    answer:"$cars = array('Volvo', 'BMW', 'Toyota');",
    options: [
      "$cars = 'Volvo', 'BMW', 'Toyota';",
      "$cars = array['Volvo', 'BMW', 'Toyota'];",
      "$cars = array('Volvo', 'BMW', 'Toyota');",
      "$cars = array = Volvo, BMW, Toyota ;"
    ]
  },
  {
    numb: 8,
    question: "What gets printed? $var = 'false'; if ($var) { echo 'true';} else { echo 'false';};",
    answer:"true",
    options: [
      "true",
      "false",
      "erorr",
      "unexpected"
    ]
  },
];


////////////////////////////////////////////////////////

function startquiz(){
    quebody( cssquestions[0] )
     
  }
  
  function quebody( x ){
   document.getElementById("queque").innerHTML= x.question;
   document.getElementById("label1").innerHTML= x.options[0];
   document.getElementById("label2").innerHTML= x.options[1];
   document.getElementById("label3").innerHTML= x.options[2];
   document.getElementById("label4").innerHTML= x.options[3];
  
  }



  startquiz()
  ///////////////////////////////////////////////////
  let i=0;
  function nextQue(){
      if (i==cssquestions.length-1){
  
          document.getElementById("next").innerHTML="Submit";
          window.location="../../result/php/index.html"
          // document.getElementById("next").click.href="../../result/css/index.html";
      }

      else{
          i++;
          quebody(cssquestions[i]);

      }
  
  }
                                               

//////////////////////////////////////////////
let userchoise;
let choose=0;
for(let i=0; i<item.length; i++){
item[i].onclick=function(){
document.getElementById("next").disabled = false;
  userchoise=this.textContent;
  // console.log(this.textContent);
  choose=1;
  // if(choose==cssquestions[i].answer)
  // {
  // //    label1.style.background="green"
  // // label2.style.background=""
  // // label3.style.background=""
  // // label4.style.background=""
  //     alert("correct");
  // } else{
  //     alert("incorrect");
  //     // label1.style.background="red"
  //     // label2.style.background=""
  //     // label3.style.background=""
  //     // label4.style.background=""
  // }


}
}

let correctanswer=["False", "function myFunction()", "$count++;", "rsort()", "$my-Var", "setcookie()","$cars = array('Volvo', 'BMW', 'Toyota');" ,"true"];
/////////////////////////////////////////////////////
let e=0;
 function next(){
document.getElementById("next").disabled = true;

  useranswer[e]=userchoise;
  console.log(useranswer);

  for(let i=0; i<item.length ;i++){
    // item[i].checked=false;
    item[i].style.backgroundColor="white";

    item2[i].checked=false;
  }

    if(choose>0){
        quebody(cssquestions[0]);
        nextQue();
    }

    // console.log(this);
    console.log(useranswer);
    if(e<cssquestions.length){

      ansStorage();
    }
    e++;
    
 }

/////////////////////////////////////////////////// timer

var sec =90;
    
var time = setInterval(function() {
  var minutes = parseInt((sec % (60 * 60)) / (60));
  var seconds = parseInt(sec % (60));
  document.getElementById("timer").innerHTML = minutes + ":" + seconds ;
  if (sec < 0) {
    clearInterval(timer);
    
    window.location="../../result/php/index.html"
  }
  sec =  sec - 1;
}, 1000);


////////////////////////////////////////////// local 

function ansStorage(){

  let answerstorage = JSON.stringify(useranswer);
  localStorage.setItem("Data",answerstorage);

}









