const sections = [
    //Maths Section
    [
        { question: "Which digits should come in place * and $,respectively, if the number 72864*$ is divisible by both 8 and 5?", options: ["4 and 0", "2 and 0", "2 and 5", "4 and 5"], answer: "1. 4 and 0" },
        { question: "In a triangle PQR, S is a point on the side QR such that PS⊥QR, then which of the following options is true??", options: ["PS2 + PR2 = PQ2 + QR2", "PR2 + QS2 = PQ2 + SR2", " PQ2 + PR2 = QS2 + SR2", "PS2 + QS2 = PQ2 + PR2"], answer: "PR2 + QS2 = PQ2 + SR2" },
        { question: "Simplify : 15.5 − [3 − {7 − (5 − (14.5 − 13.5))}]", options: ["15.5", "13.5", "12.5", "14.5"], answer: "15.5" },
        { question: "The incomes of P, Q and R are in the ratio 10 : 12 : 9 and their expenditures are in the ratio 12 : 15 : 8. If Q saves 25% of his income, then what is the ratio of the savings of P, Q and R?", options: ["15 : 14 : 21", "14 : 15 : 21", " 21 : 15 : 14", "21 : 14 : 15"], answer: "14 : 15 : 21" },
        { question: "In triangles ABC and DEF, AB = FD and ∠A = ∠D. The two triangles are congruent by SAS criterion if: ", options: ["BC = DE", "AC = EF", "BC = EF", "AC = DE"], answer: "AC = DE" },
        { question: "Two pipes, A and B, can fill a tank in 10 minutes and 20 minutes, respectively. The pipe C can empty the tank in 30 minutes.All the three pipes are opened at a time in the beginning. However, pipe C is closed 2 minutes before the tank is filled. Inwhat time, will the tank be full (in minutes)? ", options: ["1.12", "2.10", "3.8", "4.6"], answer: "3.8" },
        { question: "A payment of ₹120 is made with ₹10, ₹5 and ₹2 coins. A total of 25 coins are used. Which of the following is the number of ₹10 coins used in the payment? ", options: ["1.6", "2.4", "3.10", "4.8"], answer: "4.8"},
        { question: "If 28.9 : x :: x : 36.1, and x > 0, then find the value of x.", options: ["38.3", "32.3", "30.4", "35"], answer: "32.3" },
        { question: "The height of a cylinder is 20 cm. The lateral surface area is 1760 cm2. Its volume is:", options: ["12032 cm3", "12302 cm3", "12203 cm3", "12320 cm3"], answer: "12320 cm3"},
        { question: "Raj divides ₹1,200 in the ratio 2 : 1 : 3 among three of his friends. The amount equal to the sum of three times the largestshare and two times the smallest share is: ", options: ["₹2,400", " ₹1,800", " ₹2,200", "₹2,000"], answer: " ₹2,200"},
        { question: "A shopkeeper marked an article at ₹5,000. The shopkeeper allows successive discounts of 20%,15% and 10%. The selling price of the article is:", options: ["₹2,750", " ₹3,000", "₹2,800", "₹3,060"], answer: ". ₹3,060" },
        { question: "The average of 12 numbers is 48. The average of the first 5 numbers is 45 and the average of next 4 numbers is 52. If the 10th number is 10 less than the 11th number and is 5 more than the 12th number, then the average of the 11 th and 12th numbers is:", options: ["50.5", "46.5", "47.5", "48.5"], answer: "48.5" },
        { question: "Find the value of the following expression.√1+sin θ/1−sin θ ", options: ["sec θ+tan θ ", "cosec θ+ tan θ", "cosec θ+cot θ", "sec θ+cot θ"], answer: "sec θ+tan θ" },
        { question: "M and N walk along a circular track. They start at 5:00 a.m. from the same point in the opposite directions. M and N walk at aspeed of 5 rounds per hour and 2 rounds per hour, respectively. How many times will they cross each other before 6.30 a.m. on the same day?", options: ["1.10", "2.3", "3.5", "4.7"], answer: "1.10" },
        { question: "The measures of the three angles of a triangle are in the ratio 17 : 13 : 15. Find the positive difference between the greatest and the smallest of these three angles.", options: ["1. 16°", "2.24°", "3.20°", "4.12°"], answer: "1.16°"},
        { question: "A certain sum of money becomes seven times itself when invested at a certain rate of simple interest, in 14 years. Howmuch time (in years, rounded off to 2 decimal places) will it take to become 18 times itself at the same rate?", options: ["27.33", "39.67", "42.78", "35.5"], answer: "39.67" },
        { question: "Madhav purchased an item for ₹42,000 and sold it at a loss of 20%. With that amount, he purchased another item and sold it at a gain of 30%. What is the overall gain (in ₹)? ", options: ["6720", "4200", "1680", "2520"], answer: "1680"},
        { question: "Seven years ago, Prachi was four times as old as her daughter was at that time. Four years from now, Prachi will be twoand-a-half times as old as her daughter would then be. Find the sum of the present ages (in years) of Prachi and herdaughter.", options: ["1.69", "2.77", "3.49", "4.72"], answer: "1.69" },
        { question: "From a circle with the radius of 15.75 cm, a sector with the arc length of 11 cm is cut off. Find the area (in cm2) of this sector.", options: ["86.525", "86.625", "86.875", "86.125"], answer: "86.625" },
        { question: "The marked price of an article is 26% more than its cost price. If a discount of 32% is given, what will be the loss percentage?", options: ["18.64%","15.25%","12.26%","14.32%"], answer: "14.32%" },
        { question: "A person earns ₹16,000 per month and spends 80% of his income and saves the remaining amount. If his income increasesby 20% and expenditure by 10%, find the percentage of increase in his savings.", options: ["1. 140%", "2. 90%", "3. 120%", "4. 60%"], answer: "4. 60%" },
        { question: "Without doing the actual division, find the remainder when 28735429 is divided by 9", options: ["1.4", "2.2", "3.2", "4.1"], answer: "4.1" },
        { question: "Let C be a circle with centre O and P be an external point to C. Let PA and PB be two tangents to C with A and B being thepoints of tangency, respectively. If PA and PB are inclined to each other at an angle of 60°, then find∠POA.", options: ["1.40°", "2. 60°", "3. 80°", "4. 30°"], answer: "2. 60°" },
        { question: "At present, A is thrice as old as B. C is 5 years elder than B. The sum of the ages of A, B, C is 75 years. The ratio of the ageof B five years ago to the age of A three years from now is:", options: ["1.2:3", "2.1:4", "3.4:7", "4.1:5"], answer: "4.1:5" },
        { question: "If x varies inversely as y and x = 2 when y = 6, then the value of y when x = 3 is:", options: ["1.2", "2.3", "3.4", "4.6"], answer: "3.4" }
    ],
    // Reasoning Section
[
    { question: "The position of how many letters will remain unchanged if all the letters in the word 'BINDER' are arranged in English alphabetical order?", options: ["None", "One", "Two", "Three"], answer: "Two" },
    { question: "‘WISK’ is related to ‘DRHP’ in a certain way. In the same way, ‘LENT’ is related to ‘OVMG’. To which of the following is ‘BANG’ related?", options: ["ZYLU", "ZYNS", "YZNU", "YZMT"], answer: "YZMT" },
    { question: "Which of the following sets follows the same pattern as: 22 – 44 – 88 – 123?", options: ["25 – 50 – 100 – 125", "11 – 22 – 66 – 101", "30 – 60 – 90 – 115", "22 – 44 – 88 – 123"], answer: "22 – 44 – 88 – 123" },
    { question: "Select the number from the given options to complete the series: 25, 30, 40, 55, 75, ___", options: ["105", "85", "80", "100"], answer: "100" },
    { question: "The position of how many letters will remain unchanged if all the letters in the word ‘ENTOMB’ are arranged alphabetically?", options: ["None", "Two", "One", "Three"], answer: "None" },
    { question: "Six words — Eat, Cry, Play, Sleep, Run, and Bath — are on the faces of a dice. If the visible sides are shown in the figure, which word is on the face opposite to 'Eat'?", options: ["Play", "Cry", "Sleep", "Run"], answer: "Run" },
    { question: "Two different positions of a dice with faces T, O, B, L, Y, and V are shown. What letter is on the face opposite to 'L'?", options: ["Y", "B", "V", "O"], answer: "O" },
    { question: "Select the word-pair that best represents a similar relationship to: Virus : Parasite", options: ["Fungus : Jasmine", "Amaltas : Tree", "Fenugreek : Microorganism", "Algae : Flower"], answer: "Amaltas : Tree" },
    { question: "Select the pair where numbers follow the same logic as (213, 157) and (185, 129)", options: ["(171, 123)", "(189, 141)", "(164, 108)", "(192, 152)"], answer: "(164, 108)" },
    { question: "Three of the four options are alike. Find the one that is different.", options: ["540 – 188 – 128", "72 – 284 – 266", "81 – 101 – 92", "90 – 22 – 12"], answer: "72 – 284 – 266" },
    { question: "What comes next in the series? IMHP, MPJQ, QSLR, UVNS, ?", options: ["YYPT", "YYOT", "YXPT", "XYPT"], answer: "YYPT" },
    { question: "In a certain code language, ‘FACED’ is written as ‘GZDDE’ and ‘VACAY’ as ‘WZDZZ’. How will ‘LABOR’ be written?", options: ["MZCNS", "MBCPS", "MBDPS", "MADMS"], answer: "MZCNS" },
    { question: "Which two signs should be interchanged to make the equation correct: 247 ÷ 13 + 16 × 3 − 148 = 119?", options: ["+ and ×", "− and +", "− and ×", "÷ and ×"], answer: "− and +" },
    { question: "If ‘FIVE’ is written as ‘12184410’ and ‘FOUR’ as ‘12304236’, how is ‘THREE’ written?", options: ["4016361110", "4016361310", "4016361212", "4016361010"], answer: "4016361010" },
    { question: "Which of the following letter-clusters is incorrect in the series: YCG, IMQ, SVZ, CGK, MQU?", options: ["SVZ", "MQU", "CGK", "IMQ"], answer: "SVZ" },
    { question: "Which one does not belong to the group based on alphabetical order? KJE, JHD, FDZ, AYU", options: ["KJE", "JHD", "FDZ", "AYU"], answer: "KJE" },
    { question: "What comes in place of '?' if ‘+’ and ‘–’ are interchanged and ‘×’ and ‘÷’ are interchanged: 342 × 18 + 79 − 45 ÷ 3 = ?", options: ["65", "75", "85", "55"], answer: "75" },
    { question: "Solve: 4 ÷ 6 + 91 × 7 − 5 = ?, if '+' and '–' are interchanged and '×' and '÷' are interchanged", options: ["21", "16", "12", "17"], answer: "16" },
    { question: "Which letter-cluster pair does not belong to the group? EJ - OT, PF - OI, KP - UZ, CH - MR", options: ["EJ - OT", "PF - OI", "KP - UZ", "CH - MR"], answer: "PF - OI" },
    { question: "Given statements: All fans are brown. Some brown are chairs. Some chairs are plastic. Conclusions: I. Some brown are fans. II. Some chairs are brown. III. No chair is plastic. Which conclusions follow?", options: ["Only II and III follow", "None follow", "Only I and II follow", "Only III follows"], answer: "Only I and II follow" },
    { question: "What comes in place of '?' if '+' and '–' are interchanged and '×' and '÷' are interchanged: 1604 × 4 – 525 ÷ 5 + 73 = ?", options: ["2395", "2935", "2953", "2539"], answer: "2953" },
    { question: "If all letters of 'SYSTEM' are arranged alphabetically, how many will remain in the same position?", options: ["Five", "Six", "Three", "Four"], answer: "Five" },
    { question: "Find the missing number in the series: 99, 123, 150, 180, 213, ?", options: ["259", "258", "248", "249"], answer: "249" },
    { question: "What replaces '?' in the series: VO39, TM35, RK31, PI27, ?", options: ["OH24", "NG23", "MH24", "MG22"], answer: "NG23" },
    { question: "Select the word-pair that best reflects a similar relation as: Egypt : Nile", options: ["Russia : Mississippi", "South Korea : Mekong", "Brazil : Colorado", "Myanmar : Irrawaddy"], answer: "Myanmar : Irrawaddy" }
],

    // GK/GS/Current Affairs Section
    [
        { question: "Who among the following is the world renowned exponent of the bamboo flute?", options: ["MS Subbulakshmi", "Ravi Shankar", " Hariprasad Chaurasia", "Bismillah Khan"], answer: " Hariprasad Chaurasia" },
        { question: "What is net investment?", options: ["Sum of all the investments in a country", " Gross investment + depreciation", "Gross capital investment - indirect taxes", "Gross investment - depreciation"], answer: "Gross investment - depreciation" },
        { question: "India won the ICC Men Cricket World Cup for the first time in which of the following years?", options: [" 1996", "1992", "1987", "1983"], answer: "1983" },
        { question: "Kathakali, one of the classical dances of India, is predominantly performed in which of the following states of India?", options: ["Assam", " Manipur", "Uttar Pradesh", "Kerala"], answer: "" },
        { question: "Identify the oldest iron and steel company of India from the following options", options: ["Tata Iron & Steel Company(TISCO)", "Visvesvaraiya Iron & Steel Works", "Indian Iron & Steel Company (IISCO)", "Mysore Iron & Steel Works"], answer: "Tata Iron & Steel Company(TISCO)" },
        { question: "The magnificent Kailasa temple at Ellora was built during the reign of which Rashtrakuta king?", options: ["Krishna I", "Govinda III", "Amoghavarsha", "Indra III"], answer: "Krishna I" },
        { question: "In which state/UT is the Hemis festival celebrated?", options: ["Punjab", " Sikkim", "Lakshadweep", "Ladakh"], answer: "" },
        { question: "Which of the following is the largest artificial lake of Asia?", options: ["Naini Lake", "Bhopal Lake", "Dal Lake", "Chilika Lake"], answer: "Bhopal Lake" },
        { question: "In 2002, Zakir Hussain became the youngest percussionist to be honoured with which award?", options: ["Sangeet Natak Akademi Award", "Grammy Award", "Padma Bhushan", "National Heritage Fellowship"], answer: "Padma Bhushan" },
        { question: "Microbes like Rhizobium, Nitrosomonas and Nitrobacter are used for:", options: [" nitrogen cycling", "carbon cycling", "water cycling", "sulphur cycling"], answer: " nitrogen cycling" },
        { question: "With reference to Sepoy Mutiny of 1857, on which of the following dates did the soldiers at Meerut start their journey to Delhi?", options: ["10 May", "19 April", "2 June", "29 March"], answer: "10 May" },
        { question: "Who among the following was selected as the Sherpa for India’s G20 hosted in 2022-23?", options: ["Piyush Goyal", "Ashwini Vaishnav", " Shaktikanta Das", "Amitabh Kant"], answer: "Amitabh Kant" },
        { question: "Purvanchal Himalayas does NOT comprise of:", options: ["Naga hills", "Pir Panjal range", "Manipur hills", " Mizo hills"], answer: "Pir Panjal range" },
        { question: "In which year did India make its Olympic debut in hockey?", options: ["1936", "1932", "1924", "1928"], answer: "1928" },
        { question: "A student, on his school assignment, is taking a session on how to make compost at home for using it at a park. Which fundamental duty is he performing? ", options: ["To strive towards excellence in all spheres of individual and collective activity", "To safeguard public property and to abjure violence", "To develop the scientific temper, humanism and the spirit of inquiry", "To protect and improve the natural environment"], answer: "To protect and improve the natural environment" },
        { question: "In August 2022, the Ministry of Social Justice and Empowerment launched the ________ scheme, with an aim to provide comprehensive rehabilitation services to people engaged in begging in 75 municipalities.", options: ["TWINKLE-75", "BEAM-75", "SMILE-75", "RISE-75"], answer: "SMILE-75" },
        { question: "Which is the National Mission for Financial Inclusion to ensure access to financial services, namely, a basic savings and deposits accounts, remittance, credit, insurance, pension in an affordable manner?", options: [" Deendayal Antyodaya Yojana", "Deen Dayal Upadhyaya Grameen Kaushalya Yojana", " Swarnjayanti Gram Swarozgar Yojana", "Pradhan Mantri Jan Dhan Yojana"], answer: "Pradhan Mantri Jan Dhan Yojana" },
        { question: "Which of the following plays was NOT written by Harshavardhana?", options: ["Vikramorvasiyam", "Ratnavali", "Nagananda", "Priyadarshika"], answer: "Vikramorvasiyam" },
        { question: "The organisms that do not have a defined nucleus or organelles are classified in to _______ Kingdom.", options: [ "Fungi", "Protista", "Monera", "Plantae"], answer: "Monera" },
        { question: "Which Article of the Constitution of India provides that ‘there shall be a Vice President of India’?", options: ["Article 61", "Article 63", "Article 65", "Article 62"], answer: "Article 63" },
        { question: "A javelin thrown by an athlete is in ________ motion", options: ["oscillatory", "periodic", "rectilinear", "curvilinear"], answer: "curvilinear" },
        { question: "The green revolution technology resulted in an increase in production of cereal production from 72.4 million tons in 1965-66 to ________ million tons in 1978-79.", options: ["150.8", " 165.9", "131.9", "141.2"], answer: "131.9" },
        { question: "Calculate the oxidation number of ‘S’ in H2S2O7.", options: ["1. 3", "2. 7", "3. 6", "4. 2"], answer: "3. 6" },
        { question: "Which of the following is NOT an amendment made to the Airport Economic Regulatory Authority (AERA) Amendment Act, 2021? ", options: ["The government can call any airport a major airport just by notification.", "The government will club together profit-making and loss-making airports", "The government can offer airports as a package in PPP mode to the prospective bidders", "A major airport is one which has an annual traffic of minimum 35 lakh passengers."], answer: "A major airport is one which has an annual traffic of minimum 35 lakh passengers." },
        { question: "Which condition, also known as icterus, causes a yellowing of your skin and the whites of your eyes?", options: ["Ichthyosis", "Jaundice", "Eczema", "Pemphigus"], answer: "Jaundice" }
    ],
    [
        { question: "Select the option that can be used as a one-word substitute for the given group of words: A false idea or belief.", options: ["Reticence", "Atrophy", "Fallacy", "Entropy"], answer: "Fallacy" },
        { question: "Identify the most appropriate ANTONYM of the given word: Secure", options: ["Succeed", "Save", "Attack", "Trundle"], answer: "Attack" },
        { question: "Select the most appropriate synonym of the given word: Acquiesce", options: ["Desist", "Cease", "Thwart", "Concur"], answer: "Concur" },
        { question: "Select the one-word substitute: That which cannot be conquered.", options: ["Invisible", "Indelible", "Ineffable", "Invincible"], answer: "Invincible" },
        { question: "Select the most appropriate synonym of the word: Ambition", options: ["Apathy", "Satisfaction", "Eagerness", "Amend"], answer: "Eagerness" },
        { question: "Choose the correct idiom to complete the sentence: The arguments in the book were ________.", options: ["high and mighty", "out of the woods", "beside the mark", "under the rose"], answer: "beside the mark" },
        { question: "Select the most appropriate ANTONYM of the word: Receive", options: ["Admit", "Exile", "Reward", "Fund"], answer: "Exile" },
        { question: "Choose the passive voice: Sonam does not like bananas.", options: ["Banana is not liked by Sonam.", "Bananas have not been liked by Sonam.", "Bananas are not liked by Sonam.", "Bananas had not been liked by Sonam."], answer: "Bananas are not liked by Sonam." },
        { question: "Select the one-word substitute: In Indian mythology, most Asuras wish to be never able to die.", options: ["Invincible", "Impervious", "Invisible", "Immortal"], answer: "Immortal" },
        { question: "Choose the passive voice: Someone has taken my secret diary.", options: ["My secret diary had been taken by someone.", "My secret diary has to be taken by someone.", "My secret diary has been taken by someone.", "My secret diary will have been taken by someone."], answer: "My secret diary has been taken by someone." },
        { question: "Choose the synonym of the word 'sentimental' in the sentence: Organisations made ________ appeals to raise funds.", options: ["mawkish", "sincere", "cynical", "practical"], answer: "mawkish" },
        { question: "What is the meaning of the word 'atheist'?", options: ["One who believes in God", "One who believes in nature", "One who is extremist", "One who does not believe in God"], answer: "One who does not believe in God" },
        { question: "Choose the meaning of the idiom: 'a fish out of water'.", options: ["Uncomfortable", "Homeless", "Frustrated", "Disappointed"], answer: "Uncomfortable" },
        { question: "Choose the incorrectly spelt word.", options: ["Embarrass", "Occurrence", "Exhilerate", "Accommodate"], answer: "Exhilerate" },
        { question: "Find the segment with the error: Mrs. Sreelakshmi’s / musical intelligence / is superior than / Mrs. Suma’s.", options: ["Mrs. Suma’s.", "musical intelligence", "is superior than", "Mrs. Sreelakshmi’s"], answer: "is superior than" },
        { question: "Improve the sentence: If I was the queen, I would give a handsome sum towards education.", options: ["will be the queen", "were the queen", "have been the queen", "would be the queen"], answer: "were the queen" },
        { question: "Choose the incorrectly spelt word.", options: ["Exceed", "Proceed", "Succeed", "Preceed"], answer: "Preceed" },
        { question: "Select the synonym of the word: Abundant", options: ["Ample", "Scarce", "Barren", "Difficult"], answer: "Ample" },
        { question: "Choose the one-word substitute: One who does not show response to good or bad.", options: ["Stoic", "Sceptic", "Cynic", "Phobic"], answer: "Stoic" },
        { question: "Select the ANTONYM of the word: Inquisitive", options: ["Comprehensive", "Itemised", "Intrusive", "Disinterested"], answer: "Disinterested" },
        { question: "Choose the active voice of: The meal was not prepared by us.", options: ["We had not prepare the meal", "You do the homework.", "You will do the homework", "We did not prepare the meal"], answer: "We did not prepare the meal" },
        { question: "Choose the correctly spelt sentence.", options: ["I will definitely attend the conference.", "I will definitly attend the conference.", "I will definetely attend the conference.", "I will definately attend the conference."], answer: "I will definitely attend the conference." },
        { question: "Choose the incorrectly spelt word.", options: ["Allocation", "Allegation", "Abismal", "Aversion"], answer: "Abismal" },
        { question: "Select the one-word substitute: A person who believes in fate.", options: ["Fatalist", "Optimist", "Pessimist", "Realist"], answer: "Fatalist" },
        { question: "Select the correct form of reported speech: He said, 'I am reading a book.'", options: ["He said that he is reading a book.", "He said that he was reading a book.", "He said that he had been reading a book.", "He says that he is reading a book."], answer: "He said that he was reading a book." }
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

