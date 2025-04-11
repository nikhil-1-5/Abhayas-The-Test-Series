const questions = [
    {
        q: "Which Indian state has the longest coastline?",
        options: ["Andhra Pradesh", "Tamil Nadu", "Kerala", "Gujarat"],
        answer: 3,
        solution: "Gujarat has the longest coastline in India."
    },
    {
        q: "The 'Instrumentum Domesticum' is related to which period of Indian history?",
        options: ["Indus Valley Civilization", "Vedic Period", "Mauryan Period", "Gupta Period"],
        answer: 0,
        solution: "The 'Instrumentum Domesticum' is associated with the Indus Valley Civilization."
    },
    {
        q: "Which article of the Indian Constitution deals with the 'Right to Equality'?",
        options: ["Article 14-18", "Article 19-22", "Article 23-24", "Article 25-28"],
        answer: 0,
        solution: "Article 14-18 of the Indian Constitution deals with the 'Right to Equality'."
    },
    {
        q: "The 'Battle of Haldighati' was fought between Akbar and which Rajput ruler?",
        options: ["Rana Sanga", "Rana Kumbha", "Maharana Pratap", "Raja Man Singh"],
        answer: 2,
        solution: "The 'Battle of Haldighati' was fought between Akbar and Maharana Pratap."
    },
    {
        q: "Which river is known as the 'Sorrow of Bihar'?",
        options: ["Ganga", "Kosi", "Son", "Gandak"],
        answer: 1,
        solution: "The Kosi river is known as the 'Sorrow of Bihar'."
    },
    {
        q: "Who wrote the book 'Indica'?",
        options: ["Fa-Hien", "Megasthenes", "Hiuen Tsang", "Al-Biruni"],
        answer: 1,
        solution: "Megasthenes wrote the book 'Indica'."
    },
    {
        q: "What is the primary function of the 'Reserve Bank of India'?",
        options: ["Tax collection", "Monetary policy", "Budget formulation", "Infrastructure development"],
        answer: 1,
        solution: "The primary function of the Reserve Bank of India is to formulate and implement monetary policy."
    },
    {
        q: "Which gas is commonly known as 'Laughing Gas'?",
        options: ["Nitrogen dioxide", "Nitrous oxide", "Carbon monoxide", "Sulphur dioxide"],
        answer: 1,
        solution: "Nitrous oxide is commonly known as 'Laughing Gas'."
    },
    {
        q: "The 'Kalinga Prize' is associated with which field?",
        options: ["Literature", "Sports", "Science", "Peace"],
        answer: 2,
        solution: "The 'Kalinga Prize' is associated with the popularization of science."
    },
    {
        q: "Which Indian city is known as the 'Silicon Valley of India'?",
        options: ["Mumbai", "Delhi", "Hyderabad", "Bengaluru"],
        answer: 3,
        solution: "Bengaluru is known as the 'Silicon Valley of India'."
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
  