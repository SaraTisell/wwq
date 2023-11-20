/**
 * Array for questions, options and answers
 * Array syntax for questions, options and answers borrowed from 
 * https://www.codewithfaraz.com/content/161/build-a-quiz-application-with-html-css-and-javascript-step-by-step-guide
 * */
const quizQuestions = [
    {
        question: 'How many countries is there in the World today?',
        options: ['205', '150', '195'],
        answer: '195',
    },
    {
        question: 'What is the national flower of Japan?',
        options: ['Cherry blossom', 'Lily', 'Rose'],
        answer: 'Cherry blossom',
    },
    {
        question: 'Who invented the World Wide Web, and when?',
        options: ['Tim Berners-Lee, 1990 ', 'Thomas Eddison, 1978', 'Alice Jameson, 1989'],
        answer: 'Tim Berners-Lee, 1990 ',
    },
    {
        question: 'What was the clothing company Nike originally called?',
        options: ['Nikers', 'Blue Ribbon Sports', 'Swoosh'],
        answer: 'Blue Ribbon Sports',
    },
    {
        question: 'When was Netflix founded?',
        options: ['1997', '2005', '2011'],
        answer: '1997',
    },
    {
        question: 'What country has the most islands in the world?',
        options: ['Norway', 'Denmark', 'Sweden'],
        answer: 'Sweden',
    },
    {
        question: 'When did they open the London underground?',
        options: ['1853', '1863', '1893'],
        answer: '1863',
    },
    {
        question: 'Who invented the iconic Little Black Dress?',
        options: ['Coco Chanel', 'Christian Dior', 'Michael Kors'],
        answer: 'Coco Chanel',
    },
    {
        question: 'How many keys does a classic piano have?',
        options: ['88', '100', '108'],
        answer: '88',
    },
    {
        question: 'What is the name of the coffee shop in the sitcom Friends? ?',
        options: ['Central Park', 'Central Perk', 'Central Coffee'],
        answer: 'Central Perk',
    },


]

let quizQuestionsIndex = 0;
let count = 10;
let timer;





 // Functions to start the quiz by display questions and options for answers
function startQuiz() {
    showQuestion();
    showOptions();
    startTimer();
}

// Display questions 
function showQuestion() {
    const divQuestion = document.getElementById('questions');
    const questionNum = document.getElementById('question_num');
    questionNum.innerHTML = quizQuestionsIndex +1;
    divQuestion.innerHTML = quizQuestions[quizQuestionsIndex].question;

}

// Display answers options for each question
function showOptions() {

    const option1Btn = document.getElementById('option1');
    const option2Btn = document.getElementById('option2');
    const option3Btn = document.getElementById('option3');

    option1Btn.innerHTML = quizQuestions[quizQuestionsIndex].options[0];
    option2Btn.innerHTML = quizQuestions[quizQuestionsIndex].options[1];
    option3Btn.innerHTML = quizQuestions[quizQuestionsIndex].options[2];

}

// Buttons click
// Part borrowed from https://byby.dev/js-add-event-listener
const optionBtn = document.querySelectorAll(".quizOptions");

optionBtn.forEach(function (button) {
    button.addEventListener("click", function () {
        
       checkAnswer(button.textContent);
        
        quizQuestionsIndex++;
        if (quizQuestionsIndex < quizQuestions.length) {
            showQuestion();
            showOptions();
            clearInterval(timer);
            count = 10;
            startTimer();
            

        } else {
            showResult();
        }
    });
});

function checkAnswer(selectedAnswer) {
    let correctAnswer = quizQuestions[quizQuestionsIndex].answer;

    if (selectedAnswer === correctAnswer) {
        increseScore();
        console.log('correct');
    } else {
        decreseScore();
        console.log('wrong');
    }

}



/**
 * Timer to count down from 10
 * Move on to the next question if timer runs down to 0
 */ 


function startTimer() {
 //Part borrowed from https://www.shecodes.io/athena/52336-how-to-create-a-countdown-timer-in-javascript 

        timer = setInterval(function() {
        document.getElementById('timer').innerHTML = `${count}`;
         count --;
        // delete later
        console.log(count);
        if (count === -1) {
            clearInterval(timer);

            quizQuestionsIndex++;
            if (quizQuestionsIndex < quizQuestions.length) {
                showQuestion();
                showOptions();
                count = 10;
                startTimer();

            } else {
                showResult();
            }
        
        }
    }, 1000);
}



/**
 * Function to increser score for every right answer the user gets
 */
function increseScore() {
    // Part borrowed from Love Maths Walkthrough Project
    let userScore = parseInt(document.getElementById('total-score').innerText);
    document.getElementById('total-score').innerText = ++userScore; 
}

function decreseScore() {
    //Part borrowed from Love Maths Walkthrough Project
    let userScore = parseInt(document.getElementById('total-score').innerText);
    
    if (userScore >= 1) {
        document.getElementById('total-score').innerText = --userScore;
    }

}

/**
 * Section to show results when quiz is complete
 * Borrowed from https://www.codingnepalweb.com/quiz-app-with-timer-javascript/
 */
const show_result = document.querySelector(".show_result");
function showResult() {
    show_result.classList.add("activeResult");

}

startQuiz();