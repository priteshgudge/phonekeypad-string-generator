const triePkg = require("../core/trie");
const generateCombinationsPkg = require("../core/generateCombinations");
const dataPkg = require("../data/processData");
const fs = require('fs');
const serialize = require('node-serialize');

let trieRootRef = null;

const generateTrie = () => {
    let objectMap = dataPkg.numberWordsMapsArrayMap;

    let trieRoot = new triePkg.Trie();
    const totalObjects = Object.keys(objectMap).length;
    let counter = 0;
    for (let [key,value] of Object.entries(objectMap)) {
        if(counter%1000 === 0){
            console.log(`Generating ${counter+1} out of ${totalObjects}`)
        }
        trieRoot.add(key, value);
        counter++;
    }
    return trieRoot;

};

const setupApp = () => {
    // Equivalent to setting up DB connection/DAO maybe
    console.log("Generating Trie");
    trieRootRef = generateTrie();
    console.log("Trie Generation Complete");

};

const findArrayOfMatchingStrings = (inputString) => {
    try {
        const outputStringsArray = generateCombinationsPkg.executeGenerateCombinations(trieRootRef, inputString, []);
        return ({"objects":outputStringsArray});
    }catch (err){
        console.log(err);
        return ({"message": "Some Error Occurred while processing the request"});
    }
};

module.exports = {
    setupApp: setupApp,
    findArrayOfMatchingStrings: findArrayOfMatchingStrings
};



