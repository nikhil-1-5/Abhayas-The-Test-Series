const sections = [
    //Maths Section
    [
        {
          "question": "What is 10% of 50?",
          "options": ["2", "5", "10", "15"],
          "answer": "5"
        },
        {
          "question": "If x + 5 = 12, then x = ?",
          "options": ["5", "7", "10", "17"],
          "answer": "7"
        },
        {
          "question": "What is 20 multiplied by 3?",
          "options": ["17", "23", "60", "80"],
          "answer": "60"
        },
        {
          "question": "What is 15 divided by 3?",
          "options": ["3", "5", "12", "18"],
          "answer": "5"
        },
        {
          "question": "Find the area of a square with side 4 cm.",
          "options": ["8 cm²", "12 cm²", "16 cm²", "20 cm²"],
          "answer": "16 cm²"
        },
        {
          "question": "What is 1/2 of 10?",
          "options": ["2", "5", "8", "12"],
          "answer": "5"
        },
        {
          "question": "If a train travels 60 km in 2 hours, what is its speed?",
          "options": ["20 km/hr", "30 km/hr", "40 km/hr", "50 km/hr"],
          "answer": "30 km/hr"
        },
        {
          "question": "What is 100 - 35?",
          "options": ["55", "65", "75", "85"],
          "answer": "65"
        },
        {
          "question": "What is the sum of 12 and 18?",
          "options": ["20", "25", "30", "35"],
          "answer": "30"
        },
        {
          "question": "Find the perimeter of a rectangle with length 6 cm and width 4 cm.",
          "options": ["10 cm", "12 cm", "16 cm", "20 cm"],
          "answer": "20 cm"
        },
        {
          "question": "What is 5 squared (5²)?",
          "options": ["10", "15", "20", "25"],
          "answer": "25"
        },
        {
          "question": "What is the next number: 2, 4, 6, 8, ?",
          "options": ["9", "10", "11", "12"],
          "answer": "10"
        },
        {
          "question": "If a dozen eggs cost ₹60, how much does 1 egg cost?",
          "options": ["₹3", "₹5", "₹8", "₹10"],
          "answer": "₹5"
        },
        {
          "question": "What is 30% of 100?",
          "options": ["10", "20", "30", "40"],
          "answer": "30"
        },
        {
          "question": "What is 8 multiplied by 5?",
          "options": ["30", "35", "40", "45"],
          "answer": "40"
        },
        {
          "question": "What is 24 divided by 6?",
          "options": ["2", "4", "6", "8"],
          "answer": "4"
        },
        {
          "question": "Find the area of a rectangle with length 8 cm and width 3 cm.",
          "options": ["11 cm²", "21 cm²", "24 cm²", "27 cm²"],
          "answer": "24 cm²"
        },
        {
          "question": "What is 1/4 of 20?",
          "options": ["2", "5", "8", "10"],
          "answer": "5"
        },
        {
          "question": "If a car travels 100 km in 4 hours, what is its speed?",
          "options": ["20 km/hr", "25 km/hr", "30 km/hr", "35 km/hr"],
          "answer": "25 km/hr"
        },
        {
          "question": "What is 150 - 70?",
          "options": ["60", "70", "80", "90"],
          "answer": "80"
        },
        {
          "question": "What is the sum of 15 and 25?",
          "options": ["30", "35", "40", "45"],
          "answer": "40"
        },
        {
          "question": "Find the perimeter of a square with side 5 cm.",
          "options": ["10 cm", "15 cm", "20 cm", "25 cm"],
          "answer": "20 cm"
        },
        {
          "question": "What is 6 squared (6²)?",
          "options": ["24", "30", "36", "42"],
          "answer": "36"
        },
        {
          "question": "What is the next number: 3, 6, 9, 12, ?",
          "options": ["13", "14", "15", "16"],
          "answer": "15"
        },
        {
          "question": "If 5 pens cost ₹25, how much does 1 pen cost?",
          "options": ["₹3", "₹5", "₹8", "₹10"],
          "answer": "₹5"
        }
      ],
    // Reasoning Section
    [
        {
          "question": "Select the related word/letters/number from the given alternatives. 4 : 16 :: 6 : ?",
          "options": ["24", "36", "48", "60"],
          "answer": "36"
        },
        {
          "question": "Choose the odd one out: Apple, Banana, Potato, Orange.",
          "options": ["Apple", "Banana", "Potato", "Orange"],
          "answer": "Potato"
        },
        {
          "question": "Complete the series: 2, 4, 6, 8, ?",
          "options": ["9", "10", "11", "12"],
          "answer": "10"
        },
        {
          "question": "If 'SUN' is coded as 'TVO', then 'CAT' will be coded as?",
          "options": ["DBU", "DCU", "BDU", "CBU"],
          "answer": "DBU"
        },
        {
          "question": "If '+' means '-', '-' means 'x', 'x' means '÷' and '÷' means '+', then 10 + 5 - 3 x 2 ÷ 4 = ?",
          "options": ["9", "10", "11", "12"],
          "answer": "9"
        },
        {
          "question": "Find the missing number: 1, 4, 9, 16, ?",
          "options": ["20", "25", "30", "35"],
          "answer": "25"
        },
        {
          "question": "A is the brother of B. C is the father of A. How is C related to B?",
          "options": ["Father", "Mother", "Sister", "Brother"],
          "answer": "Father"
        },
        {
          "question": "If 'RED' is written as '6720', then 'GREEN' will be written as?",
          "options": ["9720", "97720", "97716", "97714"],
          "answer": "97720"
        },
        {
          "question": "Choose the next figure in the series: (Simple pattern of shapes)",
          "options": ["Option A", "Option B", "Option C", "Option D"],
          "answer": "Correct Option"
        },
        {
          "question": "How many triangles are there in the given figure? (Simple Triangle Counting)",
          "options": ["3", "4", "5", "6"],
          "answer": "Correct Number"
        },
        {
          "question": "Select the related word/letters/number from the given alternatives. 5 : 25 :: 7 : ?",
          "options": ["36", "49", "64", "81"],
          "answer": "49"
        },
        {
          "question": "Choose the odd one out: Chair, Table, Sofa, Book.",
          "options": ["Chair", "Table", "Sofa", "Book"],
          "answer": "Book"
        },
        {
          "question": "Complete the series: 3, 6, 9, 12, ?",
          "options": ["13", "14", "15", "16"],
          "answer": "15"
        },
        {
          "question": "If 'PEN' is coded as 'QFO', then 'DOG' will be coded as?",
          "options": ["EPH", "EPO", "EHO", "FHO"],
          "answer": "EPH"
        },
        {
          "question": "If '+' means '-', '-' means 'x', 'x' means '÷' and '÷' means '+', then 12 + 4 - 2 x 6 ÷ 3 = ?",
          "options": ["10", "11", "12", "13"],
          "answer": "10"
        },
        {
          "question": "Find the missing number: 2, 5, 10, 17, ?",
          "options": ["24", "26", "28", "30"],
          "answer": "26"
        },
        {
          "question": "P is the sister of Q. R is the mother of P. How is R related to Q?",
          "options": ["Mother", "Father", "Sister", "Brother"],
          "answer": "Mother"
        },
        {
          "question": "If 'BLUE' is written as '212215', then 'PINK' will be written as?",
          "options": ["1691411", "1691412", "1691311", "1691312"],
          "answer": "1691411"
        },
        {
          "question": "Choose the next figure in the series: (Simple pattern of lines)",
          "options": ["Option A", "Option B", "Option C", "Option D"],
          "answer": "Correct Option"
        },
        {
          "question": "How many squares are there in the given figure? (Simple Square Counting)",
          "options": ["3", "4", "5", "6"],
          "answer": "Correct Number"
        },
        {
          "question": "Select the related word/letters/number from the given alternatives. 3 : 9 :: 8 : ?",
          "options": ["24", "48", "64", "80"],
          "answer": "64"
        },
        {
          "question": "Choose the odd one out: Dog, Cat, Cow, Parrot.",
          "options": ["Dog", "Cat", "Cow", "Parrot"],
          "answer": "Parrot"
        },
        {
          "question": "Complete the series: 1, 3, 5, 7, ?",
          "options": ["8", "9", "10", "11"],
          "answer": "9"
        },
        {
          "question": "If 'INK' is coded as 'JOL', then 'RED' will be coded as?",
          "options": ["SFE", "SDE", "TFE", "TDE"],
          "answer": "SFE"
        },
        {
          "question": "If '+' means '-', '-' means 'x', 'x' means '÷' and '÷' means '+', then 15 + 3 - 5 x 2 ÷ 4 = ?",
          "options": ["10", "11", "12", "13"],
          "answer": "10"
        }
      ],

    // GK/GS/Current Affairs Section
    [
        {
          "question": "Which festival is known as the 'Festival of Lights'?",
          "options": ["Holi", "Diwali", "Eid", "Christmas"],
          "answer": "Diwali"
        },
        {
          "question": "What is the capital city of India?",
          "options": ["Mumbai", "Kolkata", "Delhi", "Chennai"],
          "answer": "Delhi"
        },
        {
          "question": "Which planet is known as the 'Red Planet'?",
          "options": ["Venus", "Mars", "Jupiter", "Saturn"],
          "answer": "Mars"
        },
        {
          "question": "What is the largest mammal in the world?",
          "options": ["Elephant", "Giraffe", "Blue Whale", "Lion"],
          "answer": "Blue Whale"
        },
        {
          "question": "Which of these is a fruit?",
          "options": ["Carrot", "Potato", "Apple", "Spinach"],
          "answer": "Apple"
        },
        {
          "question": "What is the name of India's national bird?",
          "options": ["Crow", "Pigeon", "Peacock", "Sparrow"],
          "answer": "Peacock"
        },
        {
          "question": "Which is the largest ocean in the world?",
          "options": ["Indian Ocean", "Atlantic Ocean", "Arctic Ocean", "Pacific Ocean"],
          "answer": "Pacific Ocean"
        },
        {
          "question": "How many days are there in a week?",
          "options": ["5", "6", "7", "8"],
          "answer": "7"
        },
        {
          "question": "What is the primary source of Vitamin D?",
          "options": ["Fruits", "Vegetables", "Sunlight", "Milk"],
          "answer": "Sunlight"
        },
        {
          "question": "Which is the tallest mountain in the world?",
          "options": ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
          "answer": "Mount Everest"
        },
        {
          "question": "What is the national animal of India?",
          "options": ["Lion", "Tiger", "Elephant", "Horse"],
          "answer": "Tiger"
        },
        {
          "question": "Which gas do plants use for photosynthesis?",
          "options": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
          "answer": "Carbon Dioxide"
        },
        {
          "question": "Who wrote the Indian National Anthem?",
          "options": ["Mahatma Gandhi", "Rabindranath Tagore", "Jawaharlal Nehru", "Sardar Patel"],
          "answer": "Rabindranath Tagore"
        },
        {
          "question": "Which is the largest desert in the world?",
          "options": ["Sahara Desert", "Gobi Desert", "Antarctic Polar Desert", "Arabian Desert"],
          "answer": "Antarctic Polar Desert"
        },
        {
          "question": "What is the main ingredient of bread?",
          "options": ["Rice", "Wheat", "Corn", "Barley"],
          "answer": "Wheat"
        },
        {
          "question": "Which river is known as the 'Holy River' in India?",
          "options": ["Yamuna", "Ganga", "Brahmaputra", "Indus"],
          "answer": "Ganga"
        },
        {
          "question": "What is the shape of the earth?",
          "options": ["Flat", "Square", "Round", "Triangle"],
          "answer": "Round"
        },
        {
          "question": "Which is the fastest animal on land?",
          "options": ["Lion", "Tiger", "Cheetah", "Leopard"],
          "answer": "Cheetah"
        },
        {
          "question": "What is the name of the currency used in India?",
          "options": ["Dollar", "Euro", "Rupee", "Pound"],
          "answer": "Rupee"
        },
        {
          "question": "Which color symbolizes peace?",
          "options": ["Red", "Blue", "White", "Black"],
          "answer": "White"
        },
        {
          "question": "What is the process by which plants make their own food?",
          "options": ["Respiration", "Digestion", "Photosynthesis", "Transpiration"],
          "answer": "Photosynthesis"
        },
        {
          "question": "Which is the largest state in India by area?",
          "options": ["Uttar Pradesh", "Maharashtra", "Rajasthan", "Madhya Pradesh"],
          "answer": "Rajasthan"
        },
        {
          "question": "What is the name of the instrument used to measure blood pressure?",
          "options": ["Thermometer", "Barometer", "Sphygmomanometer", "Hygrometer"],
          "answer": "Sphygmomanometer"
        },
          {
          "question": "Which festival marks the end of Ramadan?",
          "options": ["Holi", "Diwali", "Eid", "Christmas"],
          "answer": "Eid"
        },
        {
          "question": "What is the main gas present in air?",
          "options": ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
          "answer": "Nitrogen"
        }
      ],
      //English
      [
        {
          "question": "Choose the synonym of 'BEGIN'.",
          "options": ["End", "Start", "Finish", "Stop"],
          "answer": "Start"
        },
        {
          "question": "Select the antonym of 'LOUD'.",
          "options": ["Noisy", "Quiet", "Strong", "Big"],
          "answer": "Quiet"
        },
        {
          "question": "Find the correctly spelled word.",
          "options": ["Traveling", "Travelling", "Travling", "Travellng"],
          "answer": "Traveling"
        },
        {
          "question": "Fill in the blank: 'She arrived ______ the station.'",
          "options": ["in", "at", "on", "with"],
          "answer": "at"
        },
        {
          "question": "What is the meaning of 'to get along'?",
          "options": ["To fight", "To agree", "To disagree", "To ignore"],
          "answer": "To agree"
        },
        {
          "question": "One word substitute for 'a person who can’t see'.",
          "options": ["Deaf", "Dumb", "Blind", "Lame"],
          "answer": "Blind"
        },
        {
          "question": "Identify the error: 'He have many books.'",
          "options": ["He have", "many", "books", "no error"],
          "answer": "He have"
        },
        {
          "question": "Change to passive voice: 'The dog chased the cat.'",
          "options": ["The cat chased by dog.", "The cat was chased by the dog.", "The dog is chasing the cat.", "Cat was chased by dog."],
          "answer": "The cat was chased by the dog."
        },
        {
          "question": "Change to indirect speech: 'She said, 'Are you coming?'",
          "options": ["She asked if I am coming.", "She asked if I was coming.", "She said that I am coming.", "She told me I was coming."],
          "answer": "She asked if I was coming."
        },
        {
          "question": "Fill the blank with correct article: 'He is ______ best student.'",
          "options": ["a", "an", "the", "no article"],
          "answer": "the"
        },
        {
          "question": "Choose the synonym of 'CHOOSE'.",
          "options": ["Reject", "Select", "Ignore", "Deny"],
          "answer": "Select"
        },
        {
          "question": "Select the antonym of 'GIVE'.",
          "options": ["Share", "Take", "Offer", "Provide"],
          "answer": "Take"
        },
        {
          "question": "Find the correctly spelled word.",
          "options": ["Opposite", "Oppossite", "Opposit", "Oppositte"],
          "answer": "Opposite"
        },
        {
          "question": "Fill in the blank: 'He is waiting ______ his friend.'",
          "options": ["to", "for", "in", "at"],
          "answer": "for"
        },
        {
          "question": "What is the meaning of 'to look after'?",
          "options": ["To ignore", "To care for", "To damage", "To forget"],
          "answer": "To care for"
        },
        {
          "question": "One word substitute for 'a person who can speak two languages'.",
          "options": ["Monolingual", "Bilingual", "Multilingual", "Polyglot"],
          "answer": "Bilingual"
        },
        {
          "question": "Identify the error: 'They goes to school daily.'",
          "options": ["They goes", "to school", "daily", "no error"],
          "answer": "They goes"
        },
        {
          "question": "Change to passive voice: 'She is painting a picture.'",
          "options": ["A picture painted by her.", "A picture is being painted by her.", "She painted a picture.", "Picture being painted by her."],
          "answer": "A picture is being painted by her."
        },
        {
          "question": "Change to indirect speech: 'He said, 'Where are you going?'",
          "options": ["He asked where am I going.", "He asked where I was going.", "He said where I am going.", "He told me where I went."],
          "answer": "He asked where I was going."
        },
        {
          "question": "Fill the blank with correct article: 'She saw ______ elephant.'",
          "options": ["a", "an", "the", "no article"],
          "answer": "an"
        },
        {
          "question": "Choose the synonym of 'ASK'.",
          "options": ["Answer", "Question", "Reply", "Ignore"],
          "answer": "Question"
        },
        {
          "question": "Select the antonym of 'ARRIVE'.",
          "options": ["Come", "Depart", "Reach", "Enter"],
          "answer": "Depart"
        },
        {
          "question": "Find the correctly spelled word.",
          "options": ["Accomodation", "Accommodation", "Accomodation", "Acommodation"],
          "answer": "Accommodation"
        },
        {
          "question": "Fill in the blank: 'He is dependent ______ his parents.'",
          "options": ["in", "on", "at", "with"],
          "answer": "on"
        },
        {
          "question": "What is the meaning of 'to make up'?",
          "options": ["To break", "To invent", "To destroy", "To forget"],
          "answer": "To invent"
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

