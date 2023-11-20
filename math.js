const questions = [
    {
        question: "What is 5 + 7?",
        choices: ["10", "11", "12", "13"],
        correctAnswer: "12"
    },
    {
        question: "If you have 3 apples and you eat 2, how many apples do you have left?",
        choices: ["0", "1", "2", "3"],
        correctAnswer: "1"
    },
    {
        question: "What is the product of 6 and 8?",
        choices: ["36", "42", "48", "54"],
        correctAnswer: "48"
    },
    {
        question: "If a rectangle has a length of 5 units and a width of 3 units, what is its area?",
        choices: ["8", "12", "15", "18"],
        correctAnswer: "15"
    },
    {
        question: "What is the next number in the sequence: 2, 4, 6, ___?",
        choices: ["8", "10", "12", "14"],
        correctAnswer: "8"
    },
    {
        question: "How many sides does a triangle have?",
        choices: ["2", "3", "4", "5"],
        correctAnswer: "3"
    },
    {
        question: "Which of the following is a prime number: 9, 13, 16, 21?",
        choices: ["9", "13", "16", "21"],
        correctAnswer: "13"
    },
    {
        question: "If you have 4 quarters, how much money do you have in dollars?",
        choices: ["$0.25", "$1.00", "$0.50", "$2.00"],
        correctAnswer: "$1.00"
    },
    {
        question: "What is the result of 3 × 9?",
        choices: ["24", "27", "30", "33"],
        correctAnswer: "27"
    },
    {
        question: "If a clock shows 3:45, how many minutes until 4:00?",
        choices: ["10", "15", "20", "25"],
        correctAnswer: "15"
    },
    {
        question: "What is the sum of the first 5 counting numbers?",
        choices: ["10", "12", "15", "20"],
        correctAnswer: "15"
    },
    {
        question: "If Sally has 8 candies and gives 3 to her friend, how many candies does she have left?",
        choices: ["2", "3", "5", "8"],
        correctAnswer: "5"
    },
    {
        question: "What is the missing number: 8, __, 12, 16?",
        choices: ["9", "10", "11", "13"],
        correctAnswer: "10"
    },
    {
        question: "How many sides does a square have?",
        choices: ["2", "3", "4", "5"],
        correctAnswer: "4"
    },
    {
        question: "If you have 2 groups of 4 apples each, how many apples do you have in total?",
        choices: ["4", "6", "8", "10"],
        correctAnswer: "8"
    },
    {
        question: "What is the result of 7 - 3?",
        choices: ["2", "3", "4", "5"],
        correctAnswer: "4"
    },
    {
        question: "If a box has 5 red balls and 3 blue balls, what fraction of the balls are blue?",
        choices: ["1/5", "1/4", "1/3", "3/8"],
        correctAnswer: "3/8"
    },
    {
        question: "How many months are there in a year?",
        choices: ["10", "11", "12", "13"],
        correctAnswer: "12"
    },
    {
        question: "If you have 3 dimes, how much money do you have in cents?",
        choices: ["10", "15", "20", "30"],
        correctAnswer: "30"
    },
    {
        question: "What is the value of 4 × 6 ÷ 2?",
        choices: ["8", "12", "16", "24"],
        correctAnswer: "12"
    },
    {
        question: "If a rectangle has a length of 8 units and a width of 2 units, what is its perimeter?",
        choices: ["12", "16", "20", "24"],
        correctAnswer: "20"
    },
    {
        question: "What is the result of 9 + 6 - 4?",
        choices: ["9", "11", "13", "15"],
        correctAnswer: "11"
    },
    {
        question: "How many fingers do you have on one hand?",
        choices: ["4", "5", "6", "10"],
        correctAnswer: "5"
    },
    {
        question: "If you have 7 books and you read 2, how many books do you have left?",
        choices: ["3", "4", "5", "6"],
        correctAnswer: "5"
    },
    {
        question: "What is the next letter in the alphabet after 'G'?",
        choices: ["H", "I", "J", "K"],
        correctAnswer: "H"
    },
    {
        question: "If a square has a side length of 3 units, what is its area?",
        choices: ["3", "6", "9", "12"],
        correctAnswer: "9"
    },
    {
        question: "What is the result of 5 × 5?",
        choices: ["20", "25", "30", "35"],
        correctAnswer: "25"
    },
    {
        question: "If a triangle has three sides of lengths 4, 5, and 6 units, is it a right-angled triangle?",
        choices: ["Yes", "No"],
        correctAnswer: "Yes"
    },

    {
        question: "What is the result of 2 + 3 × 4?",
        choices: ["14", "20", "32", "50"],
        correctAnswer: "14"
    },
    {
        question: "If you have 6 cookies and share them equally among 2 friends, how many cookies does each friend get?",
        choices: ["2", "3", "4", "6"],
        correctAnswer: "3"
    },
    {
        question: "What is the next number in the sequence: 1, 4, 9, ___?",
        choices: ["12", "15", "18", "25"],
        correctAnswer: "16"
    },
    {
        question: "If a rectangle has a length of 7 units and a width of 3 units, what is its area?",
        choices: ["15", "18", "21", "24"],
        correctAnswer: "21"
    },
    {
        question: "What is the sum of the first 3 even numbers?",
        choices: ["6", "9", "12", "15"],
        correctAnswer: "12"
    },
    {
        question: "How many legs does a cat have?",
        choices: ["2", "4", "6", "8"],
        correctAnswer: "4"
    },
    {
        question: "Which of the following is a square number: 9, 16, 25, 36?",
        choices: ["9", "16", "25", "36"],
        correctAnswer: "16"
    },
    {
        question: "If a clock shows 2:30, how many minutes until 3:00?",
        choices: ["10", "15", "20", "30"],
        correctAnswer: "30"
    },
    {
        question: "What is the product of 5 and 7?",
        choices: ["30", "35", "40", "45"],
        correctAnswer: "35"
    },
    {
        question: "If you have 8 crayons and you give 3 to your friend, how many crayons do you have left?",
        choices: ["2", "3", "5", "8"],
        correctAnswer: "5"
    },
    {
        question: "What is the missing number: 3, __, 9, 12?",
        choices: ["4", "6", "8", "10"],
        correctAnswer: "6"
    },
    {
        question: "How many sides does an octagon have?",
        choices: ["6", "7", "8", "9"],
        correctAnswer: "8"
    },
    {
        question: "If a box has 4 red balls and 2 blue balls, what fraction of the balls are red?",
        choices: ["1/3", "1/2", "2/3", "3/4"],
        correctAnswer: "2/3"
    },
    {
        question: "What is the result of 4 × 5 + 2?",
        choices: ["18", "22", "24", "26"],
        correctAnswer: "22"
    },
    {
        question: "If you have 5 marbles and you lose 2, how many marbles do you have left?",
        choices: ["1", "2", "3", "5"],
        correctAnswer: "3"
    },
    {
        question: "What is the value of 7 - 4 × 2?",
        choices: ["-1", "0", "1", "2"],
        correctAnswer: "-1"
    },
    {
        question: "If a triangle has three sides of lengths 3, 4, and 5 units, is it a right-angled triangle?",
        choices: ["Yes", "No"],
        correctAnswer: "Yes"
    },
    {
        question: "What is the result of 9 ÷ 3?",
        choices: ["2", "3", "4", "5"],
        correctAnswer: "3"
    },
    {
        question: "If you have 2 dozen cookies, how many cookies do you have?",
        choices: ["12", "18", "24", "30"],
        correctAnswer: "24"
    },
    {
        question: "What is the sum of the first 4 odd numbers?",
        choices: ["8", "12", "16", "20"],
        correctAnswer: "16"
    },
    {
        question: "If a square has a side length of 4 units, what is its perimeter?",
        choices: ["12", "16", "20", "24"],
        correctAnswer: "16"
    },
    {
        question: "What is the result of 6 + 8 ÷ 2?",
        choices: ["8", "10", "12", "14"],
        correctAnswer: "10"
    },
    {
        question: "If you have 3 nickels, how much money do you have in cents?",
        choices: ["10", "15", "20", "30"],
        correctAnswer: "15"
    },
    {
        question: "What is the value of 3 × (4 + 2)?",
        choices: ["12", "18", "24", "30"],
        correctAnswer: "18"
    },
    {
        question: "How many faces does a cube have?",
        choices: ["4", "6", "8", "12"],
        correctAnswer: "6"
    },
    {
        question: "What is the result of 5 - 2 × 3?",
        choices: ["-1", "1", "3", "6"],
        correctAnswer: "-1"
    },
    {
        question: "If a rectangle has a length of 6 units and a width of 4 units, what is its area?",
        choices: ["18", "20", "24", "30"],
        correctAnswer: "24"
    },
    {
        question: "What is the next letter in the alphabet after 'P'?",
        choices: ["Q", "R", "S", "T"],
        correctAnswer: "Q"
    },
    {
        question: "If you have 4 quarters, how much money do you have in dollars?",
        choices: ["$0.25", "$0.50", "$0.75", "$1.00"],
        correctAnswer: "$1.00"
    },
    {
        question: "What is the sum of the first 5 multiples of 3?",
        choices: ["9", "15", "18", "21"],
        correctAnswer: "15"
    }
];
    


