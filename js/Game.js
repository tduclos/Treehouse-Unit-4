/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game{
    constructor(){
        this.missed = 0;
        this.phrases = [
            {phrase: 'the cake is a lie'},
            {phrase: 'its a secret to everybody'},
            {phrase: 'i am error'},
            {phrase: 'your princess is in another castle'},
            {phrase: 'a slime draws near'}];
        this.activePhrase = null;
    }; 
    
/* getRandomPhrase()
* Selects a phrase from the 'phrases' array
* @return {String} The phrase to be used */
    
    getRandomPhrase(){
        const index = Math.floor(Math.random() * this.phrases.length);
        console.log(index);
        return this.phrases[index].phrase;
    };
    
/* startGame()
* Removes the overlay div and displays a random phrase for the user to play with */
    
    startGame(){
        document.getElementById("overlay").style.display = "none"
        this.activePhrase = new Phrase(this.getRandomPhrase(this.phrases))
        this.activePhrase.addPhraseToDisplay()
    };
    
/* checkForWin()
* Checks for a winning move
* @param {boolean} True if the game is won, false if not */    
    
    checkForWin(){
        
        //Shoutouts to fellow Treehouse student Frank Suchwala for cutting my monstrosity of a function into a single line!
        return document.getElementsByClassName("hide letter").length === 0;
       
    };
    
 /* gameOver()
* displays game over message depending on whether the player won or lost, then resets the game
* @param {boolean} win - whether or not the user has won the game */ 
    
    gameOver(win){
        
        if (win) {
            document.getElementById("game-over-message").innerHTML = 'Nice work!'
            document.getElementById("overlay").className = "win"
            document.getElementById("overlay").style.display = ""
        } else {
            document.getElementById("game-over-message").innerHTML = "Sorry, try again!"
            document.getElementById("overlay").className = "lose"
            document.getElementById("overlay").style.display = ""
        }
        
        this.reset();
           
  }
    
/* removeLife()
* Adds 1 to 'missed' property
* removes a heart from the UI
* ends game if player is out of hearts */  
    
    removeLife(){
        
        const tries = document.querySelectorAll(".tries");
        tries[this.missed].firstElementChild.setAttribute("src","images/lostHeart.png");
        this.missed += 1;
        if(this.missed == 5) {
            console.log('game over!');
            this.gameOver(this.checkForWin());
        }
        
    };
  

    
/* handleInteraction(button)
*  Handles clicks on the on-screen keyboard
*  @param (HTMLButtonElement) button - the key the user clicked on*/ 
    
    handleInteraction(button) {

        let letter = button.innerHTML;
        button.disabled = true;
       
        if(this.activePhrase.checkLetter(letter)){
            button.className = "chosen";
            this.activePhrase.showMatchedLetter(letter);
            if(this.checkForWin()) {
                this.gameOver(true);
            }
        } else { //else if the letter is is not the activePhrase
            button.className = "wrong"
            this.removeLife()
        }

    }
    
/* reset()
* Resets the game so the user can play again */ 
    
    reset(){
        
        this.activePhrase = null;                                                                               //reset chosen phrase
        const phraseList = document.getElementById("phrase").firstElementChild;
        phraseList.innerHTML = '';                                                                              //reset all lis out of the ul
        
        this.missed = 0;                                                                                        //reset internal 'missed' count
        for(let i = 0; i < document.querySelectorAll(".tries").length ; i+=1 ) {
            document.querySelectorAll(".tries")[i].firstElementChild.setAttribute("src","images/liveHeart.png") //reset hearts
        }
        
        const keys = document.querySelectorAll('.keyrow button');                                               //reset keys to original state
        keys.forEach(key => {
            key.className = "key";
            key.disabled = false;
        });
        
    };
        
};
    
