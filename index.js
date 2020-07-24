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

getAnswerButton.addEventListener("click", getAnswer);
// clearButton.addEventListener("click", clearAnswer);

function getAnswer() {
    if (!eightBallImg.classList.value.includes("hidden")) {
      eightBallAnswer.classList.remove("hidden");
      eightBallImg.classList.add("hidden");
    }

}