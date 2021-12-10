//*---------------------------------------*/
//*-------------- constants --------------*/
//*---------------------------------------*/
const QUESTIONS = [
  'When did guitar music first become prevalent?',
  `Where did guitars first appear?`,
  `Strings and frets were originally made out of ________?`,
  `The first electric guitar dates back to ____?`,
  `The ___________ was the first successful, mass-produced solid body electric guitar.`,
  `Where was the world's biggest playable electric guitar built?`,
  `Where was the world's largest playable acoustic guitar built?`,
  `Kurt Cobain's guitar from Nirvana's 1993 MTV Unplugged performance sold for how much?`,
  `Who is the most influential guitarist of all time?`,
  `The Fender factory makes how many strings each day?`,
];
const ANSWERS = [
  `The 1800's`,
  `Spain`,
  `Animal Guts`,
  `1931`,
  `Fender Telecaster`,
  `Conroe, Texas`,
  `Porto, Portugal`,
  `$6.01 Million`,
  `Jimi Hendrix`,
  `90,000`,
];
const questionOptions = {
  answer1: [
    `The 1700's`,
    `Spain`,
    `Wood`,
    `1931`,
    `Gibson Les Paul`,
    `New York City, New York`,
    `Austin, Texas`,
    `$6.01 Million`,
    `Lindsay Buckingham`,
    `90,000`,
  ],
  answer2: [
    `The 1800's`,
    `America`,
    `Metal`,
    `1981`,
    `Fender Telecaster`,
    `San Francisco, California`,
    `San Jose, Costa Rica`,
    `$10.9 Million`,
    `Jimi Hendrix`,
    `150,000`,
  ],
  answer3: [
    `The 1900's`,
    `Germany`,
    `Animal Guts`,
    `1952`,
    `Fender Stratocaster`,
    `Conroe, Texas`,
    `Madrid, Spain`,
    `$565,000`,
    `Eric Clapton`,
    `10,000`,
  ],
  answer4: [
    `The 2000's`,
    `France`,
    `Leather`,
    `1893`,
    `Gibson ES-335`,
    `Lincoln, Nebraska`,
    `Porto, Portugal`,
    `$915,000`,
    `Jimmy Page`,
    `25,000`,
  ],
};

let i = 0;
let score = Number();
let theme = document.getElementById('theme');

//*---------------------------------------*/
//*------ cached element references ------*/
//*---------------------------------------*/
const header = document.querySelector('#header');
const headerBtn = document.querySelector('.hero-title');
const startBtn = document.querySelector('.start-game-btn');
const startPageEl = document.querySelector('.game-start-page');
const scoreSection = document.querySelector('.score-section');
const scoreCount = document.querySelector('.score-board-count');
const gameBoardSection = document.querySelector('.game-board');
const cardCounter = document.querySelector('.card-counter');
const formEl = document.querySelector('form');
const cardTextQuestionEl = document.querySelector('#card-text-question');
const cardTextAnswerEl = document.querySelector('#card-text-answer');
const nextArrow = document.querySelector('.fa-arrow-right');
const prevArrow = document.querySelector('.fa-arrow-left');
const toggleTheme = document.querySelector('#toggle');
const restartBtn = document.querySelectorAll('.restart');
const hintBtn = document.querySelector('.hint-button');
const flipCardInner = document.querySelector('.flip-card-inner');
const hideHintBtn = document.querySelector('.hide-hint-button');
// answer elements (input)
const answerOneEl = document.querySelector('#answer1');
const answerTwoEl = document.querySelector('#answer2');
const answerThreeEl = document.querySelector('#answer3');
const answerFourEl = document.querySelector('#answer4');
// answer labels
const answerLabelOne = document.querySelector('#answer-1-label');
const answerLabelTwo = document.querySelector('#answer-2-label');
const answerLabelThree = document.querySelector('#answer-3-label');
const answerLabelFour = document.querySelector('#answer-4-label');
// radio buttons
const radioButtons = document.getElementsByName('answer');
// Check answer button
const checkAnswerBtn = document.querySelector('.check-answer');
// ending pages
const endWinningPage = document.querySelector('.winning-page');
const endLosingPage = document.querySelector('.losing-page');

//*---------------------------------------*/
//*----------- event listeners -----------*/
//*---------------------------------------*/
headerBtn.addEventListener('click', init);
startBtn.addEventListener('click', startGame);
formEl.addEventListener('submit', checkAnswer);
nextArrow.addEventListener('click', nextQuestion);
prevArrow.addEventListener('click', previousQuestion);
restartBtn.forEach((button) => {
  button.addEventListener('click', init);
});
hintBtn.addEventListener('click', showHint);
hideHintBtn.addEventListener('click', hideHint);
toggleTheme.addEventListener('click', darkTheme);

