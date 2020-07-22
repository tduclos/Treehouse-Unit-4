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
    }    
};