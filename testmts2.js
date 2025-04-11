const sections = [
    //Maths Section
    [
        {
          "question": "If x + 1/x = 4, find the value of x² + 1/x².",
          "options": ["12", "14", "16", "18"],
          "answer": "14"
        },
        {
          "question": "A train 150 meters long crosses a pole in 10 seconds. What is the speed of the train in km/hr?",
          "options": ["45", "50", "54", "60"],
          "answer": "54"
        },
        {
          "question": "If sin θ = 3/5, find the value of cos θ.",
          "options": ["4/5", "3/4", "5/4", "4/3"],
          "answer": "4/5"
        },
        {
          "question": "The average of 5 numbers is 20. If one number is excluded, the average is 18. What is the excluded number?",
          "options": ["22", "24", "26", "28"],
          "answer": "28"
        },
        {
          "question": "A sum of money doubles itself in 8 years at simple interest. What is the rate of interest per annum?",
          "options": ["10%", "12.5%", "15%", "20%"],
          "answer": "12.5%"
        },
        {
          "question": "If a:b = 3:4 and b:c = 8:9, find a:c.",
          "options": ["2:3", "3:2", "4:3", "3:4"],
          "answer": "2:3"
        },
        {
          "question": "What is the remainder when 3^25 is divided by 8?",
          "options": ["1", "3", "5", "7"],
          "answer": "3"
        },
        {
          "question": "A can do a piece of work in 10 days, and B can do the same work in 15 days. In how many days can they complete the work together?",
          "options": ["5", "6", "8", "12"],
          "answer": "6"
        },
        {
          "question": "If tan θ = 1, find the value of sin 2θ.",
          "options": ["0", "1", "1/2", "√3/2"],
          "answer": "1"
        },
        {
          "question": "The difference between compound interest and simple interest on a sum of ₹1000 for 2 years at 10% per annum is:",
          "options": ["₹10", "₹20", "₹30", "₹40"],
          "answer": "₹10"
        },
        {
          "question": "If a + b = 10 and ab = 21, find a² + b².",
          "options": ["52", "58", "64", "68"],
          "answer": "58"
        },
        {
          "question": "A mixture contains milk and water in the ratio 3:2. If 5 liters of water is added, the ratio becomes 3:4. What is the initial quantity of milk?",
          "options": ["10 liters", "12 liters", "15 liters", "18 liters"],
          "answer": "15 liters"
        },
        {
          "question": "If sec θ = 5/4, find the value of tan θ.",
          "options": ["3/5", "3/4", "4/3", "4/5"],
          "answer": "3/4"
        },
        {
          "question": "A boat travels 20 km downstream in 2 hours and 12 km upstream in 3 hours. What is the speed of the boat in still water?",
          "options": ["7 km/hr", "8 km/hr", "9 km/hr", "10 km/hr"],
          "answer": "8 km/hr"
        },
        {
          "question": "If √x + 1/√x = 3, find the value of x + 1/x.",
          "options": ["5", "7", "9", "11"],
          "answer": "7"
        },
        {
          "question": "The areas of two similar triangles are in the ratio 9:16. If the altitude of the larger triangle is 8 cm, find the corresponding altitude of the smaller triangle.",
          "options": ["4 cm", "5 cm", "6 cm", "7 cm"],
          "answer": "6 cm"
        },
        {
          "question": "What is the value of cos 60° + sin 30°?",
          "options": ["0", "1", "1/2", "√3/2"],
          "answer": "1"
        },
        {
          "question": "A shopkeeper sells an article at a profit of 20%. If he had bought it for 10% less and sold it for ₹18 less, he would have gained 30%. Find the cost price of the article.",
          "options": ["₹100", "₹120", "₹150", "₹180"],
          "answer": "₹120"
        },
        {
          "question": "If 2^x = 8^y = 16^z and x + y + z = 11, find x.",
          "options": ["6", "8", "9", "10"],
          "answer": "6"
        },
        {
          "question": "The perimeter of a rectangle is 40 cm and its length is 12 cm. Find its area.",
          "options": ["80 cm²", "96 cm²", "108 cm²", "120 cm²"],
          "answer": "96 cm²"
        },
        {
          "question": "If cot θ = 3/4, find the value of sin θ.",
          "options": ["3/5", "4/5", "5/3", "5/4"],
          "answer": "4/5"
        },
        {
          "question": "A cylindrical tank has a radius of 5 cm and a height of 10 cm. Find its volume.",
          "options": ["250π cm³", "300π cm³", "350π cm³", "400π cm³"],
          "answer": "250π cm³"
        },
        {
          "question": "If a/b = 3/4 and b/c = 8/9, find a/c.",
          "options": ["1/2", "2/3", "3/4", "4/5"],
          "answer": "2/3"
        },
        {
          "question": "Find the value of (tan 45° + cos 60°).",
          "options": ["1/2", "3/2", "1", "2"],
          "answer": "3/2"
        },
        {
          "question": "A shopkeeper gives a discount of 20% on the marked price of an article and still gains 10%. If the cost price of the article is ₹200, find the marked price.",
          "options": ["₹250", "₹275", "₹300", "₹325"],
          "answer": "₹275"
        }
      ],
    // Reasoning Section
    [
        {
          "question": "Select the set in which the numbers are related in the same way as are the numbers of the following set: (12, 18, 30)",
          "options": ["(8, 12, 20)", "(15, 20, 35)", "(16, 24, 40)", "(9, 15, 27)"],
          "answer": "(16, 24, 40)"
        },
        {
          "question": "Select the combination of letters that when sequentially placed in the blanks of the given series will complete the series: a_bcc_ab_cc_aab_cc",
          "options": ["bacab", "abcab", "cbaac", "bbcaa"],
          "answer": "bacab"
        },
        {
          "question": "If '+' means '÷', '÷' means '×', '×' means '-' and '-' means '+', then what will be the value of 16 ÷ 4 × 2 + 8 - 6?",
          "options": ["8", "10", "12", "14"],
          "answer": "10"
        },
        {
          "question": "How many pairs of letters are there in the word 'EDUCATION' which have as many letters between them in the word as in the English alphabet?",
          "options": ["One", "Two", "Three", "Four"],
          "answer": "Two"
        },
        {
          "question": "Which two signs should be interchanged to make the given equation correct? 15 + 3 × 4 ÷ 8 - 2 = 18",
          "options": ["+ and -", "× and ÷", "+ and ×", "- and ÷"],
          "answer": "× and ÷"
        },
        {
          "question": "If today is Wednesday, after 62 days, it will be:",
          "options": ["Monday", "Tuesday", "Wednesday", "Thursday"],
          "answer": "Monday"
        },
        {
          "question": "If 12 is related to 144, then 15 is related to:",
          "options": ["180", "225", "250", "275"],
          "answer": "225"
        },
        {
          "question": "A + B means A is the sister of B; A - B means A is the brother of B; A * B means A is the father of B. Which of the following represents 'P is the maternal uncle of Q'?",
          "options": ["P - M * Q", "P + M - Q", "P - M + Q", "P + M * Q"],
          "answer": "P - M + Q"
        },
        {
          "question": "Statements: All pens are pencils. Some pencils are erasers. Conclusions: I. Some pens are erasers. II. No pen is an eraser.",
          "options": ["Only conclusion I follows", "Only conclusion II follows", "Either I or II follows", "Neither I nor II follows"],
          "answer": "Neither I nor II follows"
        },
        {
          "question": "Find the odd one out: 121, 144, 169, 180",
          "options": ["121", "144", "169", "180"],
          "answer": "180"
        },
        {
          "question": "If 'APPLE' is coded as 'ELPPA', then 'BANANA' is coded as:",
          "options": ["ANANAB", "ANABNA", "AANABN", "ANAANB"],
          "answer": "ANANAB"
        },
        {
          "question": "Select the combination of letters that when sequentially placed in the blanks of the given series will complete the series: _pq_rp_qr_p",
          "options": ["rqpr", "prqr", "rpqr", "qrpq"],
          "answer": "rpqr"
        },
        {
          "question": "A * B means A is the mother of B; A + B means A is the husband of B; A - B means A is the sister of B. If 'P * Q + R - S', then which of the following is true?",
          "options": ["S is the brother of R", "Q is the father of S", "P is the mother of S", "R is the sister of Q"],
          "answer": "Q is the father of S"
        },
        {
          "question": "Statements: Some books are tables. All tables are chairs. Conclusions: I. Some books are chairs. II. All chairs are tables.",
          "options": ["Only conclusion I follows", "Only conclusion II follows", "Either I or II follows", "Neither I nor II follows"],
          "answer": "Only conclusion I follows"
        },
        {
          "question": "Find the odd one out: ACE, GIK, MOQ, SUW",
          "options": ["ACE", "GIK", "MOQ", "SUW"],
          "answer": "SUW"
        },
        {
          "question": "Select the set in which the numbers are related in the same way as are the numbers of the following set: (18, 30, 42)",
          "options": ["(12, 20, 30)", "(16, 24, 32)", "(24, 40, 56)", "(20, 32, 44)"],
          "answer": "(24, 40, 56)"
        },
        {
          "question": "If 25 is related to 125, then 36 is related to:",
          "options": ["180", "216", "256", "324"],
          "answer": "216"
        },
        {
          "question": "If 'P' stands for '-', 'Q' stands for '+', 'R' stands for '÷' and 'S' stands for '×', then what is the value of 18 S 9 Q 7 P 5 R 2?",
          "options": ["36", "42", "48", "54"],
          "answer": "42"
        },
        {
          "question": "If 1st October is Sunday, then 1st November will be:",
          "options": ["Monday", "Tuesday", "Wednesday", "Thursday"],
          "answer": "Wednesday"
        },
          {
          "question": "Statements: Some dogs are cats. All cats are animals. Conclusions: I. Some dogs are animals. II. All animals are cats.",
          "options": ["Only conclusion I follows", "Only conclusion II follows", "Either I or II follows", "Neither I nor II follows"],
          "answer": "Only conclusion I follows"
        },
        {
          "question": "Find the odd one out: 17, 29, 37, 45",
          "options": ["17", "29", "37", "45"],
          "answer": "45"
        },
        {
          "question": "If 'SMILE' is coded as 'TNJMF', then 'CANDLE' is coded as:",
          "options": ["DBOEMF", "DBOFME", "DBOEMF", "DBOFEM"],
          "answer": "DBOEMF"
        },
        {
          "question": "Select the combination of letters that when sequentially placed in the blanks of the given series will complete the series: a_bc_a_bcc_ab_cc",
          "options": ["bbaca", "abcab", "cbaac", "bacab"],
          "answer": "bacab"
        },
        {
          "question": "A + B means A is the son of B; A - B means A is the wife of B; A * B means A is the brother of B. If 'P + Q - R * S', then which of the following is true?",
          "options": ["P is the son of S", "P is the daughter of S", "S is the brother of P", "S is the sister of P"],
          "answer": "P is the son of S"
        },
        {
          "question": "Statements: Some fruits are vegetables. All vegetables are plants. Conclusions: I. Some fruits are plants. II. All plants are vegetables.",
          "options": ["Only conclusion I follows", "Only conclusion II follows", "Either I or II follows", "Neither I nor II follows"],
          "answer": "Only conclusion I follows"
        }
      ],

    // GK/GS/Current Affairs Section
    [
        {
          "question": "Which Indian state is known as the 'Spice Garden of India'?",
          "options": ["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh"],
          "answer": "Kerala"
        },
        {
          "question": "The 'Right to Information Act' (RTI) was passed in which year?",
          "options": ["2002", "2005", "2010", "2015"],
          "answer": "2005"
        },
        {
          "question": "Which of the following is the highest civilian award in India?",
          "options": ["Padma Vibhushan", "Padma Bhushan", "Bharat Ratna", "Padma Shri"],
          "answer": "Bharat Ratna"
        },
        {
          "question": "The 'Kalinga Prize' is associated with which field?",
          "options": ["Literature", "Sports", "Science", "Peace"],
          "answer": "Science"
        },
        {
          "question": "Which river is known as the 'Dakshin Ganga'?",
          "options": ["Godavari", "Krishna", "Kaveri", "Narmada"],
          "answer": "Godavari"
        },
        {
          "question": "The 'Indian Space Research Organisation' (ISRO) was established in which year?",
          "options": ["1962", "1969", "1975", "1984"],
          "answer": "1969"
        },
        {
          "question": "Which of the following is a water-soluble vitamin?",
          "options": ["Vitamin A", "Vitamin D", "Vitamin E", "Vitamin C"],
          "answer": "Vitamin C"
        },
        {
          "question": "Who was the first Indian to receive the 'Ramon Magsaysay Award'?",
          "options": ["Mother Teresa", "Vinoba Bhave", "Jawaharlal Nehru", "Rajendra Prasad"],
          "answer": "Vinoba Bhave"
        },
        {
          "question": "The 'Jallikattu' festival is associated with which Indian state?",
          "options": ["Kerala", "Karnataka", "Tamil Nadu", "Andhra Pradesh"],
          "answer": "Tamil Nadu"
        },
        {
          "question": "Which of the following is the largest gland in the human body?",
          "options": ["Pancreas", "Liver", "Thyroid", "Adrenal"],
          "answer": "Liver"
        },
        {
          "question": "The 'Chipko Movement' was primarily associated with?",
          "options": ["Forest conservation", "Water conservation", "Wildlife protection", "Air pollution control"],
          "answer": "Forest conservation"
        },
        {
          "question": "Which Indian city is known as the 'Silicon Valley of India'?",
          "options": ["Mumbai", "Delhi", "Chennai", "Bengaluru"],
          "answer": "Bengaluru"
        },
        {
          "question": "The 'Indian Constitution' was adopted on which date?",
          "options": ["January 26, 1950", "November 26, 1949", "August 15, 1947", "October 2, 1948"],
          "answer": "November 26, 1949"
        },
        {
          "question": "Which of the following is a classical dance form of Andhra Pradesh?",
          "options": ["Kathak", "Bharatanatyam", "Kuchipudi", "Odissi"],
          "answer": "Kuchipudi"
        },
        {
          "question": "The 'World Health Organization' (WHO) is headquartered in?",
          "options": ["New York", "Geneva", "London", "Paris"],
          "answer": "Geneva"
        },
        {
          "question": "Which of the following is a non-renewable source of energy?",
          "options": ["Solar energy", "Wind energy", "Coal", "Hydroelectric energy"],
          "answer": "Coal"
        },
        {
          "question": "The 'Battle of Plassey' was fought in which year?",
          "options": ["1757", "1764", "1857", "1805"],
          "answer": "1757"
        },
        {
          "question": "Which of the following is the largest desert in India?",
          "options": ["Thar Desert", "Rann of Kutch", "Ladakh Desert", "Spiti Valley"],
          "answer": "Thar Desert"
        },
        {
          "question": "The 'Indian National Army' (INA) was formed by?",
          "options": ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "Sardar Patel"],
          "answer": "Subhas Chandra Bose"
        },
        {
          "question": "Which of the following is a metallic mineral?",
          "options": ["Mica", "Coal", "Limestone", "Iron ore"],
          "answer": "Iron ore"
        },
        {
          "question": "The 'International Yoga Day' is celebrated on?",
          "options": ["June 21", "July 15", "August 12", "September 5"],
          "answer": "June 21"
        },
        {
          "question": "Which of the following is a hill station located in West Bengal?",
          "options": ["Ooty", "Shimla", "Darjeeling", "Munnar"],
          "answer": "Darjeeling"
        },
        {
          "question": "The 'Fundamental Rights' are mentioned in which part of the Indian Constitution?",
          "options": ["Part II", "Part III", "Part IV", "Part V"],
          "answer": "Part III"
        },
        {
          "question": "Which gas is commonly known as 'marsh gas'?",
          "options": ["Carbon dioxide", "Methane", "Nitrogen", "Oxygen"],
          "answer": "Methane"
        },
        {
          "question": "The 'Salt Satyagraha' was started in which year?",
          "options": ["1920", "1930", "1942", "1947"],
          "answer": "1930"
        }
      ],
      //English
      [
        {
          "question": "Select the most appropriate synonym of 'ADVERSITY'.",
          "options": ["Prosperity", "Misfortune", "Advantage", "Benefit"],
          "answer": "Misfortune"
        },
        {
          "question": "Choose the antonym of 'CONSOLIDATE'.",
          "options": ["Strengthen", "Unite", "Separate", "Solidify"],
          "answer": "Separate"
        },
        {
          "question": "Identify the correctly spelt word.",
          "options": ["Exaggerate", "Exagerate", "Exagerrate", "Exaggeratte"],
          "answer": "Exaggerate"
        },
        {
          "question": "Fill in the blank with the appropriate preposition: 'She is keen ______ learning new languages.'",
          "options": ["on", "at", "in", "for"],
          "answer": "on"
        },
        {
          "question": "Select the most appropriate meaning of the idiom: 'To play fast and loose'.",
          "options": ["To be consistent", "To be reliable", "To act irresponsibly", "To be careful"],
          "answer": "To act irresponsibly"
        },
        {
          "question": "Choose the one word substitution for 'A person who collects stamps'.",
          "options": ["Numismatist", "Philatelist", "Cartographer", "Lexicographer"],
          "answer": "Philatelist"
        },
        {
          "question": "Identify the part of the sentence that has an error: 'The teacher asked the students to brought their books.'",
          "options": ["The teacher asked", "the students", "to brought", "their books"],
          "answer": "to brought"
        },
        {
          "question": "Select the most appropriate passive form of the given sentence: 'The police caught the thief.'",
          "options": ["The thief was caught by the police.", "The thief is caught by the police.", "The thief has been caught by the police.", "The thief had been caught by the police."],
          "answer": "The thief was caught by the police."
        },
        {
          "question": "Choose the correct indirect form of the sentence: 'He said, 'Are you coming with me?'",
          "options": ["He asked if I am coming with him.", "He asked if I was coming with him.", "He asked if I will come with him.", "He asked if I come with him."],
          "answer": "He asked if I was coming with him."
        },
        {
          "question": "Fill in the blank with the correct article: 'She is ______ European.'",
          "options": ["a", "an", "the", "no article"],
          "answer": "a"
        },
        {
          "question": "Select the most appropriate synonym of 'ENHANCE'.",
          "options": ["Diminish", "Reduce", "Improve", "Decrease"],
          "answer": "Improve"
        },
        {
          "question": "Choose the antonym of 'TRANSIENT'.",
          "options": ["Temporary", "Permanent", "Fleeting", "Momentary"],
          "answer": "Permanent"
        },
        {
          "question": "Identify the correctly spelt word.",
          "options": ["Occasion", "Ocassion", "Occation", "Ocasion"],
          "answer": "Occasion"
        },
        {
          "question": "Fill in the blank with the appropriate preposition: 'He is responsible ______ his actions.'",
          "options": ["for", "to", "with", "at"],
          "answer": "for"
        },
        {
          "question": "Select the most appropriate meaning of the idiom: 'To kick the bucket'.",
          "options": ["To start something", "To achieve success", "To die", "To be happy"],
          "answer": "To die"
        },
        {
          "question": "Choose the one word substitution for 'A person who is skilled in storytelling'.",
          "options": ["Biographer", "Narrator", "Critic", "Editor"],
          "answer": "Narrator"
        },
        {
          "question": "Identify the part of the sentence that has an error: 'She has been working here since five years.'",
          "options": ["She has been", "working here", "since five years", "no error"],
          "answer": "since five years"
        },
        {
          "question": "Select the most appropriate passive form of the given sentence: 'They have built a new bridge.'",
          "options": ["A new bridge was built by them.", "A new bridge is built by them.", "A new bridge has been built by them.", "A new bridge had been built by them."],
          "answer": "A new bridge has been built by them."
        },
        {
          "question": "Choose the correct indirect form of the sentence: 'She said, 'What a beautiful day!'",
          "options": ["She exclaimed that what a beautiful day it was.", "She exclaimed that it was a very beautiful day.", "She said that it is a beautiful day.", "She asked what a beautiful day it was."],
          "answer": "She exclaimed that it was a very beautiful day."
        },
        {
          "question": "Fill in the blank with the correct article: 'He is ______ honorable man.'",
          "options": ["a", "an", "the", "no article"],
          "answer": "an"
        },
        {
          "question": "Select the most appropriate synonym of 'REMEDY'.",
          "options": ["Disease", "Cure", "Problem", "Issue"],
          "answer": "Cure"
        },
        {
          "question": "Choose the antonym of 'VAGUE'.",
          "options": ["Clear", "Ambiguous", "Indefinite", "Obscure"],
          "answer": "Clear"
        },
        {
          "question": "Identify the correctly spelt word.",
          "options": ["Necessary", "Necessery", "Neccessary", "Necassary"],
          "answer": "Necessary"
        },
        {
          "question": "Fill in the blank with the appropriate preposition: 'The train is arriving ______ platform number 5.'",
          "options": ["at", "in", "on", "by"],
          "answer": "at"
        },
        {
          "question": "Select the most appropriate meaning of the idiom: 'To let the cat out of the bag'.",
          "options": ["To keep a secret", "To reveal a secret", "To hide something", "To forget something"],
          "answer": "To reveal a secret"
        }
      ]
      
]
let currentSection = 0;
let currentQuestion = 0;
let answers = {};
let markedForReview = [];
let skippedQuestions = [];
let timeLeft = 60 * 60;
let timerInterval;

