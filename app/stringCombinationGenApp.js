const triePkg = require("../core/trie");
const generateCombinationsPkg = require("../core/generateCombinations");
const dataPkg = require("../data/processData");

let trieRootRef = null;

const generateTrie = () => {
    let objectMap = dataPkg.numberWordsMapsArrayMap;

    let trieRoot = new triePkg.Trie();
    for (let [key,value] of Object.entries(objectMap)) {
        trieRoot.add(key, value);
    }
    return trieRoot;

};

const setupApp = () => {
    // Equivalent to setting up DB connection/DAO maybe

    trieRootRef = generateTrie();


};

module.exports = {
    setupApp:setupApp
};



