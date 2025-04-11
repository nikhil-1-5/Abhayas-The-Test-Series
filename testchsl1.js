const sections = [
    //Maths Section
    [
        { question: "If Arun’s salary was decreased by 50% and subsequently increased by 50%, then how much per cent did he lose?", options: ["25%","40%","10%","36%"], answer: "25%" },
        { question: "A motorcycle covered the first 60 km of its journey at an average speed of 40 km/h. The speed of the motorcycle for covering the rest of the journey, i.e. 90 km, was 45 km/h. During the whole journey, the overall average speed of the motorcycle was:", options: ["42km/h","42 1/2km/h","42 1/7km/h","42 6/7km/h"], answer: "42 6/7km/h" },
        { question: "Which of the following is a correct statement?", options: ["The sum of the angles of a cyclic quadrilateral is always 180°.","Equal chords are equidistant from the centre of the circle but not always subtend equal angle at centre of the circle","If two circles touch each other, the point of contact lies on the line joining the two centres","Angles subtended by the arc in the same segment of the circle are in ratio of 2 : 1."], answer: "If two circles touch each other, the point of contact lies on the line joining the two centres" },
        { question: "Given that the perimeters of two similar triangles, ∆ABC and ∆DEF, are 24 cm and 9 cm, respectively, and DE = 3 cm, what is the ratio between the area of ∆ABC and that of ∆DEF?", options: [" 64 : 9","54 : 9","64 : 7","54 : 7"], answer: " 64 : 9" },
        { question: "A man spent 60% of his salary on household expenses, 20% of his salary on rent and out of remaining salary, he donated 80% to a trust. If he is left with ₹20,000, then what is his salary?", options: ["400000","500000","550000","50000"], answer: "500000" },
        { question: "If equation of line p is x + y = 5 and that of line q is x − y = 3, what are the coordinates of the point common to both the lines?", options: [" (2, 1)","(2, 3)","(4, 1)","(1, 4)"], answer: "(4, 1)" },
        { question: "What will be the least value of x so that the 5-digit number 627x5 becomes divisible by 9?", options: ["1. 7","2. 4","3. 3","4. 9"], answer: "1. 7" },
        { question: "The ratio of the diameters of two spheres is given as 1 : 4. The larger sphere is melted and 125 identical spheres are made out of the molten material. The smaller sphere is melted and 27 identical spheres are made out of the molten material. If the ratio of the volume of each of the 125 identical spheres to the volume of each of the 27 identical spheres is given as 1 : m, what is the value of m?", options: ["1728/125","27/8000","125/1728","64/3375"], answer: "125/1728" },
        { question: "If PQ and PR are the two tangents to a circle with center O, and ∠QOR=150°, then ∠QPR is equal to:", options: [" 60°","30°","90°","45°"], answer: "30°" },
        { question: "Mohan gets 12% increase in his sale amount in the first year and 15% increase in the second year, with that his present sale is ₹1,28,800. What was his sale two years ago?", options: ["₹1,25,000","₹1,50,000","₹1,75,000"," ₹1,00,000"], answer: " ₹1,00,000" },
        { question: "The age of the older of two boys is thrice that of the younger. 9 years ago it was five times that of the younger. Find the present age of each.", options: ["15 years, 45 years","12 years, 36 years"," 17 years, 51 years","18 years, 54 years"], answer: "18 years, 54 years" },
        { question: "Find the number when successively divided by 3,5and 7 leaves remainder 2,1and 3, respectively, and the last quotient is 3.", options: ["360","362","365","367"], answer: "365" },
        { question: "In a circle, ABCD is a cyclic quadrilateral in which AE is drawn parallel to CD, and BA is produced to F. If ∠ABC = 85° and ∠FAE = 24°, find the value of ∠BCD.", options: [" 125°","115°","124°","119°"], answer: "119°" },
        { question: "If 18 toys out of 75 toys are for boys and the rest are for girls, what is the percentage of girls toys?", options: ["18%","57%","67%","76%"], answer: "76%" },
        { question: "A person drives 110 miles at 55 miles per hour, he drives the next 120 miles at 60 miles per hour, and then he drives the next 60 miles in an hour. What is his average speed for the entire journey in miles per hour ?", options: ["58","55","63","60"], answer: "58" },
        { question: "In a ∆ABC, two medians AD and BE intersect at G at right angles. If AD = 18 cm and BE = 12 cm, then the length of BD is equal to:", options: ["10 cm","15 cm","8 cm"," 20 cm"], answer: "10 cm" },
        { question: "The surface areas of two spheres are in the ratio 25 : 36. What is the ratio of their volumes?", options: ["25/36","36/115","125/216","36/123"], answer: "125/216" },
        { question: "PQ is a diameter of a circle with centre O. The tangents at R meets PQ produced at A. If ∠RPQ = 27°, then measure of ∠RQP is:", options: ["1. 63°","54°","153°","27°"], answer: "1. 63°" },
        { question: "Three persons ran for office and got, 1136, 7636 and 11628 votes, respectively. What was the winning candidate's percentage of the total votes?", options: ["52%","61%","59%"," 57%"], answer: " 57%" },
        { question: "Two circles touch each other at a point O. AB is a simple common tangent to both the circles touching at point A and point B. If radii of the circles are 9 cm and 4 cm, then find AB.", options: ["72 cm","144 cm","12 cm","24 cm"], answer: "12 cm" },
        { question: "Reshma took a loan of ₹12,00,000 with simple interest for as many years as the rate of interest. If she paid ₹9,72,000 as interest at the end of the loan period, what was the rate of interest per annum ?", options: ["1. 7.5%","2. 8%","3. 8.7%","4. 9%"], answer: "4. 9%" },
        { question: "The sides of a cuboid are in the ratio 3 : 4 : 5 and its surface area is equal to the surface area of the cube with side 6 units. What is the approximate volume of the cuboid?", options: ["210"," 150","240"," 180"], answer: "210" },
        { question: "A man can row 18 km/h in still water. It takes him two times as long to row up as to row down the river. Find the rate of the stream.", options: [" 12 km/h","2. 6 km/h","24 km/h","9 km/h"], answer: "2. 6 km/h" },
        { question: "CD is a tangent to a circle of circumference of 88 cm with its centre at O. OC cuts the circle at P while OD cuts circle at V such that ∠COD = 90°. Length of PC is 6 cm. What is half of CD (in cm) if OD exceeds OC by 1 cm?", options: ["15.5","14.5"," 31","16.5"], answer: "14.5" }
    ],
    [
        {
          "question": "Select the set in which the numbers are related in the same way as are the numbers of the following sets. (NOTE: Operations should be performed on the whole numbers, without breaking down the numbers into its constituent digits. E.g., 13 – Operations on 13 such as adding/deleting/multiplying etc. to 13 can be performed. Breaking down 13 into 1 and 3 and then performing mathematical operations on 1 and 3 is not allowed.) (10, 5, 20), (14, 7, 28)",
          "options": ["(48, 24, 58)", "(33, 11, 44)", "(22, 11, 44)", "(54, 18, 72)"],
          "answer": "(22, 11, 44)"
        },
        {
          "question": "Select the combination of letters that when sequentially placed in the blanks of the given series will logically complete the series. A _ A _ C A B _ B _ A _ _ B C A B A _ C",
          "options": ["BBACABB", "BBABBCB", "BBACBAB", "BABACBA"],
          "answer": "BBACBAB"
        },
        {
          "question": "If ‘U’ stands for ‘÷’, ‘D’ stands for ‘×’, ‘B’ stands for ‘+’ and ‘T’ stands for ‘–’, what will come in place of the question mark (?) in the following equation? 13 T 26 U 13 D 24 B 7 = ?",
          "options": ["–56", "–87", "–43", "–28"],
          "answer": "–28"
        },
        {
          "question": "The position of how many letters will remain unchanged if each of the letters in the word ‘VIRTUAL’ is arranged in English alphabetical order?",
          "options": ["None", "One", "Three", "More than three"],
          "answer": "One"
        },
        {
          "question": "Which two numbers should be interchanged to make the given equation correct? 74 – 52 + (39 ÷ 13) × 16 + (14 ÷ 2) = 106 (NOTE: Numbers must be interchanged and not the constituent digits e.g. if 2 and 3 are to be interchanged in the equation 43 × 3 + 4 ÷ 2, then interchanged equation is 43 × 2 + 4 ÷ 3)",
          "options": ["52 and 39", "74 and 52", "14 and 52", "14 and 16"],
          "answer": "52 and 39"
        },
        {
          "question": "If the year is NOT a leap year, then how is the last day of the year and first day of the same year related?",
          "options": ["First day is Sunday, last day is Friday", "First day is Sunday, last day is Saturday", "First day is Tuesday, last day is Saturday", "They are the same."],
          "answer": "They are the same."
        },
        {
          "question": "96 is related to 16 following a certain logic. Following the same logic, 156 is related to 26. To which of the following is 228 related following the same logic? (NOTE : Operations should be performed on the whole numbers, without breaking down the numbers into its constituent digits. E.g. 13 – Operations on 13 such as adding /deleting /multiplying etc., to 13 can be performed. Breaking down 13 into 1 and 3 and then performing mathematical operations on 1 and 3 is not allowed.)",
          "options": ["42", "34", "38", "36"],
          "answer": "38"
        },
        {
          "question": "‘A + B’ means ‘A is the brother of B’. ‘A – B’ means ‘A is the wife of B’. ‘A × B’ means ‘A is the father of B’. ‘A ÷ B’ means ‘A is the sister of B’. In ‘T × X ÷ Y + Z’, how is T related to Z using the same meaning of the mathematical operators as given above?",
          "options": ["Father", "Daughter", "Father-in-law", "Brother"],
          "answer": "Father"
        },
        {
          "question": "Read the given statements and conclusions carefully. Assuming that the information given in the statements is true, even if it appears to be at variance with commonly known facts, decide which of the given conclusions logically follow(s) from the statements. Statements: Some keys are chains. All chains are locks. No lock is a rock. Conclusions: (I) No rock is a key. (II) At least some keys are locks.",
          "options": ["None of the conclusion follow", "Both conclusions I and II follow", "Only conclusion II follows", "Only conclusion I follows"],
          "answer": "Only conclusion II follows"
        },
        {
          "question": "Three of the following four are alike in a certain way and thus form a group. Which is the one that does NOT belong to that group?",
          "options": ["AJQ", "MVC", "OXC", "ENU"],
          "answer": "OXC"
        },
        {
          "question": "In a certain code language, ‘strong and mighty’ is written as ‘ui yv tk’ and ‘soft yet strong’ is written as ‘hd tk bw’. How is ‘strong’ written in the given language?",
          "options": ["hd", "bw", "ui", "tk"],
          "answer": "tk"
        },
        {
          "question": "Select the combination of letters that when sequentially placed in the blanks of the given series will complete the series. KJ_HIJKI_JM_EJ_K",
          "options": ["GIJO", "IGJO", "IMKR", "KJOM"],
          "answer": "IGJO"
        },
        {
          "question": "‘Q + R’ means ‘Q is the father of R’. ‘Q – R’ means ‘Q is the wife of R’. ‘Q × R’ means ‘Q is the brother of R’. ‘Q ÷ R’ means ‘Q is the daughter of R’. What does ‘ M – N + O’ mean?",
          "options": ["M is the brother of O", "M is the daughter of O", "M is the mother of O", "M is the father of O"],
          "answer": "M is the mother of O"
        },
        {
          "question": "In this question, three statements are given, followed by three conclusions numbered I, II and III. Assuming the statements to be true, even if they seem to be at variance with commonly known facts, decide which of the conclusion(s) logically follows/follow from the statements. Statements: All rings are earrings. Some rings are chains. All chains are bangles. Conclusions: I. Some rings are bangles. II. Some earrings are bangles. III. Some chains are earrings.",
          "options": ["Both conclusions II and III follow.", "All conclusions I, II and III follow.", "Both conclusions I and III follow.", "Both conclusions I and II follow."],
          "answer": "All conclusions I, II and III follow."
        },
        {
          "question": "Based on the alphabetical order, three of the following four letter-clusters are alike in a certain way and thus form a group. Which letter-cluster does not belong to that group?",
          "options": ["QNL", "ROL", "WTQ", "LIF"],
          "answer": "QNL"
        },
        {
          "question": "Select the set in which the numbers are related in the same way as are the numbers of the following sets. (NOTE : Operations should be performed on the whole numbers, without breaking down the numbers into its constituent digits. E.g. 13 – Operations on 13 such as adding /subtracting /multiplying etc. to 13 can be performed. Breaking down 13 into 1 and 3 and then performing mathematical operations on 1 and 3 is not allowed.) (21, 34, 76), (39, 26, 104)",
          "options": ["(34, 25, 102)", "(37, 43, 127)", "(25, 31, 108)", "(28, 23, 79)"],
          "answer": "(28, 23, 79)"
        },
        {
          "question": "11 is related to 55 following a certain logic. Following the same logic, 22 is related to 110. To which of the following is 44 related following the same logic? (NOTE : Operations should be performed on the whole numbers, without breaking down the numbers into its constituent digits. E.g. 13 – Operations on 13 such as adding /deleting /multiplying etc., to 13 can be performed. Breaking down 13 into 1 and 3 and then performing mathematical operations on 1 and 3 is not allowed.)",
          "options": ["230", "200", "220", "210"],
          "answer": "220"
        },
        {
          "question": "If 15 December 2006 is a Friday, then what will the day of the week on 13 October 2009?",
          "options": ["Monday", "Friday", "Saturday", "Tuesday"],
          "answer": "Tuesday"
        },
        {
          "question": "If ‘Z’ stands for ‘÷’, ‘Q’ stands for ‘×’, ‘H’ stands for ‘+’ and ‘E’ stands for ‘–’, what will come in place of the question mark (?) in the following equation? 17 H 23 Q 42 Z 7 E 13 = ?",
          "options": ["975", "785", "142", "688"],
          "answer": "142"
        },
        {
          "question": "If 6 May 2005 is a Friday, then what will the day of the week on 25 September 2018?",
          "options": ["Tuesday", "Thursday", "Sunday", "Friday"],
          "answer": "Tuesday"
        },
        {
          "question": "Read the given statements and conclusions carefully. Assuming that the information given in the statements is true, even if it appears to be at variance with commonly known facts, decide which of the given conclusions logically follow(s) from the statements. Statements: Some handles are bars. All bars are rods. No rod is a stick. Conclusions: (I) Some handles are rods. (II) No bar is a stick",
          "options": ["None of the conclusions follow", "Only conclusion II follows", "Both conclusions I and II follow", "Only conclusion I follows"],
          "answer": "Both conclusions I and II follow"
        },
        {
          "question": "If 15 August 2006 is a Tuesday, then what will the day of the week on 19 February 2012?",
          "options": ["Friday", "Sunday", "Saturday", "Tuesday"],
          "answer": "Sunday"
        },
        {
          "question": "Select the set in which the numbers are related in the same way as are the numbers of the given sets. (NOTE: Operations should be performed on the whole numbers, without breaking down the numbers into its constituent digits. E.g., 13 – Operations on 13 such as adding/subtracting/multiplying etc. to 13 can be performed. Breaking down 13 into 1 and 3 and then performing mathematical operations on 1 and 3 is not allowed.) (111, 16, 7), (167, 14, 12)",
          "options": ["(190, 21, 9)", "(140, 8, 17)", "(131, 12, 11)", "(108, 9, 12)"],
          "answer": "(131, 12, 11)"
        },
        {
          "question": "Three of the following four letter-clusters are alike in a certain way and thus form a group. Which letter-cluster does NOT belong to that group?",
          "options": ["VWZU", "EFHD", "MNQL", "OPSN"],
          "answer": "EFHD"
        },
        {
          "question": "How many meaningful English words can be formed with letters CKIK, using each letter only once in each word?",
          "options": ["1", "4", "2", "3"],
          "answer": "1"
        }
      ],
    // GK/GS/Current Affairs Section
    [
        { question: "Which country do the ‘Veddas’ traditional forest dwellers who foraged, hunted and lived in close-knit groups in caves in the dense jungles?", options: ["Myanmar"," Nepal","Bhutan","Sri Lanka"], answer: "Sri Lanka" },
        { question: "Which folk music is based on the Mahabharata with Bhima portrayed as hero?", options: ["Mando","Alha"," Pandavani","Dandiya"], answer: " Pandavani" },
        { question: "Which amongst the following terms was used for the land given to Brahmins during the Chola empire?", options: ["Tirunmatukkani","Shalabhoga","Vellanvagai",""], answer: " Brahmadeya" },
        { question: "How might ICT enhance the openness of e-land records?", options: ["Enabling quick search and retrieval of land records","Enforcing strict regulations on land transactions","Facilitating manual record updates and amendments","Reducing the need for land surveys and assessments"], answer: "Enabling quick search and retrieval of land records" },
        { question: "Which of the following Articles of the Constitution of India CANNOT be amended with simple majority?", options: ["21","2. 3","3. 2","169"], answer: "21" },
        { question: "In his ‘Drain of Wealth’ argument, who among the following stated that Britain was completely draining India?", options: ["Lala Lajpat Rai","Dadabhai Naoroji","Bal Gangadhar Tilak","Badruddin Tyabji"], answer: "Dadabhai Naoroji" },
        { question: "How is the structure of health infrastructure and health care system in India?", options: ["Three-tier system","Four-tier system","Five-tier system","Two-tier system"], answer: "Three-tier system" },
        { question: "In which year did Indian archers participate in the Olympics for the first time?", options: ["1988"," 1973","1980","1975"], answer: "1988" },
        { question: "Which language is known as ‘Italian of the East’?", options: ["Malayalam","Kannada","Marathi","Telugu"], answer: "Telugu" },
        { question: "Which of the following states launched the first Migration Monitoring System in the year 2022?", options: ["Karnataka","Goa","Maharashtra","Kerala"], answer: "Maharashtra" },
        { question: "As compared to monopolistic competition, the demand curve in a monopoly is:", options: ["infinitely elastic","equally elastic","more elastic","less elastic"], answer: "less elastic" },
        { question: "Which group of animals has a segmented spinal column together with a few primitive forms in which the backbone is represented by a notochord?", options: ["Arthropoda","Echinodermata","Mollusca","Vertebrata"], answer: "Vertebrata" },
        { question: "What is the circumference of the International Football Association Board (IFAB) approved football?", options: [" 80 - 82 cms","78 - 80 cms","68 - 70 cms","70 - 72 cms"], answer: "68 - 70 cms" },
        { question: "In field hockey, ________ occurs when a player pushes the ball and raises it off the ground.", options: ["flick","centre pass","slap","bully"], answer: "flick" },
        { question: "What is the name of the highest peak of the Eastern Ghats?", options: ["Khasi","Anamudi","Mahendragiri","Kangchenjunga"], answer: "Mahendragiri" },
        { question: "In MS Word, which option allows you to align text in a way that it appears vertically at the bottom of a cell or text box?", options: [" Distributed Alignment","Justify Alignment","Center Alignment","Bottom Alignment"], answer: "Bottom Alignment" },
        { question: "Which of the following is NOT associated with the Industrial Policy Resolution, 1956?", options: ["Regional equality was promoted","It formed the basis of the Third Five Year Plan","A system of licenses for the private sector was introduced."," It classified industries into three categories."], answer: "It formed the basis of the Third Five Year Plan." },
        { question: "Which of the following planets does NOT have a ring around it?", options: ["Jupiter","Saturn","Uranus ","Mercury"], answer: "Mercury" },
        { question: "Writ of Mandamus is a Fundamental Right classifiable under:", options: ["the right to equality","cultural and educational rights","constitutional remedies","the right to freedom of religion"], answer: "constitutional remedies" },
        { question: "In 2022, the National Green Tribunal advised which of the following Ministries to form a three-member panel to formulate safeguards and guidelines to be followed by the State Environment Impact Assessment Authorities?", options: ["Ministry of Environment, Forest and Climate Change","Ministry of Health and Family Welfare","Ministry of Law and Justice","Ministry of Home Affairs"], answer: "Ministry of Environment, Forest and Climate Change" },
        { question: "________ was sworn in as Central Vigilance Commissioner on 29 May 2023", options: ["Uday Veer Singh","Praveen Kumar Srivastava","Sarvan Kumar","Arti C Srivastava"], answer: "Praveen Kumar Srivastava" },
        { question: "Who is known as the ‘Father of Carnatic Music’?", options: ["Thirunal Rama Varma","Vishwanath Iyer","Vidyaranya","Purandara Dasa"], answer: "Purandara Dasa" },
        { question: "The method of separating a mixture of soluble solids by dissolving them in a suitable hot solvent and then lowering the temperature slowly is called:", options: ["fractional crystallisation","dephlegmation","azeotropic distillation","sublimation"], answer: "fractional crystallisation" },
        { question: "Which of the following is NOT a stringed instrument?", options: [" Flute","Violin","Mandolin","Guitar"], answer: " Flute" },
        { question: "Which power were the Badami (or Vatapi) Chalukyas originally subjects of?", options: [" Hoysalas","Pallavas","Pandyas","Kadambas"], answer: "Kadambas" }
    ],
    // English Section
    [
        { question: "The given sentence is divided into four segments. Select the option that has the segment with a grammatical error. She always / likes to / show on / her wealth.", options: ["show on","she always","likes to","her wealth"], answer: "show on" },
        { question: "Parts of the following sentence have been underlined and given as options. Select the option that contains an error. If it will rain tomorrow, I will stay at home.", options: [" I will","at home","will rain","If it"], answer: "will rain" },
        { question: "Parts of the following sentence have been given as options. Select the option that contains an error. Ramayana is an ancient Sanskrit epic; it is believed to be written around 500 BC to 100 BC.", options: [" Ramayana is an ancient","Sanskrit epic; it is","believed to be written","around 500 BC to 100 BC."], answer: " Ramayana is an ancient" },
        { question: "Select the most appropriate option to fill in the blank. It took 4 hours straight to ___________ the deal with the regional company.", options: ["stop ","get ","perform","close"], answer: "close" },
        { question: "Select the most appropriate option that can substitute the underlined segment in the given sentence. As I have no time to discuss the points, so I wrote a email to her", options: ["so I wrote an e-mail for her","so I wrote a e-mail to her","I write an email to her","I wrote an email to her"], answer: "I wrote an email to her" },
        { question: "Select the most appropriate meaning of the given idiom. At one’s fingertips", options: ["To be unaware of something","To take revenge","Out of reach","To have complete knowledge"], answer: "To have complete knowledge" },
        { question: "Select the most appropriate ANTONYM of the given word. Resistance", options: ["Awareness","Tolerance","Tenderness","Reliance"], answer: "Tolerance" },
        { question: "Select the most appropriate option that can replace the bracketed word segment in the following sentence. Children should avoid giving out personal details online (which will) identify them or their location.", options: ["what will","that could","which might lead"," whichever can"], answer: "that could" },
        { question: "Select the most appropriate ANTONYM of the underlined word. The rocky terrain made the hike difficult and strenuous.", options: ["Demanding","Lively","Intense","Easy"], answer: "Easy" },
        { question: "Select the most appropriate option that can substitute the underlined segment in the given sentence. The road which connecting the two states is overcrowded.", options: ["connected","connects","has connecting","have connected"], answer: "connects" },
        { question: "Select the most appropriate ANTONYM of the underlined word in the given sentence. Ria is liked by everyone as she is very amicable.", options: ["Hateful","Unfriendly","Stupid","Dangerous"], answer: "Unfriendly " },
        { question: "Select the option that can be used as a one-word substitute for the given group of words. Hospital for people with mental illnesses", options: ["Hangar","Druggist","Asylum","Shelter"], answer: "Asylum" },
        { question: "Select the INCORRECTLY spelt word in the given sentence. A distinguished academecian, Amartya Sen has taught in India, Britain and the United States", options: ["Academecian","Taught","Britain","Distinguished"], answer: "Academecian" },
        { question: "Select the most appropriate meaning of the underlined idiom. Teja followed his friend’s advice so now he is in deep water.", options: ["In deep thoughts","In dilemma","In trouble","In good position"], answer: "In trouble" },
        { question: "Select the most appropriate ANTONYM of the underlined word in the given sentence. The committee deposed him from his office.", options: ["Interacted","Demolished","Promoted","Segregated"], answer: "Promoted" },
        { question: "Select the most appropriate ANTONYM of the underlined word. Language interacts with all aspects of human life and society.", options: ["co-operates","interrelates","disconnects","intermingles"], answer: "disconnects" },
        { question: "Select the INCORRECTLY spelt word.", options: ["Category"," Hygiene"," Congratulate","Aquire"], answer: "Aquire" },
        { question: "Select the most appropriate ANTONYM of the given word. Beautiful", options: ["Pungent","Stingy","Slimy","Ugly"], answer: "Ugly" },
        { question: "Select the most appropriate ANTONYM of the word ‘Defeat’ in the given sentence. The first battle of Panipat was fought on 21 April 1526, where Babur introduced canon warfare and was able to gain victory on Delhi and subjugated sultanate ruler Ibrahim Lodi.", options: ["gain","subjugated","warfare","victory"], answer: "victory" },
        { question: "Select the option with the correct use of article(s).", options: ["She kept lot of rules in her life, due to which she is flourishing today."," She kept an lot of rules in her life, due to which she is flourishing today","She kept a lot of rules in her life, due to which she is flourishing today.","She kept the lot of rules in her life, due to which she is flourishing today."], answer: "She kept a lot of rules in her life, due to which she is flourishing today." },
        { question: "The following sentence has an error in its tense. Identify the error and select the correct sentence from the options. If you had apprised me about your problem earlier, I would have allow you to go.", options: ["If you had apprised me about your problem earlier, I would have allowed you to go","If you apprised me about your problem earlier, I would have allowed you to go","If you had apprised me about your problem earlier, I would allow you to go.","If you can apprise me about your problem earlier, I would have allowed you to go."], answer: "If you had apprised me about your problem earlier, I would have allowed you to go" },
        { question: "Select the most appropriate ANTONYM of the given word. Shame", options: ["Disgrace","Defamation","Pride","Fear"], answer: "Pride" },
        { question: "Select the most appropriate synonym of the given word. Respect", options: ["Honour","Disrespect","Attend","Invalidate"], answer: "Honour" },
        { question: "Select the most appropriate option that can best replace the bracketed word to fill in the blank His ________ stature was not a measure of his overall personality. (scrawny)", options: ["muscular","thin","keen","sickly"], answer: "thin" },
        { question: "Select the most appropriate option to substitute the underlined segment in the following sentence. The company do not broke the law at any time.", options: ["do not brakes","did not breaking","did not broken","does not break"], answer: "does not break" },
    ],
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