// Start Timer
function startTimer() {
timerInterval = setInterval(function () {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    document.getElementById("timer").innerText = `Time Left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    if (timeLeft === 0) {
        clearInterval(timerInterval);
        submitTest();
    }
    timeLeft--;
}, 1000);
}

// Load Question
function loadQuestion(index) {
const q = sections[currentSection][index];
document.getElementById("question").innerText = `${getQuestionNumber(index)}. ${q.question}`;
const options = q.options.map((option, i) => `
    <input type="radio" name="answer" id="opt${i}" value="${option}" ${answers[`${currentSection}-${index}`] === option ? "checked" : ""}>
    <label for="opt${i}">${option}</label><br>
`).join("");
document.getElementById("options").innerHTML = options;
}



// Get Correct Question Number
function getQuestionNumber(index) {
return currentSection * 25 + index + 1;
}

// Store Answer
function storeAnswer() {
const selectedOption = document.querySelector('input[name="answer"]:checked');
if (selectedOption) {
    answers[`${currentSection}-${currentQuestion}`] = selectedOption.value;
}
}

// Switch Section
function switchSection(sectionIndex) {
storeAnswer();
currentSection = sectionIndex;
currentQuestion = 0;
loadQuestion(currentQuestion);
updateSectionBar();
}

// Highlight Active Section
function updateSectionBar() {
document.querySelectorAll('.section-bar button').forEach((btn, index) => {
    if (index === currentSection) {
        btn.classList.add('active');
    } else {
        btn.classList.remove('active');
    }
});
}

// Mark for Review
function markForReview() {
const qIndex = `${currentSection}-${currentQuestion}`;
if (!markedForReview.includes(qIndex)) {
    markedForReview.push(qIndex);
    updateReviewList();
    // alert("Question marked for review.");
}
}

// Skip Question
// Skip Question
function skipQuestion() {
const qIndex = `${currentSection}-${currentQuestion}`;

// Add skipped status to the button
if (!skippedQuestions.includes(qIndex)) {
    skippedQuestions.push(qIndex);
}

// Update button color for skipped question
const questionNumber = getQuestionNumber(currentQuestion);
const skippedBtn = document.getElementById(`btn${questionNumber}`);
if (skippedBtn) {
    skippedBtn.classList.add("skipped"); // Add skipped class
}

nextQuestion(); // Move to next question after skipping
}


// Next Question
function nextQuestion() {
storeAnswer();
if (currentQuestion < sections[currentSection].length - 1) {
    currentQuestion++;
    loadQuestion(currentQuestion);
    updateQuestionPanel(); // Update button status
} else {
    alert("You have reached the last question in this section.");
}
}

// Previous Question
function previousQuestion() {
storeAnswer(); // Save current answer before moving
if (currentQuestion > 0) {
    currentQuestion--; // Move to previous question
    loadQuestion(currentQuestion);
    updateQuestionPanel();
} 
else {
    alert("You are at the first question in this section.");
}
}


// Submit Test
function submitTest() {
storeAnswer(); // Save the current answer
clearInterval(timerInterval); // Stop the timer
calculateResult(); // Calculate the result

// Hide modal if visible
const modal = document.getElementById("exitModal");
if (modal) modal.classList.add("hidden");

// Show result and solutions
document.getElementById("result").classList.remove("hidden");
document.getElementById("solutions").classList.remove("hidden");

// Hide navigation and control buttons after submission
document.querySelectorAll(".nav-btn, #markReviewBtn, #skipBtn, #submitBtn").forEach(btn => {
    btn.style.display = "none";
});

// Hide question panel after submission
document.getElementById("questionPanel").style.display = "none";

// Hide question container after submission
document.getElementById("question-container").style.display = "none";

// Hide horizontal panel after submission
 document.querySelector(".panel-container").style.display = "none";

// Hide all section buttons after submission
document.querySelectorAll(".section-bar button").forEach(btn => {
    btn.style.display = "none";
});

 // Hide the section bar itself after submission
 document.querySelector(".section-bar").style.display = "none";

// Hide all other buttons if any
document.querySelectorAll("button").forEach(btn => {
    btn.style.display = "none";
});

// Hide the timer after submission
document.getElementById("timer").style.display = "none";

 // Disable all answer options after submission
disableOptions(); 
}
function confirmExit() {
document.getElementById("exitModal").classList.remove("hidden");
}

function closeExitModal() {
document.getElementById("exitModal").classList.add("hidden");
}


// Calculate Result
function calculateResult() {
let score = 0;
let correctCount = 0;
let wrongCount = 0;
let unattemptedCount = 0;
let totalQuestions = 100; // Total number of questions
let solutionText = "<h3>Solutions:</h3>";
let solutionCounter = 1; // Counter for solution numbering (from 1 to 100)

sections.forEach((section, sIndex) => {
    section.forEach((q, qIndex) => {
        const qID = `${sIndex}-${qIndex}`;
        const userAnswer = answers[qID] || "No Answer";
        const correctAnswer = q.answer;

        // Check correctness
        if (userAnswer === correctAnswer) {
            score += 2; // Correct answer +2
            correctCount++;
            solutionText += `
                <div style="margin-bottom: 10px;">
                    <b>${solutionCounter}. ${q.question}</b><br>
                    Your Answer: <b>${userAnswer}</b> | Correct Answer: <b>${correctAnswer}</b><br>
                    <span style="color:green;">Correct ✔️ (+2)</span>
                </div>`;
        } 
        else if (userAnswer === "No Answer") {
            unattemptedCount++;
            solutionText += `
                <div style="margin-bottom: 10px;">
                    <b>${solutionCounter}. ${q.question}</b><br>
                    <span style="color:orange;">Not Attempted ❗ (0)</span><br>
                    Correct Answer: <b>${correctAnswer}</b>
                </div>`;
        } 
        else {
            score -= 0.25; // Wrong answer -0.25
            wrongCount++;
            solutionText += `
                <div style="margin-bottom: 10px;">
                    <b>${solutionCounter}. ${q.question}</b><br>
                    Your Answer: <b>${userAnswer}</b> | Correct Answer: <b>${correctAnswer}</b><br>
                    <span style="color:red;">Wrong ❌ (-0.25)</span>
                </div>`;
        }
        solutionCounter++; // Increment solution counter
    });
});

// Calculate total marks out of 200
let totalMarks = 200;

// Display results
document.getElementById("result").innerHTML = `
    <h3>Total Marks: ${score} / ${totalMarks}</h3>
    <div id="summary">
        <p>✅ Correct Answers: <b>${correctCount}</b> | Marks: <b>${correctCount * 2}</b></p>
        <p>❌ Wrong Answers: <b>${wrongCount}</b> | Deducted: <b>${(wrongCount * 0.25).toFixed(2)}</b></p>
        <p>⏩ Not Attempted: <b>${unattemptedCount}</b></p>
    </div>
`;
document.getElementById("solutions").innerHTML = solutionText;
}

// Update Review List
function updateReviewList() {
document.getElementById("reviewed-questions").innerHTML = `Marked for Review: ${markedForReview.join(", ")}`;
}

// Disable Options after Submission
function disableOptions() {
document.querySelectorAll('input[name="answer"]').forEach(option => {
    option.disabled = true; // Disable only question options
});
}
function updateQuestionStatus() {
let statusHTML = "";
let totalQuestions = sections.reduce((sum, section) => sum + section.length, 0);

for (let i = 0; i < totalQuestions; i++) {
    const sectionIndex = Math.floor(i / 25);
    const questionIndex = i % 25;
    const qIndex = `${sectionIndex}-${questionIndex}`;
    
    if (markedForReview.includes(qIndex)) {
        statusHTML += `<div class="question-status review">🔍 Q${i + 1}: Marked for Review</div>`;
    } 
    else if (answers[qIndex]) {
        statusHTML += `<div class="question-status attempted">✅ Q${i + 1}: Attempted</div>`;
    } 
    else {
        statusHTML += `<div class="question-status not-attempted">❌ Q${i + 1}: Not Attempted</div>`;
    }
}
document.getElementById("questionStatusList").innerHTML = statusHTML;
}

// Total number of questions
const totalQuestions = 100;

// Generate question buttons dynamically
function createQuestionButtons() {
const questionPanel = document.getElementById("questionPanel");
questionPanel.innerHTML = ""; // Clear previous buttons

for (let i = 1; i <= totalQuestions; i++) {
    const btn = document.createElement("button");
    btn.innerText = i;
    btn.className = "question-btn";
    btn.id = `btn${i}`;
    btn.onclick = () => handleQuestionClick(i); // Attach click event
    questionPanel.appendChild(btn);
}
}


// Handle Question Button Click
function handleQuestionClick(questionNumber) {
storeAnswer(); // Save current answer before switching
const sectionIndex = Math.floor((questionNumber - 1) / 25); // Get section based on question number
const questionIndex = (questionNumber - 1) % 25; // Get question index in the section

if (sections[sectionIndex] && sections[sectionIndex][questionIndex]) {
    currentSection = sectionIndex; // Switch to the correct section
    currentQuestion = questionIndex; // Set to the correct question
    loadQuestion(currentQuestion);
    updateSectionBar(); // Highlight the correct section
} else {
    alert("Invalid question number!");
}
}

// Update Button Status
function updateQuestionPanel() {
for (let i = 1; i <= totalQuestions; i++) {
    const sectionIndex = Math.floor((i - 1) / 25);
    const questionIndex = (i - 1) % 25;
    const qIndex = `${sectionIndex}-${questionIndex}`;
    const btn = document.getElementById(`btn${i}`);

    if (markedForReview.includes(qIndex)) {
        btn.className = "question-btn marked";
    } 
    else if (skippedQuestions.includes(qIndex)) {
        btn.className = "question-btn skipped"; // Set to skipped if question was skipped
    } 
    else if (answers[qIndex]) {
        btn.className = "question-btn answered";
    } 
    else {
        btn.className = "question-btn not-answered";
    }
}
}



// Initialize the test
window.onload = function () {
loadQuestion(currentQuestion);
updateSectionBar();
startTimer();
createQuestionButtons();
updateQuestionPanel();
};

