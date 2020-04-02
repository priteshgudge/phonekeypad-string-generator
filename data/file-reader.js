
const fs = require('fs');
const wordArray = fs.readFileSync('./data/data_file.txt').toString().split("\n");


module.exports = {
  wordsArray: wordArray
};
