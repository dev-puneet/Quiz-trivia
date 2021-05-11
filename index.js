//importing the node modules

var readLineSync = require("readline-sync");
var chalk = require("chalk");

//initialising the score variable
var score = 0;

//first level interaction with user
var userName = readLineSync.question(chalk.green("May i know ur good name "));

var quizName = "Tarak Mehta ka Ooltah Chashma";

var welcomeMsg =
  "Hi " +
  chalk.yellow(userName) +
  " Welcome to the quiz on " +
  chalk.yellow(quizName);

console.log(welcomeMsg, "\n");

//=========================================

function play(options, answer) {
  var userAnswer = readLineSync.keyInSelect(options);
  if (userAnswer === answer) {
    console.log(chalk.green("Correct"));
    console.log("\n");
    score++;
  } else {
    console.log(chalk.red("Wrong"));
    console.log("\n");
  }
}

var questions = [
  {
    qn: "Q. Which year Tarak mehta was released",
    options: [2005, 2006, 2007, 2008],
    answer: 3,
  },
  {
    qn: "Q. What is the name of the Society shown in the series",
    options: ["Vrindavan", "Gokuldham", "Hariram", "Nityanand"],
    answer: 1,
  },
  {
    qn: "Q.Who is the fire brigade of Jethalal in the show",
    options: ["Tarak mehta", "Bhide", "Iyer", "Sodhi"],
    answer: 0,
  },
  {
    qn: "Q.Who is the wife of Iyer",
    options: ["Madhvi", "Anjali", "Babita", "Roshan"],
    answer: 2,
  },
  {
    qn: "Q.Who is the secretary of the society",
    options: ["Popatlal", "Iyer", "Bhide", "Jethalal"],
    answer: 2,
  },
];

var highScorers = [
  {
    name: "Puneet",
    score: 5,
  },
  {
    name: "Shaurya",
    score: 4,
  },
];
for (var i = 0; i < questions.length; i++) {
  console.log(questions[i].qn);
  play(questions[i].options, questions[i].answer);
}

console.log("Thanks for playing the Quiz ur final score is : " + score);

console.log("\n");
console.log("LeaderBoard :", "\n");

for (var i = 0; i < highScorers.length; i++) {
  console.log(highScorers[i].name, ": ", highScorers[i].score, "\n");
}

console.log(
  "If ur score is high than these people send me a Screenshot and i will update ur name in the leaderBoard"
);

//always be 1 less than ur input , because it points to array
