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

});

function generateResults() {

// create an object with the an answer array?
//Or set item?
// .setItem('q1', 'a')
// .setItem('q2', 'b') 
// .setItem('q3', 'd') 
// .setItem('q4', 'd') 
// .setItem('q5', 'c') 
// .setItem('q6', 'b')
// .setItem('q7', 'a')  

// compare user input to answer array
//print results
$("#correct").text(answer + "")
$("#incorrect").text(answer + "")
$("#missing").text(answer + "")

}

$("#quiz").submit(function(event){
    event.preventDefault();
    generateResults()
    // var $answers = $(value);
  


});


// Logic


});

