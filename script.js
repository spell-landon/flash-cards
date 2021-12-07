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

/*----- event listeners -----*/
startBtn.addEventListener('click', startGame);

/*----- functions -----*/
function startGame() {
  // Hide the Start Page Section
  startPageEl.classList.add('hidden');
  // Show the Score Board
  scoreSection.classList.remove('hidden');
  // Show the gameplay section
  gameBoardSection.classList.remove('hidden');
  // Set the cardCounter innerText
  cardCounter.innerText = `1/10`;
  // Add the cardCounter to the game board section
  gameBoardSection.append(cardCounter);
  // Add a card to the game board section
  createCard_Buttons();
}

function createCard() {
  // create a div called card
  const card = document.createElement('div');
  // add the styling class of "card" to the div
  card.setAttribute('class', 'card');
  // create a 'p' element to contain the card text
  const cardTextEl = document.createElement('p');
  // append that text element to the card
  card.appendChild(cardTextEl);
  // add text styling to inner text on card
  cardTextEl.setAttribute('id', 'card-text');
  //* Finish the logic behind cycling through each question when the next button is clicked
  cardTextEl.innerText = QUESTIONS[0];
  // add card to the game board section
  return card;
}
function createArrowButton(direction) {
  // create a button for the previous button
  const arrowButton = document.createElement('button');
  // create an 'i' element to hold the font-awesome icon
  const fontAwesomeArrowIcon = document.createElement('i');
  // add the previous arrow attributes to 'i' element
  fontAwesomeArrowIcon.setAttribute('class', `fas fa-arrow-${direction}`);
  // add the id arrowButton to arrow
  arrowButton.setAttribute('id', 'arrowBtn');
  // attach the fontAwesomeArrowIcon to the arrowButton
  arrowButton.appendChild(fontAwesomeArrowIcon);
  // attach the arrowButton to the game section
  return arrowButton;
}
function createCard_Buttons() {
  // create section for the card and buttons on the game board
  const cardAndBtnSection = document.createElement('section');
  // append cardAndBtnSection to the game board
  gameBoardSection.append(cardAndBtnSection);
  // append the prev btn and create card functions
  cardAndBtnSection.append(createArrowButton(`left`));
  cardAndBtnSection.append(createCard());
  cardAndBtnSection.append(createArrowButton(`right`));
  // set attributes for the card and button section
  cardAndBtnSection.setAttribute('class', 'card-and-buttons');
}
function setQuestions() {
  // create a section for the questions
  const questionSection = document.createElement('section');
}
