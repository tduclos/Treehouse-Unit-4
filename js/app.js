/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/* This section contains all the testing functions I used. You probably don't need to mess with these.

Testing phrase selection 

const game = new Game();

game.phrases.forEach((phrase, index) => {
    console.log(`Phrase ${index}: ${phrase.phrase}`)
});

Testing random phrases

console.log(game.getRandomPhrase());

Displaying random phrases

const randomPhrase = game.getRandomPhrase();
const phrase = new Phrase(randomPhrase);
phrase.addPhraseToDisplay();

Starting the game

game.startGame();
*/

let game;

//listener to start the game when the button is clicked
document.getElementById('btn__reset').addEventListener('click', () => {
  game = new Game()
  game.startGame()
})