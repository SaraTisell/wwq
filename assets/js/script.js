// Array for questions, options and answers
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
        options: ['Thomas Eddison, 1978', 'Tim Berners-Lee, 1990 ', 'Alice Jameson, 1989'],
        answer: 'Tim Berners-Lee, 1990',
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
]

let quizQuestionsIndex = 0;
let count = 10;
let score = 0;



 // Functions to start the quiz by display questions and options for answers
function startQuiz() {
    showQuestion();
    showOptions();
    startTimer();
}

// Display questions 
function showQuestion() {
    const divQuestion = document.getElementById('questions');
    const questionNum = document.getElementById('question-num')
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
        quizQuestionsIndex++;
        if (quizQuestionsIndex < quizQuestions.length) {
            showQuestion();
            showOptions();
            
            

        } else {
            /*Quiz Complete*/
        }
    });
});



/**
 * Timer to count down from 10
 * Move on to the next question if timer runs down to 0
 */ 
function startTimer() {
 //Part borrowed from https://www.shecodes.io/athena/52336-how-to-create-a-countdown-timer-in-javascript 

    const timer = setInterval(function() {
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
                /*Quiz Complete*/ 
            }
        }
    }, 1000);
}


function score () {

}

function displayScore() {
    
}

startQuiz();