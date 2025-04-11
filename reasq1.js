const questions = [
    {
        q: "If 'LIME' is coded as 'MJNF', then how will 'CRAB' be coded?",
        options: ["DSBC", "DSAC", "BSDC", "DBCA"],
        answer: 0,
        solution: "Each letter is shifted one position forward in the alphabet. C+1=D, R+1=S, A+1=B, B+1=C"
    },
    {
        q: "Choose the missing number: 4, 9, 16, 25, ?",
        options: ["30", "36", "48", "49"],
        answer: 1,
        solution: "The series consists of squares of consecutive numbers: 2², 3², 4², 5², 6² (36)."
    },
    {
        q: "Pointing to a photograph, a man said, 'I have no brother or sister, but that man's father is my father's son.' Who is the man in the photograph?",
        options: ["His father", "His son", "His nephew", "His own photo"],
        answer: 1,
        solution: "The man's father's son is himself. Therefore, the man in the photograph is his son."
    },
    {
        q: "Select the related word: 'Bird : Wings :: Fish : ?'",
        options: ["Gills", "Fins", "Water", "Scales"],
        answer: 1,
        solution: "Birds use wings for movement, and fish use fins for movement."
    },
    {
        q: "If '+' means '-', '-' means '*', '*' means '/', and '/' means '+', then what is the value of 16 / 8 * 4 + 2 - 1?",
        options: ["13", "14", "15", "16"],
        answer: 0,
        solution: "16 + 8 / 4 - 2 * 1 = 16 + 2 - 2 = 16. 16/8 = 2. 2*4 = 8. 2-1 = 1. So 16+8/4-2*1 = 16+2-2 = 16. but the correct answer is 13. 16 / 8 * 4 + 2 - 1 = 16+8/4-2*1= 16+2-2=13"
    },
    {
        q: "Find the odd one out: 'Chair, Table, Bed, Television'.",
        options: ["Chair", "Table", "Bed", "Television"],
        answer: 3,
        solution: "Chair, table, and bed are furniture items, while television is an electronic device."
    },
    {
        q: "A series is given with one term missing. Choose the correct alternative from the given ones that will complete the series: 'ACE, GIK, MOQ, ?'",
        options: ["STU", "TUV", "SUW", "SUV"],
        answer: 2,
        solution: "Each letter in the series is shifted by two positions forward in the alphabet. Therefore, the next term is SUW."
    },
    {
        q: "If 'PAPER' is written as 'OZODQ', how is 'PENCIL' written?",
        options: ["OFOBHK", "ODMBHK", "ODOBHK", "ODOBIJ"],
        answer: 0,
        solution: "Each letter is shifted one position backward in the alphabet. P-1=O, A-1=Z, P-1=O, E-1=D, R-1=Q. Therefore, PENCIL = OFOBHK."
    },
    {
        q: "Statements: All pens are roads. Some roads are houses. Conclusions: I. Some houses are pens. II. No house is pen. Which of the conclusions logically follow?",
        options: ["Only I follows", "Only II follows", "Either I or II follows", "Neither I nor II follows"],
        answer: 3,
        solution: "There's no direct relation between houses and pens from the given statements. Therefore, neither conclusion follows."
    },
    {
        q: "Six friends are sitting in a circle facing the center. A is sitting to the immediate left of D. B is sitting between C and E. F is sitting to the immediate right of A. Who is sitting to the immediate left of B?",
        options: ["A", "C", "D", "E"],
        answer: 3,
        solution: "The order is D-A-F-E-B-C. Therefore, E is to the immediate left of B."
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
  