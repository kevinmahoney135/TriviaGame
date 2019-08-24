var questionArray = [
{
    question: "In the year 1900 in the U.S. what were the most popular first names given to boy and girl babies?",
    answers: ["William and Elizabeth",
              "Joseph and Catherine",
              "John and Mary",
              "George and Anne"],
    correct: "John and Mary"
},
{
    question: "When did the Liberty Bell get its name?",
    answers: ["When it was made, in 1701",
              "When it rang on July 4, 1776",
              "In the 19th century, when it became a symbol of the abolition of slavery",
              "None of the above"],
    correct: "In the 19th century, when it became a symbol of the abolition of slavery"
},
{
    question: "In the Roy Rogers -Dale Evans Museum, you will find Roy and Dales stuffed horses. Roy's horse was named Trigger, which was Dales horse?",
    answers: ["Buttermilk",
              "Daisy",
              "Scout",
              "Tulip"],
    correct: "Buttermilk"
},
{
    question: "The Daniel Boon museum at the home where he died can best be described how?",
    answers: ["A log cabin in Kentucky",
              "A two-story clapboard house in Tennessee",
              "A four-story Georgian-style home in Missouri",
              "A three story brick house in Arkansas"],
    correct: "A four-story Georgian-style home in Missouri"
},
{
    question: "Which of the following items was owned by the fewest U.S. homes in 1990?",
    answers: ["Home computer",
              "Compact disk player",
              "Cordless phone",
              "Dishwasher"],
    correct: "Compact disk player"
}];

var timer;
var numCorrect = 0;
var numWrong = 0;
var timeLeft = 60;

$(document).on("click", ".btn", function() {
    if ($(this).val() === "start") {
        startGame();
    }

    if ($(this).val() === "done") {
        endGame();
    }

});

function startGame() {
    timer = setInterval(gameTimer, 1000);
    var countDownTimer = $("<h2>Time Remaining: <span id='countDownTimer'>60</span> Seconds</h2>");
    $(".game-section").empty();
    $(".game-section").prepend(countDownTimer);

    for (var i = 0; i < questionArray.length; i++) {
        $(".game-section").append("<p>" + questionArray[i].question + "</p>");
        for (var i2 = 0; i2 < questionArray[i].answers.length; i2++) {
            $(".game-section").append("<input type='radio' name='q" + i + "' value='" + questionArray[i].answers[i2] + "''>" + questionArray[i].answers[i2]);
        }
    }
    
    $(".game-section").append("<div>");
    $(".game-section").append("<button class='btn' value='done'>Done</button>");
}

function endGame() {

    for (var i = 0; i < questionArray.length; i++) {
        $.each($("input[name='q" + i + "']:checked"), function() {
            if ($(this).val() === questionArray[i].correct) {
                numCorrect++;
            }
            else {
                numWrong++;
            }
        });    
    }

    clearInterval(timeLeft);

    $(".game-section").empty();

    $(".game-section").html("<h2>All Done!</h2>");
    $(".game-section").append("<p>Correct Answers: " + numCorrect + "</p>");
    $(".game-section").append("<p>Incorrect Answers: " + numWrong + "</p>");
    $(".game-section").append("<p>Unanswered: " + (questionArray.length - (this.numWrong + this.numCorrect)) + "</p>");
}

function gameTimer() {
    timeLeft--;
    $("#countDownTimer").html(timeLeft);
    if (timeLeft === 0) {
        endGame();
    }
}

