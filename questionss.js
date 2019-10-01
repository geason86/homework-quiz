var questions = [
  {
    questions: "which is not a tag in html?",
    choices: ["p", "div", "h1", "string"],
    answer: "string"
  },
  {
    questions: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    questions: "What does HTML stand for?",
    choices: ["Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Hyper Time Money Language", "Home Tool Markup Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    questions: "Who is making the Web standards?",
    choices: ["The World Wide Web Consortium", "Microsoft", "Apple", "Google"],
    answer: "The World Wide Web Consortium"
  },
  {
    questions: "What does css stand for?",
    choices: ["commom stated selection", "controlled section selection", "cascading style sheet", "conscious styling scene"],
    answer: "cascading style sheet"
  }
];
var current = 0;
var score = 0;
//setting start button to display questions when clicked.
$('#start').on('click', function() {
  $('.dissapear').hide();
  getQuestions()
});
// Display questions and choices.
function getQuestions() {
  var title = questions[current].title;
  var choices = questions[current].choices;
  $('#game').html(`<h4>${title}</h4>${getChoices(choices)}`);
}
function getChoices(choices) {
  var result = '';
      for (var i = 0; i < choices.length; i++) {
        result += `<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`;
      }
      return result;
}
$(document).on('click', '.choice', function() {
  var selectedAnswer = $(this).attr('data-answer');
  var correctAnswer = questions[current].answer;
      if (correctAnswer === selectedAnswer)
      {
        score++;
        nextQuestion();
      }
      else
      {
        nextQuestion()
      }
});
//Next question when the user response is recorded
function nextQuestion() {
  var isGameOver = (questions.length - 1) === current;
  if (isGameOver)
  {
    displayResult();
  }
  else
  {
    current++;
    getQuestions();
  }
}
//Display the results from the game
function displayResult() {
    var quizOver = `<p>Quiz Over!</p>
      <p>You got ${score} out of 5 questions correct</p>
      <button class='btn btn-primary' id='reset'>Reset Quiz</button>`;
      $('#game').html(quizOver);
}
$(document).on('click', '#reset', function () {
  score = 0;
  current = 0;
    getQuestions()
});
//Set the local storage to hold the score and user name
localStorage.setItem('score', score)