let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;

    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";

    currentQuestion.choices.forEach(function (choice, index) {
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", function () {
            handleAnswer(choice === currentQuestion.correctAnswer, button);
        });
        choicesContainer.appendChild(button);
    });

    enableButtons();
}

function handleAnswer(isCorrect, button) {
    if (isCorrect) {
        score++;
        button.classList.add("correct");
    } else {
        button.classList.add("wrong");
    }

    document.getElementById("current-score").textContent = `Score: ${score}`;
    disableButtons();

    setTimeout(() => {
        enableButtons();
        nextQuestion(); 
    }, 1000); 
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showQuizResult();
    }
}

function showQuizResult() {
    const quizSection = document.getElementById("quiz");
    quizSection.innerHTML = `<h2>Quiz Completed!</h2><p>Your score: ${score}/${questions.length}</p>`;
}

function disableButtons() {
    const buttons = document.querySelectorAll("#choices button");
    buttons.forEach(function (button) {
        button.disabled = true;
    });
}

function enableButtons() {
    const buttons = document.querySelectorAll("#choices button");
    buttons.forEach(function (button) {
        button.disabled = false;
        button.classList.remove("correct", "wrong");
    });
}

function skipQuestion() {
    nextQuestion(); 
}

document.addEventListener("DOMContentLoaded", function () {
    showQuestion();
});

