const quizData = [
    {
        title: 'Python Basics',
        questions: [
            {
                question: 'What is the output of 2 + 3 * 4?',
                options: ['14', '20', '32', '15'],
                correct: 0
            },
            {
                question: 'Which of the following is a valid variable name in Python?',
                options: ['1variable', '_variable', 'variable-name', 'variable@'],
                correct: 1
            },
            {
                question: 'What is the correct way to create a function in Python?',
                options: ['function myFunction():', 'def myFunction():', 'create myFunction():', 'function:myFunction()'],
                correct: 1
            },
            {
                question: 'What does the following code print: print("Hello" + "World")?',
                options: ['Hello World', 'Error', 'Hello+World', 'HelloWorld'],
                correct: 3
            }
        ]
    },
    {
        title: 'General Knowledge',
        questions: [
            {
                question: 'What is the capital of France?',
                options: ['Paris', 'London', 'Berlin', 'Madrid'],
                correct: 0
            },
            {
                question: 'What is the tallest mammal?',
                options: ['Elephant', 'Giraffe', 'Horse', 'Lion'],
                correct: 1
            },
            {
                question: 'What is the chemical symbol for water?',
                options: ['H2O', 'CO2', 'O2', 'N2'],
                correct: 0
            }
        ]
    }
];

let currentQuiz = 0;
let currentQuestion = 0;
let score = 0;


function loadQuiz() {
    document.getElementById('quiz-title').textContent = quizData[currentQuiz].title;
    showQuestion();
}

function showQuestion() {
    const question = quizData[currentQuiz].questions[currentQuestion];
    document.getElementById('question-container').textContent = question.question;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.textContent = option;
        optionElement.classList.add('option');
        optionElement.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionElement);
    })
}

function selectOption(selectedOptionIndex) {
    const question = quizData[currentQuiz].questions[currentQuestion];
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.querySelectorAll('.option').forEach((optionElement, index) => {
        optionElement.classList.remove('selected');
        if (index === selectedOptionIndex) {
            optionElement.classList.add('selected');
            if (selectedOptionIndex === question.correct) {
                score++;
            }
        }
    });
}

function nextQuestion() {
    if (currentQuestion < quizData[currentQuiz].questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        showResult();
    }
}

window.onload = loadQuiz;
