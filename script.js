const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Paris", "Madrid", "Rome"],
        answer: "Paris"
    },
    {
        question: "(112 x 54) = ?",
        options: ["67000", "70000", "76500", "77200"],
        answer: "70000"
    },
    {
        question: "Which one of the following is not a prime number?",
        options: ["31", "61", "71", "91"],
        answer: "91"
    },
    {
        question: "What least number must be added to 1056, so that the sum is completely divisible by 23 ?",
        options: ["2", "3", "14", "21"],
        answer: "2"
    },
    {
        question: "The territory of Porus who offered strong resistance to Alexander was situated between the rivers of?",
        options: ["Sutlej and Beas", "Jhelum and Chenab", "Ravi and Chenab", 
        "Ganga and Yamuna"],
        answer: "Jhelum and Chenab"
    },
    {
        question: "Under Akbar, the Mir Bakshi was required to look after?",
        options: ["military affairs", "the state treasury", "the royal household", "the land revenue system"],
        answer: "military affairs"
    },
    {
        question: "The Battle of Plassey was fought in?",
        options: ["1757", "1782", "1748", "1765"],
        answer: "1757"
    },
    {
        question: "The Battle of Plassey was fought in?",
        options: ["1757", "1782", "1748", "1765"],
        answer: "1757"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Mercury"],
        answer: "Mars"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "NaCl", "O2"],
        answer: "H2O"
    },
];

const quizContainer = document.querySelector('.quiz-container');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.textContent = currentQuizData.question;
    optionsElement.innerHTML = '';

    currentQuizData.options.forEach((option) => {
        const optionElement = document.createElement('button');
        optionElement.textContent = option;
        optionElement.addEventListener('click', checkAnswer);
        optionsElement.appendChild(optionElement);
    });
}

function checkAnswer(event) {
    const selectedOption = event.target.textContent;
    const currentQuizData = quizData[currentQuestion];

    if (selectedOption === currentQuizData.answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizContainer.style.display = 'none';
    resultElement.textContent = `You scored ${score} out of ${quizData.length}!`;
}

loadQuestion();
submitButton.addEventListener('click', checkAnswer);