//*---------------------------------------*/
//*-------------- functions --------------*/
//*---------------------------------------*/
//?---------- Initalize the page ----------*/
function init() {
  // set i to 0
  i = 0;
  // set score to 0
  score = 0;
  // set score innertext
  scoreCount.innerText = `${score}/10`;
  // hide the score board section
  scoreSection.classList.add('hidden');
  // hide the main game board section
  gameBoardSection.classList.add('hidden');
  // show the start page
  startPageEl.classList.remove('hidden');
  // set the question text to the first question
  cardTextQuestionEl.innerText = QUESTIONS[i];
  // hide the win/lose pages
  endWinningPage.classList.add('hidden');
  endLosingPage.classList.add('hidden');
  defaultStyle();
  // show header
  header.classList.remove('hidden');
}
init();
//?---------- Dark Theme Function ----------*/
function darkTheme() {
  // HELPER: https://www.geeksforgeeks.org/how-to-switch-between-multiple-css-stylesheets-using-javascript/
  // if the link href is style.css, then change it to dark.css
  if (theme.getAttribute('href') == `./css/style.css`) {
    theme.setAttribute('href', `./css/dark.css`);
  } else {
    // if it's not, then leave it at style.css
    theme.setAttribute('href', `./css/style.css`);
  }
}
//?---------- Start the game function ----------*/
function startGame() {
  // enable the check answer button
  checkAnswerBtn.disabled = false;
  // Hide the Start Page Section
  startPageEl.classList.add('hidden');
  // Show the Score Board
  scoreSection.classList.remove('hidden');
  // Show the gameplay section
  gameBoardSection.classList.remove('hidden');
  // Set card question innerText to first question
  cardTextQuestionEl.innerText = QUESTIONS[i];
  // Set card answer innerText to first question
  cardTextAnswerEl.innerText = ANSWERS[i];
  // Set card Counter to current card
  cardCounter.innerText = `${i + 1}/10`;
  // hide the win/lose pages
  endWinningPage.classList.add('hidden');
  endLosingPage.classList.add('hidden');
  // Set answer options (labels)
  answerLabelOne.innerText = questionOptions.answer1[i];
  answerLabelTwo.innerText = questionOptions.answer2[i];
  answerLabelThree.innerText = questionOptions.answer3[i];
  answerLabelFour.innerText = questionOptions.answer4[i];
  // Set answer options (value);
  answerOneEl.value = questionOptions.answer1[i];
  answerTwoEl.value = questionOptions.answer2[i];
  answerThreeEl.value = questionOptions.answer3[i];
  answerFourEl.value = questionOptions.answer4[i];
}
//?---------- Winning Page Function ----------*/
function winningPage() {
  // hide the score board section
  scoreSection.classList.add('hidden');
  // hide the main game board section
  gameBoardSection.classList.add('hidden');
  // show the start page
  startPageEl.classList.add('hidden');
  // hide the win/lose pages
  endWinningPage.classList.remove('hidden');
  endLosingPage.classList.add('hidden');
  // hide header
  header.classList.add('hidden');
}
//?---------- Losing Page Function ----------*/
function losingPage() {
  // hide the score board section
  scoreSection.classList.add('hidden');
  // hide the main game board section
  gameBoardSection.classList.add('hidden');
  // show the start page
  startPageEl.classList.add('hidden');
  // hide the win/lose pages
  endWinningPage.classList.add('hidden');
  endLosingPage.classList.remove('hidden');
  // hide header
  header.classList.add('hidden');
}
//?---------- Check the Answer Function ----------*/
function checkAnswer(event) {
  event.preventDefault();
  // declare a selectedOption variable
  let selectedOption;
  // cycle through each radio button to see what button was selected
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      selectedOption = radioButtons[i].value;
    }
  }
  // if the selected radio button is equal to the answer
  if (selectedOption === ANSWERS[i]) {
    // update the score counter by 1
    scoreCount.innerText = `${score + 1}/10`;
    // run the correct answer function
    correctAnswer();
    // Add '1' to the score so you can keep track of current score
    score = score + 1;
  } else {
    // if the selected radio button does not equal the answer
    // run the incorrect answer function
    incorrectAnswer();
  }
  // check to see if the score is "10/10" and if we have reached the last question
  if (scoreCount.innerText === `10/10`) {
    // if it is, then display the winning page
    winningPage();
  } else if (
    scoreCount.innerText !== `10/10` &&
    cardCounter.innerText === `10/10`
  ) {
    losingPage();
  }
}
//?---------- Next Question Function ----------*/
function nextQuestion() {
  // cycle through each question
  if (i < QUESTIONS.length - 1) {
    // reset the page styling
    defaultStyle();
    // move to the next iteration
    i++;
    // set question card text
    cardTextQuestionEl.innerText = QUESTIONS[i];
    // set answer card text
    setTimeout(function () {
      cardTextAnswerEl.innerText = ANSWERS[i];
    }, 1000);
    // add 1 to the card counter
    cardCounter.innerText = `${i + 1}/10`;
    // hide the hint and flip back to question
    hideHint();
    // Set answer options
    answerLabelOne.innerText = questionOptions.answer1[i];
    answerLabelTwo.innerText = questionOptions.answer2[i];
    answerLabelThree.innerText = questionOptions.answer3[i];
    answerLabelFour.innerText = questionOptions.answer4[i];
    // Set answer options (value);
    answerOneEl.value = questionOptions.answer1[i];
    answerTwoEl.value = questionOptions.answer2[i];
    answerThreeEl.value = questionOptions.answer3[i];
    answerFourEl.value = questionOptions.answer4[i];
  }
}
//?---------- Previous Question Function ----------*/
function previousQuestion() {
  if (i !== 0) {
    // reset the page styling
    defaultStyle();
    // if you go back to the last question, disable the checkAnswerBtn
    checkAnswerBtn.style.backgroundColor = 'gray';
    checkAnswerBtn.disabled = true;
    // move to the next iteration
    i--;
    // set question card text
    cardTextQuestionEl.innerText = QUESTIONS[i];
    // set answer card text
    setTimeout(function () {
      cardTextAnswerEl.innerText = ANSWERS[i];
    }, 1000);
    // add 1 to the card counter
    cardCounter.innerText = `${i + 1}/10`;
    // hide the hint and flip back to question
    hideHint();
    // Set answer options
    answerLabelOne.innerText = questionOptions.answer1[i];
    answerLabelTwo.innerText = questionOptions.answer2[i];
    answerLabelThree.innerText = questionOptions.answer3[i];
    answerLabelFour.innerText = questionOptions.answer4[i];
    // Set answer options (value);
    answerOneEl.value = questionOptions.answer1[i];
    answerTwoEl.value = questionOptions.answer2[i];
    answerThreeEl.value = questionOptions.answer3[i];
    answerFourEl.value = questionOptions.answer4[i];
  }
}
//?---------- Show Hint Function ----------*/
function showHint() {
  // transform the flipCardInner on the X axis
  flipCardInner.style.transform = 'rotateX(180deg)';
}
//?---------- Hide Hint Function ----------*/
function hideHint() {
  // transform the flipCardInner on the X axis
  flipCardInner.style.transform = 'rotateX(0deg)';
}
//?---------- Win Message Function ----------*/
function goodJobMessage() {
  // create and append a congratulatory message
  // create div
  let goodJobDiv = document.createElement('div');
  // set the attribute id
  goodJobDiv.setAttribute('id', 'good-job');
  // append div to form element
  formEl.appendChild(goodJobDiv);
  // create p
  let goodJobMsg = document.createElement('p');
  // set the inner text of p
  goodJobMsg.innerText = `Good job!`;
  // append p to div
  goodJobDiv.appendChild(goodJobMsg);
}
//?---------- Lose Message Function ----------*/
function losingMessage() {
  // create and append a losing message
  // create div
  let losingDiv = document.createElement('div');
  // set the attribute id
  losingDiv.setAttribute('id', 'bad-job');
  // append div to form element
  formEl.appendChild(losingDiv);
  // create p
  let losingMessage = document.createElement('p');
  // set the inner text of p
  losingMessage.innerText = `Better luck next time!`;
  // append p to div
  losingDiv.appendChild(losingMessage);
}
//?---------- Default Style Function ----------*/
function defaultStyle() {
  // remove radio button selection
  for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].checked = false;
  }
  // check answer button color
  checkAnswerBtn.style.backgroundColor = '#bce8c1';
  // enable the check answer button
  checkAnswerBtn.disabled = false;
  // remove previous win/lose message
  let winMsg = document.getElementById('good-job');
  let loseMsg = document.getElementById('bad-job');
  // HELPER: https://catalin.red/removing-an-element-with-plain-javascript-remove-method/
  if (formEl.contains(winMsg)) {
    formEl.removeChild(winMsg);
  }
  if (formEl.contains(loseMsg)) {
    formEl.removeChild(loseMsg);
  }
  // reset background depending on css style
  document.body.classList.remove('correct-question');
  document.body.classList.remove('incorrect-question');
}
//?---------- Correct Answer Function ----------*/
function correctAnswer() {
  // change check answer button background to gray
  checkAnswerBtn.style.backgroundColor = 'gray';
  // disable the checkAnswer button after click
  // HELPER: https://stackoverflow.com/questions/2323948/disabling-the-button-after-once-click
  checkAnswerBtn.disabled = true;
  // change background depending on css file
  document.body.classList.add('correct-question');
  goodJobMessage();
}
//?---------- Incorrect Answer Function ----------*/
function incorrectAnswer() {
  // change check answer button background to gray
  checkAnswerBtn.style.backgroundColor = 'gray';
  // disable the checkAnswer button after click
  // HELPER: https://stackoverflow.com/questions/2323948/disabling-the-button-after-once-click
  checkAnswerBtn.disabled = true;
  // change background depending on css file
  document.body.classList.add('incorrect-question');
  losingMessage();
}
