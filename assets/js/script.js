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
    showOptions(quizQuestions[0].options);
    startTimer();
}

function showQuestion() {
    const divQuestion = document.getElementById('questions');
    
    divQuestion.innerHTML = quizQuestions[questionIndex].question;

}

function showOptions(options) {
    /* const divOptions = document.getElementById('options'); */

    const option1Btn = document.getElementById('option1');
    const option2Btn = document.getElementById('option2');
    const option3Btn = document.getElementById('option3');

    const option1Label = document.querySelector('label[for="option1"]');
    const option2Label = document.querySelector('label[for="option2"]');
    const option3Label = document.querySelector('label[for="option3"]');

    if (options.length >= 3) {
        option1Label.textContent = options[0];
        option1Btn.value = options[0];

        option2Label.textContent = options[1];
        option2Btn.value = options[1];

        option3Label.textContent = options[2];
        option3Btn.value = options[2];

    }
}


function startTimer() {
 //Part borrowed from https://www.shecodes.io/athena/52336-how-to-create-a-countdown-timer-in-javascript 
  
    const timer = setInterval(function() {
        document.getElementById('timer').innerHTML = `${count}`;
        count --;
        console.log(count);
        if (count === -1) {
            clearInterval(timer);

            questionIndex++;
            if (questionIndex < quizQuestions.length) {
                showQuestion();
                showOptions(quizQuestions[questionIndex].options);
                
            }

        }
    }, 1000);

    
}

startQuiz();