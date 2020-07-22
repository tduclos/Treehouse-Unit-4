/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    };
    
/* addPhraseToDisplay()
* adds every individual char in the given string into separate li objects and loads them into the ul for play*/ 
    
    addPhraseToDisplay(){
        
        const phraseList = document.getElementById("phrase").firstElementChild;
        const isSpace = /\s/;
        for(let i=0; i< this.phrase.length; i++){
            let char = document.createElement('li');
            if (isSpace.test(this.phrase[i])){
                char.className = 'space';
            }else{
              char.className = `hide letter ${this.phrase[i]}`;
              char.innerHTML = this.phrase[i];
            };
            phraseList.appendChild(char);
        };
        
    };
    
/* checkLetter(letter)
* checks if the passed letter is in the phrase
* @param {string} letter - letter to be checked */ 
    
    checkLetter(letter){
        
        if(this.phrase.includes(letter)){
            return true;
        } else {
            return false;
        };
        
    };
    
/* showMatchedLetter(letter)
* displays a matched letter on screen
* @param {string} letter - letter to be displayed */ 
    
    showMatchedLetter(letter){
        
        let matchedLetters = document.getElementsByClassName(`hide letter ${letter}`);
        let matchedLettersArray = [...matchedLetters];
        matchedLettersArray.forEach(match => match.className = match.className.replace(/hide/,'show'));
        
    };
};