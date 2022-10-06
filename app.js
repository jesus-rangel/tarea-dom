let elQuestionScreen = document.getElementById("questionscreen");
let elWelcomeScreen = document.getElementById("welcomescreen");
let elGoodbyeScreen = document.getElementById("goodbyescreen");
let elWelcomeBtn = document.getElementById("welcome_btn");
let elBackToStartBtn = document.getElementById("backToStart_btn");
let elNumberOfQuestions = document.getElementById("numberOfQuestions");
let elUserNameView = document.getElementById("userNameView");
let valUserName = "";
let users = [];
let user;

function Question(title, answers) {
  this.title = title;
  this.answers = answers;
  this.getElement = function () {
    let questionNumber = document.createElement("h2");
    questionNumber.textContent = `Pregunta ${quiz.indexCurrentQuestion + 1}/${
      quiz.questions.length
    }`;
    let questionTitle = document.createElement("h3");
    questionTitle.textContent = this.title;
    let questionAnswers = document.createElement("ul");
    questionAnswers.classList.add("question__answer");

    this.answers.forEach((answer, index) => {
      let elAnswer = document.createElement("li");
      elAnswer.classList.add("answer");
      elAnswer.textContent = answer;
      elAnswer.id = index;
      elAnswer.addEventListener("click", this.enterAnswer);
      questionAnswers.append(elAnswer);
    });

    elQuestionScreen.append(questionNumber);
    elQuestionScreen.append(questionTitle);
    elQuestionScreen.append(questionAnswers);
  };
  this.enterAnswer = (event) => {
    let selectedAnswer = event.target.id;
    user.answers.push(selectedAnswer);
    elQuestionScreen.textContent = "";
    if (
      ((quiz.indexCurrentQuestion == 1 ||
        quiz.indexCurrentQuestion == 4 ||
        quiz.indexCurrentQuestion == 7 ||
        quiz.indexCurrentQuestion == 10) &&
        selectedAnswer == 1) ||
      quiz.indexCurrentQuestion == 2 ||
      quiz.indexCurrentQuestion == 5 ||
      quiz.indexCurrentQuestion == 8 ||
      quiz.indexCurrentQuestion == 11
    ) {
      quiz.indexCurrentQuestion += 2;
    } else {
      quiz.indexCurrentQuestion++;
    }
    quiz.showCurrentQuestion();
  };
}

function Quiz() {
  this.questions = [];
  this.indexCurrentQuestion = 0;
  this.addQuestions = function (questions) {
    questions.forEach((question) => {
      this.questions.push(question);
    });
  };
  this.showCurrentQuestion = function () {
    if (this.indexCurrentQuestion < this.questions.length) {
      this.questions[this.indexCurrentQuestion].getElement();
    } else {
      elQuestionScreen.style.display = "none";
      elGoodbyeScreen.style.display = "block";
    }
  };
}

function User(username) {
  this.username = username;
  this.answers = [];
}

let question1 = new Question(
  "Cuán satisfech@ está con nuestra atención al cliente?",
  ["Muy satisfech@", "medianamente satisfech@", "nada satisfech@"]
);
let question2 = new Question(
  "Usted accedió a nuestra web desde un computador o desde un celular?",
  ["Desde un computador", "Desde un celular"]
);
let question3 = new Question(
  "Su computador muestra nuestro sitio web de una manera accesible y agradable?",
  ["Sí", "No"]
);
let question4 = new Question(
  "Su celular muestra nuestro sitio web de una manera accesible y agradable?",
  ["Sí", "No"]
);
let question5 = new Question("Usted es hombre o mujer?", ["Hombre", "Mujer"]);
let question6 = new Question(
  "El sitio web se mostró en color azul para usted?",
  ["Sí", "No"]
);
let question7 = new Question(
  "El sitio web se mostró en color rosado para usted?",
  ["Sí", "No"]
);
let question8 = new Question("Le gusta la música country o rock?", [
  "Country",
  "Rock",
]);
let question9 = new Question("El sitio reprodujo música country para usted?", [
  "Sí",
  "No",
]);
let question10 = new Question("El sitio reprodujo música rock para usted?", [
  "Sí",
  "No",
]);
let question11 = new Question("Usted tiene cuenta de correo Gmail o Yahoo?", [
  "Gmail",
  "Yahoo",
]);
let question12 = new Question(
  "Nuestro sitio web le conectó con su cuenta Gmail?",
  ["Sí", "No"]
);
let question13 = new Question(
  "Nuestro sitio web le conectó con su cuenta Yahoo?",
  ["Sí", "No"]
);
let question14 = new Question(
  "Nuestro personal estuvo presente cuando usted necesitó ayuda?",
  ["Sí", "No", "No necesité ayuda"]
);
let question15 = new Question(
  "Prefiere acceder a nuestra tienda personalmente o de manera online?",
  ["En persona", "Online"]
);
let question16 = new Question("Cuán satisfech@ está con nuestra página web?", [
  "Muy satisfech@",
  "medianamente satisfech@",
  "nada satisfech@",
]);

let question17 = new Question(
  "Usted logró realizar la transacción que deseaba desde nuestra página web?",
  ["Sí", "No"]
);

let question18 = new Question(
  "Cuánto tiempo tiene usted siendo nuestr@ cliente?",
  ["Soy cliente nuev@", "Meses", "Años"]
);

let question19 = new Question("Cuántas cuentas tiene usted con nosotros?", [
  "Una",
  "Dos",
  "Más de dos",
]);

let question20 = new Question("Le pareció demasiado larga esta encuesta?", [
  "Sí",
  "No",
]);

let quiz = new Quiz();
quiz.addQuestions([
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
  question8,
  question9,
  question10,
  question11,
  question12,
  question13,
  question14,
  question15,
  question16,
  question17,
  question18,
  question19,
  question20,
]);

elNumberOfQuestions.textContent = quiz.questions.length;

const seeFirstQuestion = () => {
  elWelcomeScreen.style.display = "none";
  elQuestionScreen.style.display = "block";
  elUserNameView.style.display = "block";

  valUserName = document.getElementById("username").value;
  if (!valUserName.length) valUserName = "Anónimo";
  user = new User(valUserName);
  users.push(user);
  elUserNameView.textContent =
    "<span><strong>Usuario:</strong> " + valUserName + "</span>";
  quiz.showCurrentQuestion();
};

elWelcomeBtn.addEventListener("click", seeFirstQuestion);

const returnToStart = () => {
  elWelcomeScreen.style.display = "block";
  elQuestionScreen.style.display = "none";
  elGoodbyeScreen.style.display = "none";
  elUserNameView.style.display = "none";
  quiz.indexCurrentQuestion = 0;
  console.log(users);
};

elBackToStartBtn.addEventListener("click", returnToStart);
