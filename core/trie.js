const dataProcessor = require('../data/processData.js');

// Trie Node implementation.
class TrieNode {
    constructor(char) {
        this.char = char;
        this.children = [];
        //# Is it the last character of the word.`
        this.wordFinished = false;
        // How many times this character appeared in the addition process
        this.counter = 1;
        this.keyStrList = [];
    }
}

// Trie Implementation
class Trie{
    constructor(){
        this.rootNode = new TrieNode('*');
    }
    //Adding a word in the trie structure
    add(keyStr, wordlList){
        let node = this.rootNode;
        for(let char of keyStr.split("")) {
            let foundInChild = false;
            //Search for char in children of current node
            for (let child of node.children) {
                if (child.char === char) {
                    // And point the node to the child that contains this char
                    node = child;
                    foundInChild = true;
                    break;
                }
            }
            //We did not find it so add a new chlid
            if (!foundInChild) {
                let newNode = new TrieNode(char);
                node.children.push(newNode);
                // And then point node to the new child
                node = newNode;
            }
        }
            // Word is done Marked ended
            node.wordFinished = true;
            node.keyStrList.push(...wordlList);
    }

    //Check and Return
    // 1. If the prefix exists in any of the words we added so far
    // 2. What words of alpha in prefix location
    findPrefix(prefix){
        let node = this.rootNode;
        // If the root node has no children, then return empty.
        // Because it means that we are tying to search an empty trie
        if (this.rootNode.children.length <= 0){
            return [];
        }

        for(let char of prefix.split('')){
            let charNotFound = true;
            // Search through all the children of the present node
            for(let child of node.children){
                if(child.char === char){
                    // We found the char existing in the child
                    charNotFound = false;
                    // Assign node as the child containing the char and break
                    node = child;
                    break;
                }
            }
            if (charNotFound){
                return [];
            }
        }
        // If we are here, we have found the prefix. Return the node word list at this prefix
        return node.keyStrList;
    }

}



module.exports = {
    TrieNode: TrieNode,
    Trie:Trie
};
