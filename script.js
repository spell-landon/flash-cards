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
let isDarkTheme = false;

//*---------------------------------------*/
//*------ cached element references ------*/
//*---------------------------------------*/
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
startBtn.addEventListener('click', startGame);
formEl.addEventListener('submit', checkAnswer);
nextArrow.addEventListener('click', nextQuestion);
prevArrow.addEventListener('click', previousQuestion);
restartBtn.forEach((button) => {
  button.addEventListener('click', init);
});
hintBtn.addEventListener('click', showHint);
hideHintBtn.addEventListener('click', hideHint);
toggleTheme.addEventListener('click', changeTheme);

//*---------------------------------------*/
//*-------------- functions --------------*/
//*---------------------------------------*/
//?---------- Initalize the page ----------*/
function init() {
  // set i to 0
  i = 0;
  scoreCount.innerText = `0/10`;
  document.body.style.backgroundColor = 'white';
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
}
init();

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
}

//?---------- Check the Answer Function ----------*/
function checkAnswer(event) {
  event.preventDefault();
  let selectedOption;

  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      selectedOption = radioButtons[i].value;
    }
  }
  if (selectedOption === ANSWERS[i]) {
    scoreCount.innerText = `${score + 1}/10`;
    correctAnswer();
    score = score + 1;
  } else {
    incorrectAnswer();
  }

  console.log(parseInt(scoreCount.innerText));
  console.log(QUESTIONS.length);
  console.log(scoreCount.innerText);
  console.log(`${QUESTIONS.length}/10`);
  //! maybe just write out each area and add/remove the classlist for the dark mode. trigger with the same switch.
  // check to see if the score is "10/10" and if we have reached the last question
  if (scoreCount.innerText === `10/10`) {
    // if it is, then display the winning page
    winningPage();
  } else if (
    scoreCount.innerText !== `10/10` &&
    cardCounter.innerText === `10/10`
  ) {
    losingPage();
    console.log(`You've lost`);
  }
}

//?---------- Next Question Function ----------*/
function nextQuestion() {
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
function previousQuestion() {
  if (i !== 0) {
    // reset the page styling
    defaultStyle();
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

function showHint() {
  flipCardInner.style.transform = 'rotateX(180deg)';
}
function hideHint() {
  flipCardInner.style.transform = 'rotateX(0deg)';
}
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
function losingMessage() {
  // create and append a losing message
  let losingDiv = document.createElement('div');
  losingDiv.setAttribute('id', 'bad-job');
  formEl.appendChild(losingDiv);
  let losingMessage = document.createElement('p');
  losingMessage.innerText = `Better luck next time!`;
  losingDiv.appendChild(losingMessage);
}

function defaultStyle() {
  // remove radio button selection
  for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].checked = false;
  }
  // check answer button color
  checkAnswerBtn.style.backgroundColor = '#bce8c1';
  // enable the check answer button
  checkAnswerBtn.disabled = false;
  // background color to white
  document.body.style.backgroundColor = 'white';
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
}

function correctAnswer() {
  checkAnswerBtn.style.backgroundColor = 'gray';
  // HELPER: https://stackoverflow.com/questions/2323948/disabling-the-button-after-once-click
  checkAnswerBtn.disabled = true;
  document.body.style.backgroundColor = '#BCE8C1';
  goodJobMessage();
}
function incorrectAnswer() {
  checkAnswerBtn.style.backgroundColor = 'gray';
  checkAnswerBtn.disabled = 'disabled';
  document.body.style.backgroundColor = '#F1BCBC';
  losingMessage();
}

function changeTheme(cssFile, cssLinkIndex) {
  // https://stackoverflow.com/questions/19844545/replacing-css-file-on-the-fly-and-apply-the-new-style-to-the-page
  // TYLER also helped out on this portion as well.
  isDarkTheme = !isDarkTheme;
  if (isDarkTheme) {
    // default link
    let defaultLink = document.getElementsByTagName('link').item(cssLinkIndex);

    let darkCSS = document.createElement('link');
    darkCSS.setAttribute('rel', 'stylesheet');
    darkCSS.setAttribute('href', './css/dark.css');

    document
      .getElementsByTagName('head')
      .item(cssLinkIndex)
      .replaceChild(darkCSS, defaultLink);
  } else {
    //* switch everything around from above...
    // default link
    let defaultLink = document.getElementsByTagName('link').item(cssLinkIndex);

    let defaultCSS = document.createElement('link');
    defaultCSS.setAttribute('rel', 'stylesheet');
    defaultCSS.setAttribute('href', './css/style.css');

    document
      .getElementsByTagName('head')
      .item(cssLinkIndex)
      .replaceChild(defaultCSS, defaultLink);
  }
}
