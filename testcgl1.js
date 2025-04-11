const sections = [
    //Maths Section
    [
        {
          "question": "What is the value of (12 + 8) × 3 - 5?",
          "options": ["55", "65", "50", "60"],
          "answer": "55"
        },
        {
          "question": "If a train travels 120 km in 2 hours, what is its speed in km/hr?",
          "options": ["40", "50", "60", "70"],
          "answer": "60"
        },
        {
          "question": "Solve for x: 2x + 5 = 15",
          "options": ["5", "10", "12", "8"],
          "answer": "5"
        },
        {
          "question": "What is 25% of 80?",
          "options": ["10", "15", "20", "25"],
          "answer": "20"
        },
        {
          "question": "Find the area of a rectangle with length 10 cm and width 5 cm.",
          "options": ["25 cm²", "50 cm²", "75 cm²", "100 cm²"],
          "answer": "50 cm²"
        },
        {
          "question": "What is the next number in the sequence: 2, 4, 6, 8, ...?",
          "options": ["9", "10", "11", "12"],
          "answer": "10"
        },
        {
          "question": "If a = 3 and b = 4, what is the value of a² + b²?",
          "options": ["7", "12", "25", "49"],
          "answer": "25"
        },
        {
          "question": "What is the sum of the angles in a triangle?",
          "options": ["90°", "180°", "270°", "360°"],
          "answer": "180°"
        },
        {
          "question": "If the diameter of a circle is 14 cm, what is its radius?",
          "options": ["7 cm", "14 cm", "21 cm", "28 cm"],
          "answer": "7 cm"
        },
        {
          "question": "What is the value of √144?",
          "options": ["10", "11", "12", "13"],
          "answer": "12"
        },
        {
          "question": "Convert 0.75 to a fraction.",
          "options": ["1/4", "1/2", "3/4", "4/5"],
          "answer": "3/4"
        },
        {
          "question": "If a car travels at 60 km/hr, how far does it travel in 30 minutes?",
          "options": ["15 km", "20 km", "30 km", "45 km"],
          "answer": "30 km"
        },
        {
          "question": "What is the value of 5³?",
          "options": ["15", "25", "125", "625"],
          "answer": "125"
        },
        {
          "question": "Find the average of 10, 20, and 30.",
          "options": ["10", "15", "20", "25"],
          "answer": "20"
        },
        {
          "question": "If the cost of 5 pens is ₹50, what is the cost of 1 pen?",
          "options": ["₹5", "₹10", "₹15", "₹20"],
          "answer": "₹10"
        },
        {
          "question": "What is the value of 10% of 200?",
          "options": ["10", "20", "30", "40"],
          "answer": "20"
        },
        {
          "question": "Solve for x: x/3 = 6",
          "options": ["2", "9", "18", "24"],
          "answer": "18"
        },
        {
          "question": "What is the area of a circle with radius 7 cm? (Use π = 22/7)",
          "options": ["44 cm²", "88 cm²", "154 cm²", "308 cm²"],
          "answer": "154 cm²"
        },
        {
          "question": "What is the value of 2^6?",
          "options": ["16", "32", "64", "128"],
          "answer": "64"
        },
        {
          "question": "If 3x + 7 = 22, then x = ?",
          "options": ["3", "5", "7", "9"],
          "answer": "5"
        },
        {
          "question": "What is the perimeter of a square with side length 8 cm?",
          "options": ["16 cm", "24 cm", "32 cm", "64 cm"],
          "answer": "32 cm"
        },
        {
          "question": "Find the value of 15% of 120.",
          "options": ["12", "15", "18", "20"],
          "answer": "18"
        },
        {
          "question": "What is the value of 1/2 + 1/4?",
          "options": ["1/8", "1/6", "3/4", "2/3"],
          "answer": "3/4"
        },
        {
          "question": "If a train travels 240 km in 3 hours, what is its average speed?",
          "options": ["60 km/hr", "80 km/hr", "90 km/hr", "100 km/hr"],
          "answer": "80 km/hr"
        },
        {
          "question": "What is the value of √225?",
          "options": ["12", "13", "14", "15"],
          "answer": "15"
        }
      ],
    // Reasoning Section
    [
        {
          "question": "If all cats are mammals and some mammals are pets, which of the following must be true?",
          "options": ["All cats are pets", "Some cats are pets", "No cats are pets", "Some mammals are not cats"],
          "answer": "Some mammals are not cats"
        },
        {
          "question": "A is taller than B, and B is shorter than C. D is taller than C. Who is the shortest?",
          "options": ["A", "B", "C", "D"],
          "answer": "B"
        },
        {
          "question": "If 'TABLE' is coded as 'UBAMD', how is 'CHAIR' coded?",
          "options": ["DIBSJ", "BIDHS", "IDJSB", "SBJID"],
          "answer": "DIBSJ"
        },
        {
          "question": "Complete the series: 2, 5, 9, 14, ?",
          "options": ["19", "20", "22", "24"],
          "answer": "20"
        },
        {
          "question": "If 'blue' means 'red', 'red' means 'yellow', and 'yellow' means 'green', what is the color of ripe bananas?",
          "options": ["Red", "Blue", "Green", "Yellow"],
          "answer": "Green"
        },
        {
          "question": "A clock loses 5 minutes every hour. If it is set correctly at 6 AM, what time will it show at 12 PM?",
          "options": ["11:30 AM", "11:45 AM", "12:15 PM", "12:30 PM"],
          "answer": "11:30 AM"
        },
        {
          "question": "Find the odd one out: Apple, Banana, Carrot, Orange.",
          "options": ["Apple", "Banana", "Carrot", "Orange"],
          "answer": "Carrot"
        },
        {
          "question": "Some books are pens. All pens are pencils. Which of the following is a definite conclusion?",
          "options": ["Some books are pencils", "All books are pencils", "No books are pencils", "Some pencils are not books"],
          "answer": "Some books are pencils"
        },
        {
          "question": "If 'SQUARE' is related to 'RECTANGLE', how is 'CIRCLE' related to?",
          "options": ["Triangle", "Ellipse", "Line", "Cube"],
          "answer": "Ellipse"
        },
        {
          "question": "A person walks 10 meters north, then 5 meters east, then 10 meters south. How far is he from the starting point?",
          "options": ["5 meters", "10 meters", "15 meters", "25 meters"],
          "answer": "5 meters"
        },
        {
          "question": "If 'PAPER' is coded as 'OZODQ', how is 'PENCIL' coded?",
          "options": ["ODMBHK", "ODQCHM", "ODMBJM", "ODQBHJ"],
          "answer": "ODMBHK"
        },
        {
          "question": "Complete the series: 1, 4, 9, 16, ?",
          "options": ["20", "25", "30", "36"],
          "answer": "25"
        },
        {
          "question": "If 'water' is 'food', 'food' is 'tree', 'tree' is 'sky', 'sky' is 'well', where do birds fly?",
          "options": ["Water", "Food", "Tree", "Well"],
          "answer": "Well"
        },
        {
          "question": "A is the brother of B. C is the father of A. D is the sister of C. How is B related to D?",
          "options": ["Nephew/Niece", "Aunt/Uncle", "Sister/Brother", "Cousin"],
          "answer": "Aunt/Uncle"
        },
        {
          "question": "Find the odd one out: January, March, April, July.",
          "options": ["January", "March", "April", "July"],
          "answer": "April"
        },
        {
          "question": "Some tables are chairs. No chairs are benches. Which of the following is a definite conclusion?",
          "options": ["Some tables are benches", "No tables are benches", "Some tables are not benches", "All tables are benches"],
          "answer": "Some tables are not benches"
        },
        {
          "question": "If 'LION' is related to 'CUB', how is 'HEN' related to?",
          "options": ["Lamb", "Kid", "Chick", "Calf"],
          "answer": "Chick"
        },
        {
          "question": "A person travels 12 km south, then 5 km west. What is the shortest distance from the starting point?",
          "options": ["7 km", "13 km", "17 km", "60 km"],
          "answer": "13 km"
        },
        {
          "question": "If 'MASTER' is coded as 'RCTVGP', how is 'DOCTOR' coded?",
          "options": ["FQEVQT", "FQEVQR", "FQEVRP", "FQEVSP"],
          "answer": "FQEVQT"
        },
        {
          "question": "Complete the series: 3, 8, 15, 24, ?",
          "options": ["35", "36", "37", "38"],
          "answer": "35"
        },
        {
          "question": "If 'book' is 'pen', 'pen' is 'notebook', 'notebook' is 'eraser', what is used to write on paper?",
          "options": ["Book", "Pen", "Notebook", "Eraser"],
          "answer": "Notebook"
        },
        {
          "question": "E is the sister of F. G is the mother of F. H is the father of G. How is E related to H?",
          "options": ["Granddaughter", "Daughter", "Aunt", "Sister"],
          "answer": "Granddaughter"
        },
        {
          "question": "Find the odd one out: Triangle, Square, Pentagon, Cylinder.",
          "options": ["Triangle", "Square", "Pentagon", "Cylinder"],
          "answer": "Cylinder"
        },
        {
          "question": "Some fruits are vegetables. All vegetables are plants. Which of the following is a definite conclusion?",
          "options": ["Some fruits are plants", "All fruits are plants", "No fruits are plants", "Some plants are not fruits"],
          "answer": "Some fruits are plants"
        },
        {
          "question": "If 'MUSIC' is related to 'PIANO', how is 'PAINTING' related to?",
          "options": ["Sculpture", "Canvas", "Pottery", "Photography"],
          "answer": "Canvas"
        }
      ],

    // GK/GS/Current Affairs Section
    [
        {
          "question": "Which article of the Indian Constitution deals with the establishment and constitution of the Supreme Court?",
          "options": ["Article 124", "Article 280", "Article 324", "Article 356"],
          "answer": "Article 124"
        },
        {
          "question": "The 'Battle of Buxar' was fought in which year?",
          "options": ["1757", "1764", "1857", "1805"],
          "answer": "1764"
        },
        {
          "question": "Which of the following is the largest freshwater lake in India?",
          "options": ["Chilika Lake", "Wular Lake", "Pulicat Lake", "Sambhar Lake"],
          "answer": "Wular Lake"
        },
        {
          "question": "The 'Green Revolution' in India is associated with which sector?",
          "options": ["Industry", "Agriculture", "Services", "Finance"],
          "answer": "Agriculture"
        },
        {
          "question": "Who is the author of the book 'The Discovery of India'?",
          "options": ["Mahatma Gandhi", "Jawaharlal Nehru", "Rabindranath Tagore", "Sardar Patel"],
          "answer": "Jawaharlal Nehru"
        },
        {
          "question": "The 'Instrument of Accession' was signed by the rulers of princely states to join which country?",
          "options": ["Pakistan", "Bangladesh", "India", "Nepal"],
          "answer": "India"
        },
        {
          "question": "Which gas is commonly known as 'laughing gas'?",
          "options": ["Carbon dioxide", "Nitrous oxide", "Methane", "Sulfur dioxide"],
          "answer": "Nitrous oxide"
        },
        {
          "question": "In which state is the 'Konark Sun Temple' located?",
          "options": ["Rajasthan", "Gujarat", "Odisha", "Tamil Nadu"],
          "answer": "Odisha"
        },
        {
          "question": "The 'Right to Education' became a fundamental right in India through which amendment?",
          "options": ["42nd Amendment", "44th Amendment", "86th Amendment", "91st Amendment"],
          "answer": "86th Amendment"
        },
        {
          "question": "Which of the following is a classical dance form of Kerala?",
          "options": ["Kuchipudi", "Kathak", "Bharatanatyam", "Kathakali"],
          "answer": "Kathakali"
        },
        {
          "question": "The 'Planning Commission' of India was replaced by which institution?",
          "options": ["RBI", "SEBI", "NITI Aayog", "NABARD"],
          "answer": "NITI Aayog"
        },
        {
          "question": "Which river is known as the 'Sorrow of Bihar'?",
          "options": ["Ganga", "Yamuna", "Kosi", "Brahmaputra"],
          "answer": "Kosi"
        },
        {
          "question": "The 'Indian National Congress' was founded in which year?",
          "options": ["1857", "1885", "1905", "1947"],
          "answer": "1885"
        },
        {
          "question": "Which of the following is a metallic mineral?",
          "options": ["Coal", "Mica", "Iron ore", "Limestone"],
          "answer": "Iron ore"
        },
        {
          "question": "The 'First Five Year Plan' in India was launched in which year?",
          "options": ["1947", "1951", "1961", "1971"],
          "answer": "1951"
        },
        {
          "question": "Who was the first Indian woman to win an Olympic medal?",
          "options": ["PT Usha", "Karnam Malleswari", "Mary Kom", "Saina Nehwal"],
          "answer": "Karnam Malleswari"
        },
        {
          "question": "Which of the following is a greenhouse gas?",
          "options": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
          "answer": "Carbon dioxide"
        },
        {
          "question": "The 'Quit India Movement' was launched in which year?",
          "options": ["1920", "1930", "1942", "1947"],
          "answer": "1942"
        },
        {
          "question": "Which state has the longest coastline in India?",
          "options": ["Kerala", "Tamil Nadu", "Gujarat", "Andhra Pradesh"],
          "answer": "Gujarat"
        },
        {
          "question": "The 'Fundamental Duties' are mentioned in which part of the Indian Constitution?",
          "options": ["Part III", "Part IV", "Part IVA", "Part V"],
          "answer": "Part IVA"
        },
        {
          "question": "Which of the following is a water-soluble vitamin?",
          "options": ["Vitamin A", "Vitamin D", "Vitamin E", "Vitamin C"],
          "answer": "Vitamin C"
        },
        {
          "question": "The 'Simon Commission' visited India in which year?",
          "options": ["1919", "1927", "1935", "1942"],
          "answer": "1927"
        },
        {
          "question": "Which of the following is a major port on the eastern coast of India?",
          "options": ["Kandla", "Mumbai", "Chennai", "Mormugao"],
          "answer": "Chennai"
        },
        {
          "question": "The 'Mughal Empire' was founded by whom?",
          "options": ["Akbar", "Shah Jahan", "Babur", "Aurangzeb"],
          "answer": "Babur"
        },
        {
          "question": "Which of the following is a renewable source of energy?",
          "options": ["Coal", "Natural gas", "Solar energy", "Petroleum"],
          "answer": "Solar energy"
        }
      ],
      //English
      [
        {
          "question": "Select the most appropriate synonym of 'ABOLISH'.",
          "options": ["Establish", "Continue", "Annul", "Maintain"],
          "answer": "Annul"
        },
        {
          "question": "Choose the antonym of 'LUCID'.",
          "options": ["Clear", "Obscure", "Transparent", "Evident"],
          "answer": "Obscure"
        },
        {
          "question": "Identify the correctly spelt word.",
          "options": ["Accomodate", "Accommodate", "Acomodate", "Acommodate"],
          "answer": "Accommodate"
        },
        {
          "question": "Fill in the blank with the appropriate preposition: He is proficient ______ mathematics.",
          "options": ["in", "at", "on", "with"],
          "answer": "in"
        },
        {
          "question": "Select the most appropriate meaning of the idiom: 'To cut a long story short'.",
          "options": ["To extend a story", "To narrate a brief version", "To tell a detailed story", "To create a fictional story"],
          "answer": "To narrate a brief version"
        },
        {
          "question": "Choose the one word substitution for 'A person who studies the formation of the earth'.",
          "options": ["Geologist", "Botanist", "Zoologist", "Astronomer"],
          "answer": "Geologist"
        },
        {
          "question": "Identify the part of the sentence that has an error: 'Neither he nor his friends was invited to the party.'",
          "options": ["Neither he", "nor his friends", "was invited", "to the party"],
          "answer": "was invited"
        },
        {
          "question": "Select the most appropriate passive form of the given sentence: 'They will complete the project next week.'",
          "options": ["The project will be completed next week.", "The project was completed next week.", "The project is completed next week.", "The project has been completed next week."],
          "answer": "The project will be completed next week."
        },
        {
          "question": "Choose the correct indirect form of the sentence: 'He said, 'I am going to the library.'",
          "options": ["He said that he is going to the library.", "He said that he was going to the library.", "He said that he will go to the library.", "He said that I am going to the library."],
          "answer": "He said that he was going to the library."
        },
        {
          "question": "Fill in the blank with the correct article: 'He is ______ honest man.'",
          "options": ["a", "an", "the", "no article"],
          "answer": "an"
        },
        {
          "question": "Select the most appropriate synonym of 'CONCISE'.",
          "options": ["Lengthy", "Brief", "Detailed", "Verbose"],
          "answer": "Brief"
        },
        {
          "question": "Choose the antonym of 'FRUGAL'.",
          "options": ["Economical", "Extravagant", "Thrifty", "Spendy"],
          "answer": "Extravagant"
        },
        {
          "question": "Identify the correctly spelt word.",
          "options": ["Recieve", "Receive", "Recieve", "Receve"],
          "answer": "Receive"
        },
        {
          "question": "Fill in the blank with the appropriate preposition: 'She is afraid ______ spiders.'",
          "options": ["of", "with", "at", "by"],
          "answer": "of"
        },
        {
          "question": "Select the most appropriate meaning of the idiom: 'To add fuel to the fire'.",
          "options": ["To extinguish a fire", "To worsen a situation", "To start a fire", "To ignore a problem"],
          "answer": "To worsen a situation"
        },
        {
          "question": "Choose the one word substitution for 'A person who is present everywhere'.",
          "options": ["Omnipotent", "Omniscient", "Omnipresent", "Ubiquitous"],
          "answer": "Omnipresent"
        },
        {
          "question": "Identify the part of the sentence that has an error: 'Each of the boys have completed their assignment.'",
          "options": ["Each of the boys", "have completed", "their assignment", "no error"],
          "answer": "have completed"
        },
        {
          "question": "Select the most appropriate passive form of the given sentence: 'Someone stole my wallet.'",
          "options": ["My wallet was stolen.", "My wallet is stolen.", "My wallet has been stolen.", "My wallet had been stolen."],
          "answer": "My wallet was stolen."
        },
        {
          "question": "Choose the correct indirect form of the sentence: 'She asked, 'Where are you going?'",
          "options": ["She asked where I am going.", "She asked where I was going.", "She asked where I will go.", "She asked where are you going."],
          "answer": "She asked where I was going."
        },
        {
          "question": "Fill in the blank with the correct article: 'He is ______ university student.'",
          "options": ["a", "an", "the", "no article"],
          "answer": "a"
        },
        {
          "question": "Select the most appropriate synonym of 'DILIGENT'.",
          "options": ["Lazy", "Careless", "Industrious", "Negligent"],
          "answer": "Industrious"
        },
        {
          "question": "Choose the antonym of 'BENEVOLENT'.",
          "options": ["Kind", "Malicious", "Generous", "Compassionate"],
          "answer": "Malicious"
        },
        {
          "question": "Identify the correctly spelt word.",
          "options": ["Committee", "Commitee", "Committe", "Comitee"],
          "answer": "Committee"
        },
        {
          "question": "Fill in the blank with the appropriate preposition: 'The book is written ______ Shakespeare.'",
          "options": ["by", "with", "on", "in"],
          "answer": "by"
        },
        {
          "question": "Select the most appropriate meaning of the idiom: 'To bite the bullet'.",
          "options": ["To avoid a difficult situation", "To endure a painful situation", "To create a difficult situation", "To ignore a painful situation"],
          "answer": "To endure a painful situation"
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

