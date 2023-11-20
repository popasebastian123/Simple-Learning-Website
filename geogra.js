const additionalQuestions = [
  {
    question: "Which mountain range is considered the 'roof of the world'?",
    options: ["Rocky Mountains", "Andes", "Himalayas", "Alps"],
    correctAnswer: "Himalayas",
    points: 10
  },
  {
    question: "What is the smallest country in the world?",
    options: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
    correctAnswer: "Vatican City",
    points: 10
  },
  {
    question: "In which country is the ancient city of Petra located?",
    options: ["Egypt", "Jordan", "Greece", "Iraq"],
    correctAnswer: "Jordan",
    points: 10
  },
  {
    question: "Which river flows through Cairo?",
    options: ["Nile", "Amazon", "Danube", "Ganges"],
    correctAnswer: "Nile",
    points: 10
  },
  {
    question: "What is the capital of South Korea?",
    options: ["Seoul", "Tokyo", "Beijing", "Hanoi"],
    correctAnswer: "Seoul",
    points: 10
  },
  {
    question: "In which ocean is the Bermuda Triangle located?",
    options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    correctAnswer: "Atlantic Ocean",
    points: 10
  },
  {
    question: "What is the official language of Brazil?",
    options: ["Portuguese", "Spanish", "English", "French"],
    correctAnswer: "Portuguese",
    points: 10
  },
  {
    question: "Which desert is often called the 'Sea of Sand'?",
    options: ["Gobi Desert", "Sahara Desert", "Arabian Desert", "Karakum Desert"],
    correctAnswer: "Sahara Desert",
    points: 10
  },
  {
    question: "What is the largest island in the world?",
    options: ["Greenland", "Borneo", "Madagascar", "Java"],
    correctAnswer: "Greenland",
    points: 10
  },
  {
    question: "In which country is Mount Kilimanjaro located?",
    options: ["Kenya", "Tanzania", "Uganda", "Ethiopia"],
    correctAnswer: "Tanzania",
    points: 10
  }
];

const questions = [
  ...additionalQuestions,
  // Your existing questions
  {
    question: "What is the capital of Japan?",
    options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
    correctAnswer: "Tokyo",
    points: 10
  },
  {
    question: "Which river is the longest in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    correctAnswer: "Nile",
    points: 10
  },
  {
    question: "In which continent is the Sahara Desert located?",
    options: ["Africa", "Asia", "South America", "North America"],
    correctAnswer: "Africa",
    points: 10
  }
];

  
  const quizContainer = document.getElementById("quiz-container");
  const scoreContainer = document.getElementById("score-container");
  const submitButton = document.getElementById("submit-btn");
  let currentQuestionIndex = 0;
  let score = 0;
  
  function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
  
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
    questionDiv.textContent = currentQuestion.question;
  
    const optionsDiv = document.createElement("div");
    optionsDiv.classList.add("options");
  
    currentQuestion.options.forEach((option, optionIndex) => {
      const optionButton = document.createElement("button");
      optionButton.classList.add("option");
      optionButton.textContent = option;
      optionButton.addEventListener("click", () => selectOption(optionButton));
      optionsDiv.appendChild(optionButton);
    });
  
    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionDiv);
    quizContainer.appendChild(optionsDiv);
  
    submitButton.disabled = true;
  }
  
  function selectOption(selectedOption) {
    const options = document.querySelectorAll('.option');
  
    options.forEach(option => {
      option.classList.remove('selected');
    });
  
    selectedOption.classList.add('selected');
    submitButton.disabled = false;
  }
  
  function submitAnswer() {
    const selectedOption = document.querySelector('.option.selected');
  
    if (selectedOption) {
      const userAnswer = selectedOption.textContent;
      const currentQuestion = questions[currentQuestionIndex];
  
      if (userAnswer === currentQuestion.correctAnswer) {
        selectedOption.classList.add('correct');
        score += currentQuestion.points;
      } else {
        selectedOption.classList.add('wrong');
      }
  
      scoreContainer.textContent = `Score: ${score}`;
  
      setTimeout(() => {
        selectedOption.classList.remove('selected', 'correct', 'wrong');
        currentQuestionIndex++;
  
        if (currentQuestionIndex < questions.length) {
          displayQuestion();
        } else {
          quizContainer.innerHTML = '<p>Quiz completed!</p>';
          submitButton.disabled = true;
        }
      }, 1000);
    }
  }
  
  // Initial display
  displayQuestion();
  