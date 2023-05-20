let currentQuestionIndex = 0;

let clickCount = 0; // Initialize click count

showAnswer.addEventListener("click", () => {
  clickCount++; // Increment click count

  const currentQuestion = quiz[currentQuestionIndex];
  const answerInput = document.querySelector("#questions input[type='text']");

  if (answerInput.value !== currentQuestion.answer) {
    answerInput.value = currentQuestion.answer;
    answerInput.disabled = true;
    submit.disabled = true;
    submit.style.opacity = 0;
    showAnswer.innerHTML = "Hide answers";
  } else {
    submit.disabled = false;
    answerInput.disabled = false;
    submit.style.opacity = 1;
    answerInput.value = "";
    showAnswer.innerHTML = "Show answers";
  }

  // Display click count
  console.log("Number of clicks:", clickCount);
});

function showQuestion() {
  const currentQuestion = quiz[currentQuestionIndex];
  questions.innerHTML = currentQuestion.question;
  title.innerHTML = currentQuestion.title;
  showAnswer.style.display = "block";
}

function showNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quiz.length) {
    showQuestion();
  } else {
    // make the quiz title null
    title.innerHTML = "";
    questions.innerHTML = `<h2>Congrats for completing the Exercise. Practice another exrecise to learn more
    <a href="Exercise.html">Click here</a></h2>`;
    submit.style.display = "none";
  }
}

function showPreviousQuestion() {
  currentQuestionIndex--;
  if (currentQuestionIndex >= 0) {
    showQuestion();
  }
}

// show first question
showQuestion();

// evaluate the answer and show the next question
submit.addEventListener("click", () => {
  const currentQuestion = quiz[currentQuestionIndex];
  const answerInput = questions.querySelector("input");
  if (answerInput.value === currentQuestion.answer) {
    questions.innerHTML = "Correct👍";
    next.style.display = "block";
    showAnswer.style.display = "none";
    wrong.style.display = "none";
  } else {
    questions.innerHTML = "Wrong😑";
    wrong.style.display = "block";
    showAnswer.style.display = "none";
  }
});

next.addEventListener("click", () => {
  showNextQuestion();
  next.style.display = "none";
  wrong.style.display = "none";
});

wrong.addEventListener("click", () => {
  showQuestion();
  next.style.display = "none";
  wrong.style.display = "none";
});
