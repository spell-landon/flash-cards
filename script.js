/*----- constants -----*/
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
  `1981`,
  `Fender Telecaster`,
  `Conroe, TX`,
  `Porto, Portugal`,
  `$6.01 Million`,
  `Jimi Hendrix`,
  `90,000`,
];
let i = 0;
/*----- cached element references -----*/
const startBtn = document.querySelector('.start-game-btn');
const startPageEl = document.querySelector('.game-start-page');
const scoreSection = document.querySelector('.score-section');
const gameBoardSection = document.querySelector('.game-board');
const cardCounter = document.querySelector('.card-counter');
const formEl = document.querySelector('form');
const cardTextQuestionEl = document.querySelector('#card-text-question');
const cardTextAnswerEl = document.querySelector('#card-text-answer');
const nextArrow = document.querySelector('.fa-arrow-right');
const prevArrow = document.querySelector('.fa-arrow-left');
const toggleTheme = document.querySelector('#toggle');
const restartBtn = document.querySelector('.restart');
const hintBtn = document.querySelector('.hint-button');
const flipCardInner = document.querySelector('.flip-card-inner');
const hideHintBtn = document.querySelector('.hide-hint-button');

/*----- event listeners -----*/
startBtn.addEventListener('click', startGame);
formEl.addEventListener('submit', checkAnswer);
nextArrow.addEventListener('click', nextQuestion);
prevArrow.addEventListener('click', previousQuestion);
toggleTheme.addEventListener('click', changeTheme);
restartBtn.addEventListener('click', init);
hintBtn.addEventListener('click', showHint);
hideHintBtn.addEventListener('click', hideHint);

/*----- functions -----*/
function init() {
  i = 0;
  scoreSection.classList.add('hidden');
  gameBoardSection.classList.add('hidden');
  startPageEl.classList.remove('hidden');
  cardTextQuestionEl.innerText = QUESTIONS[i];
}
init();
function startGame() {
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
}

function checkAnswer(event) {
  event.preventDefault();
  console.log('Youre checking the answer');
}
function nextQuestion() {
  if (i < 9) {
    i++;
    cardTextQuestionEl.innerText = QUESTIONS[i];
    cardTextAnswerEl.innerText = ANSWERS[i];
    cardCounter.innerText = `${i + 1}/10`;
    hideHint();
  }
}
function previousQuestion() {
  if (i !== 0) {
    i--;
    cardTextQuestionEl.innerText = QUESTIONS[i];
    cardTextAnswerEl.innerText = ANSWERS[i];
    cardCounter.innerText = `${i + 1}/10`;
    hideHint();
  }
}
function changeTheme() {
  document.body.style.backgroundColor = 'gray';
}
function showHint() {
  flipCardInner.style.transform = 'rotateX(180deg)';
}
function hideHint() {
  flipCardInner.style.transform = 'rotateX(0deg)';
}
