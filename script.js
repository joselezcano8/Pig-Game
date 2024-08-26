'use strict';

/* // Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');

// Starting conditions
score0El.textContent =  0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;


//Funcyion to reset values
function reset() {
    score0El.textContent =  0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    diceEl.classList.add('hidden');

    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');

    playing = true;

}

//Function to change player
function changePlayer() {
    currentScore = 0;
    document.querySelector(`#current--${activePlayer}`).textContent= currentScore;

    activePlayer = activePlayer === 0 ? 1 : 0;

    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}


// Rolling dice functionality
btnRoll.addEventListener('click', function() {

    if (playing) {

        // Generating random dice roll
        const dice = Math.trunc(Math.random() * 6 + 1);

        // Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        // Chech for rolled 1: if true, swith to next player
        if (dice !== 1) {
            currentScore += dice;
            document.querySelector(`#current--${activePlayer}`).textContent= currentScore;
        }
        else {
            changePlayer();
        }
    }

})

// Hold button functionality
btnHold.addEventListener('click', function() {

    if (playing = true) {

        //Add current score to active player
        scores[activePlayer] += currentScore;
        document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];

        //Compare if score is 100
        if (scores[activePlayer] >= 100) {
            playing = false;
            diceEl.classList.add('hidden')
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            btnHold.disabled = true;
        }
        else {
            changePlayer();
        }
    }

})

// New Game
btnNew.addEventListener('click', reset); */










// Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


// Starting conditions
let score, activePlayer, currentScore, playing;

function init() {
    score = [0, 0];
    activePlayer = 0;
    currentScore = 0;
    playing = true;
    player0El.classList.add('player--active')
    player1El.classList.remove('player--active')
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    score0El.textContent = 0;
    score1El.textContent = 0;
    diceEl.classList.add('hidden');
};
init();

// Function to switch players
function switchPlayers() {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    activePlayer = activePlayer === 0 ? 1 : 0;

    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    
};

// Roll the dice
btnRoll.addEventListener('click', function() {

    if (playing) {

        // Create random dice number
        const dice = Math.trunc(Math.random() * 6 + 1);

        //Display the dice
        diceEl.src = `dice-${dice}.png`;
        diceEl.classList.remove('hidden');

        // If not 1, add the dice to the current score
        if(dice !== 1){
            currentScore +=  dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }
        // If 1, set the current score to 0 and switch players
        else{
            switchPlayers();
        }
    }
});

//Hold the score 
btnHold.addEventListener('click', function(){
    if (playing) {

        //Add current score to global score
        score[activePlayer] = score[activePlayer] + currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
        currentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        // If player reaches 100 points wins
        if (score[activePlayer] >= 100) {
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        }
        // Else: switch player
        else {
            switchPlayers();
        }

    }
});


//Reset the game
btnNew.addEventListener('click', init);