// script.js
const questions = [
  // 1–10 (original ones)
  {
    question: "What does HTML stand for?",
    options: [
      "Hyperlinks and Text Markup Language",
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hot Mail Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "Which language is used to style web pages?",
    options: ["HTML", "Python", "CSS", "Java"],
    answer: "CSS",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<script>", "<js>", "<javascript>", "<code>"],
    answer: "<script>",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: ["class", "font", "style", "styles"],
    answer: "style",
  },
  {
    question: "How do you write a comment in JavaScript?",
    options: [
      "<!-- This is a comment -->",
      "// This is a comment",
      "' This is a comment",
      "** This is a comment",
    ],
    answer: "// This is a comment",
  },
  {
    question: "Which property is used to change the background color in CSS?",
    options: ["color", "background-color", "bgcolor", "background"],
    answer: "background-color",
  },
  {
    question: "What will `console.log(typeof [])` return?",
    options: ["object", "array", "list", "undefined"],
    answer: "object",
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: ["<!--", "//", "##", "**"],
    answer: "//",
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    options: ["<break>", "<br>", "<lb>", "<newline>"],
    answer: "<br>",
  },

  // 11–40 (new ones)
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    answer: "<a>",
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["font-style", "text-size", "font-size", "size"],
    answer: "font-size",
  },
  {
    question: "In JavaScript, what does `NaN` stand for?",
    options: [
      "Not a Name",
      "No Answer Needed",
      "Not a Number",
      "Negative and Null",
    ],
    answer: "Not a Number",
  },
  {
    question: "What does the `id` attribute do in HTML?",
    options: [
      "Defines a class",
      "Applies a style",
      "Assigns a unique identifier",
      "Creates a link",
    ],
    answer: "Assigns a unique identifier",
  },
  {
    question: "Which method is used to select an element by ID in JavaScript?",
    options: [
      "getElementByClass",
      "querySelectorAll",
      "getElementById",
      "getById",
    ],
    answer: "getElementById",
  },
  {
    question: "What is the default display value of a <div> in HTML?",
    options: ["inline", "inline-block", "block", "flex"],
    answer: "block",
  },
  {
    question: "Which CSS property adds space inside an element?",
    options: ["margin", "padding", "spacing", "border"],
    answer: "padding",
  },
  {
    question: "What does the `===` operator check in JavaScript?",
    options: [
      "Value only",
      "Type only",
      "Value and type",
      "If a variable exists",
    ],
    answer: "Value and type",
  },
  {
    question: "Which tag is used to define a table row?",
    options: ["<row>", "<tr>", "<td>", "<th>"],
    answer: "<tr>",
  },
  {
    question: "How do you center text in CSS?",
    options: [
      "text-style: center;",
      "align: center;",
      "text-align: center;",
      "font-align: center;",
    ],
    answer: "text-align: center;",
  },
  {
    question: "Which function converts a string to a number in JavaScript?",
    options: ["parseInt()", "int()", "convert()", "number()"],
    answer: "parseInt()",
  },
  {
    question: "Which tag is used for unordered lists?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    answer: "<ul>",
  },
  {
    question: "What is the result of 2 + '2' in JavaScript?",
    options: ["22", "4", "NaN", "undefined"],
    answer: "22",
  },
  {
    question: "Which event occurs when the user clicks an HTML element?",
    options: ["onmouseclick", "onclick", "onpress", "onhover"],
    answer: "onclick",
  },
  {
    question: "Which CSS property is used to hide elements?",
    options: [
      "display: none;",
      "visibility: gone;",
      "opacity: 0;",
      "hide: true;",
    ],
    answer: "display: none;",
  },
  {
    question: "Which HTML tag makes text italic?",
    options: ["<i>", "<em>", "<italic>", "<it>"],
    answer: "<i>",
  },
  {
    question: "Which CSS value makes an element see-through?",
    options: [
      "visibility: hidden;",
      "opacity: 0;",
      "display: none;",
      "z-index: -1;",
    ],
    answer: "opacity: 0;",
  },
  {
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Digital Order Method",
      "Data Output Map",
      "Display Oriented Module",
    ],
    answer: "Document Object Model",
  },
  {
    question: "Which HTML tag is used to show an image?",
    options: ["<image>", "<pic>", "<img>", "<src>"],
    answer: "<img>",
  },
  {
    question: "Which JavaScript method adds a new item to an array?",
    options: ["add()", "insert()", "push()", "append()"],
    answer: "push()",
  },
  {
    question:
      "What does the `this` keyword refer to in JavaScript (in a method)?",
    options: [
      "The function itself",
      "The global object",
      "The object calling the method",
      "The window",
    ],
    answer: "The object calling the method",
  },
  {
    question: "Which CSS unit is relative to the font size of the element?",
    options: ["px", "em", "%", "vh"],
    answer: "em",
  },
  {
    question: "How do you start a for loop in JavaScript?",
    options: [
      "for i = 0; i < 5; i++",
      "loop (i=0; i<5)",
      "for (let i = 0; i < 5; i++)",
      "repeat (5 times)",
    ],
    answer: "for (let i = 0; i < 5; i++)",
  },
  {
    question: "What does `<input type='checkbox'>` create?",
    options: ["Text field", "Option list", "Toggle switch", "Checkbox"],
    answer: "Checkbox",
  },
  {
    question: "Which method changes the content of an HTML element?",
    options: ["innerHTML", "textContent", "value", "both A and B"],
    answer: "both A and B",
  },
  {
    question: "Which HTML tag is used to define a dropdown list?",
    options: ["<dropdown>", "<select>", "<option>", "<input type='list'>"],
    answer: "<select>",
  },
  {
    question: "How do you make a comment in CSS?",
    options: ["// comment", "/* comment */", "<!-- comment -->", "# comment"],
    answer: "/* comment */",
  },
  {
    question: "What does the `addEventListener()` function do?",
    options: [
      "Creates a new HTML element",
      "Listens for an event",
      "Adds audio to the page",
      "Starts an animation",
    ],
    answer: "Listens for an event",
  },
  {
    question: "Which method removes the last item in a JavaScript array?",
    options: ["remove()", "pop()", "delete()", "slice()"],
    answer: "pop()",
  },
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 30; // Time per question
let timerInterval;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

