/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

//listener to start the game when the button is clicked
document.getElementById('btn__reset').addEventListener('click', () => {
  game = new Game()
  game.startGame()
})

//listener to pick up input on the on-screen keyboard
document.getElementById("qwerty").addEventListener("click", e =>{
    if (e.target.tagName === "BUTTON"){
        game.handleInteraction(e.target)
    }
});