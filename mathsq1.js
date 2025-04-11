const questions = [
    {
        q: "If a train travels 120 km in 2 hours, what is its speed?",
        options: ["40 km/h", "60 km/h", "80 km/h", "100 km/h"],
        answer: 1,
        solution: "Speed = Distance / Time = 120 km / 2 hours = 60 km/h"
    },
    {
        q: "What is the value of (15% of 400) + (25% of 200)?",
        options: ["100", "110", "115", "120"],
        answer: 1,
        solution: "(15/100 * 400) + (25/100 * 200) = 60 + 50 = 110"
    },
    {
        q: "If the ratio of two numbers is 3:5 and their sum is 96, what is the larger number?",
        options: ["36", "48", "60", "72"],
        answer: 2,
        solution: "Let the numbers be 3x and 5x. 3x + 5x = 96 => 8x = 96 => x = 12. Larger number = 5 * 12 = 60"
    },
    {
        q: "What is the simple interest on a sum of ₹5000 at 10% per annum for 3 years?",
        options: ["₹1000", "₹1200", "₹1500", "₹1800"],
        answer: 2,
        solution: "Simple Interest = (Principal * Rate * Time) / 100 = (5000 * 10 * 3) / 100 = ₹1500"
    },
    {
        q: "If x + 1/x = 3, then what is the value of x² + 1/x²?",
        options: ["7", "9", "11", "13"],
        answer: 0,
        solution: "(x + 1/x)² = x² + 1/x² + 2 => 3² = x² + 1/x² + 2 => x² + 1/x² = 9 - 2 = 7"
    },
    {
        q: "A can do a piece of work in 10 days, and B can do the same work in 15 days. In how many days can they complete the work together?",
        options: ["5 days", "6 days", "8 days", "12 days"],
        answer: 1,
        solution: "1/10 + 1/15 = (3 + 2) / 30 = 5/30 = 1/6. They can complete the work in 6 days."
    },
    {
        q: "What is the value of sin(30°) + cos(60°)?",
        options: ["0", "1", "√3/2", "1/2"],
        answer: 1,
        solution: "sin(30°) = 1/2, cos(60°) = 1/2. 1/2 + 1/2 = 1"
    },
    {
        q: "If the average of 5 numbers is 20, and the average of the first 4 numbers is 18, what is the 5th number?",
        options: ["26", "28", "30", "32"],
        answer: 1,
        solution: "Sum of 5 numbers = 20 * 5 = 100. Sum of 4 numbers = 18 * 4 = 72. 5th number = 100 - 72 = 28"
    },
    {
        q: "A shopkeeper sells an item at a profit of 20%. If the cost price is ₹500, what is the selling price?",
        options: ["₹550", "₹600", "₹620", "₹650"],
        answer: 1,
        solution: "Profit = 20% of 500 = (20/100) * 500 = 100. Selling Price = 500 + 100 = ₹600"
    },
    {
        q: "What is the area of a circle with a radius of 7 cm?",
        options: ["44 cm²", "154 cm²", "88 cm²", "308 cm²"],
        answer: 1,
        solution: "Area of circle = πr² = (22/7) * 7 * 7 = 154 cm²"
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
  
