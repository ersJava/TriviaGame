$(document).ready(function() {

// Variables
var clockStart = 90;
var intervalId;


//Functions
$('#wrapper').hide();
$('#wrapper02').hide();

$('.button').on('click', function(){
$('#wrapper00').hide();
$('#wrapper').show();

function timer() {
    clearInterval(intervalId)
    intervalId = setInterval(decrement, 1000);
}

function decrement(){

    clockStart--;
    $("#time").html("<h3>" + clockStart + "</h3>");

    if (clockStart === 0) {

        stop();
        $('#wrapper').hide();
        $('#wrapper02').show();
        generateResults();
    }

function stop() {
    clearInterval(intervalId);
  }
}

timer();

});

$('#submit').on('click', function() {
    $('#wrapper').hide();
    $('#wrapper02').show();
    generateResults()

});

$("#quiz").submit(function(event){
    event.preventDefault();
    // var $answers = $(value);
});

function generateResults() {
   
var correct= 0;
var incorrect= 0;
var missing= 0;

    if($("input[name='q1']:checked").val() === 'a'){
        correct++;
    }else if($("input[name='q1']:checked").val() === undefined){
        missing++;
    }else{
        incorrect++;
        }

     if($("input[name='q2']:checked").val() === 'b'){
         correct++;
     }else if($("input[name='q2']:checked").val() === undefined){
         missing++;
     }else{
         incorrect++;
        }

     if($("input[name='q3']:checked").val() === 'd'){
        correct++;
    }else if($("input[name='q3']:checked").val() === undefined){
        missing++;
    }else{
        incorrect++;
        }
    
    if($("input[name='q4']:checked").val() === 'd'){
        correct++;
    }else if($("input[name='q4']:checked").val() === undefined){
        missing++;
    }else{
        incorrect++;
         }

    if($("input[name='q5']:checked").val() === 'c'){
        correct++;
    }else if($("input[name='q5']:checked").val() === undefined){
        missing++;
    }else{
        incorrect++;
        }
   
    if($("input[name='q6']:checked").val() === 'b'){
        correct++;
    }else if($("input[name='q6']:checked").val() === undefined){
        missing++;
    }else{
        incorrect++;
           }
       
    if($("input[name='q7']:checked").val() === 'a'){
        correct++;
    }else if($("input[name='q7']:checked").val() === undefined){
        missing++;
    }else{
        incorrect++;
        }

$("#correct span").text(correct);
$("#incorrect span").text(incorrect);
$("#missing span").text(missing);

}
});

//Task for next time
// for (let i = 0; i < questions.length; i++) {}
//     console.log(questions[i]);
//     //is this right? is it wrong?



