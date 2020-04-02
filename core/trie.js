const dataProcessor = require('../core/processData.js');


class TrieNode {
    constructor(char) {
        this.char = char;
        this.children = [];
        //# Is it the last character of the word.`
        this.word_finished = false;
        // How many times this character appeared in the addition process
        this.counter = 1;
        this.wordList = [];
    }
}

class Trie{
    constructor(){
        this.rootNode = TrieNode('*');
    }
    //Adding a word in the trie structure
    add(keyStr, wordList){
        let node = this.rootNode;
        keyStr.forEach(
            {

            }
        )

    }

}
