var answers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

var inputField = document.querySelector(".input-field");
var getAnswerButton = document.querySelector(".get-answer-button");
var clearButton = document.querySelector(".clear-button");
var eightBallImg = document.querySelector(".eight-ball-img");
var eightBallAnswer = document.querySelector(".eight-ball-answer");
var questionText = document.querySelector(".question-text");
var answerText = document.querySelector(".answer-text");

getAnswerButton.addEventListener("click", getAnswer);
clearButton.addEventListener("click", clearAnswer);

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function getAnswer() {
    
    questionText.innerText = inputField.value;
    answerText.innerText = answers[getRandomIndex(answers)];
       hiddenToggle(eightBallImg, eightBallAnswer);
    inputField.value = "";
}

function clearAnswer(){
    hiddenToggle(eightBallAnswer, eightBallImg);
}

function hiddenToggle(visible, hidden) {
    if (!visible.classList.value.includes("hidden")) {
      visible.classList.toggle("hidden");
      hidden.classList.toggle("hidden");
    }
}