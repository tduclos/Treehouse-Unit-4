/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    };
    
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
};