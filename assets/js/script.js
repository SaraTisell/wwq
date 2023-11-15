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

let questionIndex = 0;
let optionsIndex = 0;
let count = 10;


function startQuiz() {
    showQuestion();
    showOptions();
    startTimer();
}

function showQuestion() {
    const divQuestion = document.getElementById('questions');

    divQuestion.innerHTML = quizQuestions[questionIndex].question;

}

function showOptions() {
    const divOptions = document.getElementById('options');

    divOptions.innerHTML = quizQuestions[optionsIndex].options;
}

function startTimer() {
  /*  const divTimer = document.getElementById('timer'); */

    

 //Borrowed part from https://www.shecodes.io/athena/52336-how-to-create-a-countdown-timer-in-javascript 
  
    const timer = setInterval(function() {
        document.getElementById('timer').innerHTML = `${count}`;
        count --;
        console.log(count);
        if (count === 0) {
            clearInterval(timer);
            //move to next question
        }
    }, 1000);

    
}

startQuiz();