function showQuestion() {
  let q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach((option) => {
    let btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("btn"); // ADD CLASS FOR LATER SELECTION
    btn.onclick = () => selectAnswer(option);
    optionsEl.appendChild(btn);
  });

  clearInterval(timerInterval);
  timeLeft = 10;
  document.getElementById("timer").textContent = `Time left: ${timeLeft}s`;

  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = `Time left: ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      disableOptions();
      nextBtn.style.display = "block";

      // Automatically go to next question or end the quiz
      if (currentQuestion + 1 >= questions.length) {
        endQuiz();
      }
    }
  }, 1000);

  nextBtn.style.display = "none";
}

function selectAnswer(selected) {
  const correct = questions[currentQuestion].answer;
  const allButtons = document.querySelectorAll("#options button");
  allButtons.forEach((btn) => {
    btn.disabled = true;
    if (btn.textContent === correct) {
      btn.style.backgroundColor = "#8bc34a"; // green
    } else if (btn.textContent === selected) {
      btn.style.backgroundColor = "#e57373"; // red
    }
  });

  if (selected === correct) {
    score++;
  }

  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
});

function endQuiz() {
  questionEl.textContent = "Quiz Over!";
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";
  scoreEl.textContent = `You scored ${score} out of ${questions.length}! 🎉`;
}

document.getElementById("quit-btn").addEventListener("click", () => {
  document.querySelector(".quiz-container").innerHTML = `
    <h2>Thanks for playing!</h2>
    <p>See you next time! 🧠🎉</p>
  `;
});
function disableOptions() {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.disabled = true;
    if (button.textContent === questions[currentQuestion].answer) {
      button.classList.add("correct");
    }
  });
}
clearInterval(timerInterval);
showQuestion();
