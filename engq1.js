const questions = [
    {
        q: "Choose the synonym of 'Abolish'.",
        options: ["Establish", "Continue", "Repeal", "Maintain"],
        answer: 2,
        solution: "Repeal means to officially end or abolish something."
    },
    {
        q: "Select the antonym of 'Benevolent'.",
        options: ["Kind", "Generous", "Malicious", "Compassionate"],
        answer: 2,
        solution: "Malicious means intending to do harm."
    },
    {
        q: "Fill in the blank: He is ______ than his brother.",
        options: ["tall", "taller", "tallest", "more tall"],
        answer: 1,
        solution: "When comparing two things, use the comparative form 'taller'."
    },
    {
        q: "Identify the error in the sentence: 'Neither he nor I are going to the party.'",
        options: ["Neither", "nor", "are", "going"],
        answer: 2,
        solution: "The verb should agree with the subject closest to it, 'I', so 'am' is correct: 'Neither he nor I am going...'"
    },
    {
        q: "Choose the correct idiom: 'To spill the beans' means:",
        options: ["To cook beans", "To reveal a secret", "To plant beans", "To hide something"],
        answer: 1,
        solution: "To spill the beans means to reveal a secret."
    },
    {
        q: "Select the one-word substitution for 'A person who loves mankind'.",
        options: ["Misanthrope", "Philanthropist", "Anthropologist", "Sociologist"],
        answer: 1,
        solution: "A philanthropist is a person who seeks to promote the welfare of others, especially by the generous donation of money to good causes."
    },
    {
        q: "Which part of the sentence is grammatically incorrect? 'The manager asked the employees to finished the report immediately.'",
        options: ["The manager asked", "the employees", "to finished", "the report immediately"],
        answer: 2,
        solution: "'To finished' should be 'to finish'. It is an infinitive construction."
    },
    {
        q: "Choose the correctly spelled word.",
        options: ["Accomodate", "Accommodate", "Acommodate", "Acomodate"],
        answer: 1,
        solution: "The correct spelling is 'accommodate'."
    },
    {
        q: "Select the passive form of the sentence: 'They are building a new bridge.'",
        options: ["A new bridge is build by them.", "A new bridge was built by them.", "A new bridge is being built by them.", "A new bridge has been built by them."],
        answer: 2,
        solution: "The present continuous passive form is 'is/are being + past participle'."
    },
    {
        q: "Choose the most appropriate meaning of the phrase 'to cut a long story short'.",
        options: ["To tell a long story", "To summarize quickly", "To make a story longer", "To create a story"],
        answer: 1,
        solution: "To cut a long story short means to come to the point quickly, to summarize."
    }
];
  
  // Duplicate questions to 10 if testing
  while (questions.length < 10) questions.push({...questions[0]});
  
  let current = 0, score = 0, timer, timeLeft = 15;
  let timeLog = [];
  let userAnswers = [];
  
  const questionBox = document.getElementById("questionBox");
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const timerEl = document.getElementById("timer");
  const nextBtn = document.getElementById("nextBtn");
  const resultBox = document.getElementById("resultBox");
  const scoreEl = document.getElementById("score");
  const avgTimeEl = document.getElementById("avgTime");
  const solutionsEl = document.getElementById("solutions");
  
  function loadQuestion() {
    clearInterval(timer);
    timeLeft = 15;
    timerEl.textContent = `Time Left: ${timeLeft}s`;
  
    const q = questions[current];
    questionEl.textContent = `Q${current + 1}: ${q.q}`;
    optionsEl.innerHTML = "";
    
    q.options.forEach((opt, i) => {
      const div = document.createElement("div");
      div.textContent = opt;
      div.className = "option";
      div.onclick = () => selectOption(i);
      optionsEl.appendChild(div);
    });
  
    timer = setInterval(() => {
      timeLeft--;
      timerEl.textContent = `Time Left: ${timeLeft}s`;
      if (timeLeft === 0) {
        clearInterval(timer);
        selectOption(null); // auto move if not answered
      }
    }, 1000);
  }
  
  function selectOption(index) {
    clearInterval(timer);
    const correct = questions[current].answer;
    if (index === correct) score++;
    userAnswers.push(index);
    timeLog.push(15 - timeLeft);
    current++;
    if (current < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    questionBox.classList.add("hidden");
    resultBox.classList.remove("hidden");
    scoreEl.textContent = `Score: ${score} / ${questions.length}`;
    const avg = timeLog.reduce((a, b) => a + b, 0) / timeLog.length;
    avgTimeEl.textContent = `Average Time Taken: ${avg.toFixed(2)} sec`;
  
    solutionsEl.innerHTML = "<h3>Solutions:</h3>";
    questions.forEach((q, i) => {
      const p = document.createElement("p");
      p.innerHTML = `<strong>Q${i + 1}:</strong> ${q.q}<br/>
        Your Answer: ${q.options[userAnswers[i]] || "⏱️ Not Answered"}<br/>
        Correct Answer: ${q.options[q.answer]}<br/>
        <span class="${userAnswers[i] === q.answer ? "correct" : "incorrect"}">
          ${q.solution}
        </span>`;
      solutionsEl.appendChild(p);
    });
  }
  
  nextBtn.addEventListener("click", () => selectOption(null));
  
  loadQuestion();

  
  const exitBtn = document.getElementById("exitBtn");
const exitPopup = document.getElementById("exitPopup");
const yesExit = document.getElementById("yesExit");
const noExit = document.getElementById("noExit");

exitBtn.onclick = () => {
  exitPopup.classList.remove("hidden");
};

noExit.onclick = () => {
  exitPopup.classList.add("hidden");
};

yesExit.onclick = () => {
    window.location.href = "quiz.html"; // ✅ redirects to your homepage
  };
  