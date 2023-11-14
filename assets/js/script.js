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

let currentQuestionIndex = 0;
let score = 0;
let timer;

function startQuiz() {
    showQuestion();
    timer = setInterval(updateTimer, 1000);
}

function showQuestion() {
    const divQuestion = document.getElementById('questions');
    const divOptions = document.getElementById('options');

    divQuestion.innerHTML = quizQuestions[currentQuestionIndex].question;
    divOptions.innerHTML = '';

    quizQuestions[currentQuestionIndex].options.forEach((option, index) => {
        const label = document.createElement('label');
        const radioBtn = document.createElement('input');
        radioBtn.type = 'radio';
        radioBtn.name ='answer';
        radioBtn.value = option;

        label.appendChild(radioBtn);
        label.appendChild(document.createTextNode(option));

        divOptions.appendChild(label);
     });
}