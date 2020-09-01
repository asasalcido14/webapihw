const startBtn = document.getElementById('start');
const questionEl = document.getElementById('questions');

// need a function to begin the quiz
function initiateQuiz() {
    //startScreenEl is the name of the new element.
    const startScreenEl = getElementById("start-screen");
    //using set attribute to hide a class
    startScreenEl.setAttribute("class","hide");
// now hidden


    // to un-hide questions section
    questionsEl.removeAttribute("class");
    // what is going on here???

    // start timer
    timerId = setInterval(clockTick, 1000);

    timerEl.textContent = time;

    getQuestion();
}

function getQuestion(){
  const currentQuestion = questions [currentQuestionIndex];
  //what is currentQuestionIndex??
  const titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.title;

  choicesEl.innerHTML = "";
}

currentQuestion.choices.forEach(function(choice,i){

  const choiceNode
})



// In my Java I will need to 
    // create my elements: timer, high scores, and start button
    // an array of questions
    // buttons for answers on my questions
    // a library of results that know which answers are right and which are wrong
    // result tracker (score keeper)
    //