document.addEventListener("DOMContentLoaded", function () {

    function createFloatingShape(type, delay) {
        const shape = document.createElement("span");
        shape.classList.add("floating", type);
        shape.style.top = `${Math.random() * 100}vh`;
        shape.style.left = `${Math.random() * 100}vw`;
        shape.style.animationDelay = `${delay}s`;

        return shape;
    }

    const shapeData = [
        { type: "circle", delay: -0.9 },
        { type: "triangle", delay: -4.8 },
        { type: "cross", delay: -4 },
        { type: "square", delay: -2.8 },
        { type: "square", delay: -2.15 },
        { type: "square", delay: -1.9 },
        { type: "cross", delay: -0.65 },
        { type: "cross", delay: -0.4 },
        { type: "circle", delay: -0.9 },
        { type: "circle", delay: -3.65 },
        { type: "cross", delay: -2.25 },
        { type: "cross", delay: -2 },
        { type: "cross", delay: -1.55 },
        { type: "cross", delay: -0.95 },
        { type: "square", delay: -4.45 },
        { type: "circle", delay: -3.35 },
        { type: "triangle", delay: -2.3 },
        { type: "triangle", delay: -1.75 },
        { type: "triangle", delay: -1.25 },
        { type: "triangle", delay: -0.65 },
        { type: "triangle", delay: -0.35 },
        { type: "cross", delay: -4.3 },
        { type: "cross", delay: -4.05 },
        { type: "cross", delay: -3.75 },
        { type: "cross", delay: -3.3 },
        { type: "square", delay: -2.1 },
        { type: "square", delay: -1.75 },
        { type: "square", delay: -1.45 },
        { type: "square", delay: -1.05 },
        { type: "square", delay: -0.7 },
        { type: "square", delay: -0.35 },
        { type: "square", delay: -0.1 }
    ];

    const backgroundShapes = document.querySelector(".back-shapes");
    shapeData.forEach(function (data) {
        const shape = createFloatingShape(data.type, data.delay);
        backgroundShapes.appendChild(shape);
    });

});