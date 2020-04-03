

const generateCombination = (trieRoot, inputString) => {
    let validStringList = [];
    for(let j = 0; j< inputString.length; j++){
        let prefixStr = inputString.substring(0, j+1);
        let foundStrings = trieRoot.findPrefix(prefixStr);
        if (foundStrings.length > 0){
            validStringList.push({strings: foundStrings, lengthValue: foundStrings[0].length })
        }

    }
    return validStringList;
};

const findAllWords = (trieRoot, stringVal, validStringsTillNow, resultSet, firstRun=true) => {

    let newValidStringsTillNow = [];
    const validStringList = generateCombination(trieRoot, stringVal);
    for(let v of validStringList){
        for(let word of v.strings){
            if(firstRun){
                newValidStringsTillNow.push(word);
                resultSet[word] = 1;
            }else{
                for(let valString of validStringsTillNow){
                    let preparedWord = valString + "-" + word;
                    newValidStringsTillNow.push(preparedWord);
                    resultSet[preparedWord] = 1;
                }
            }
        }
        findAllWords(trieRoot, stringVal.substring(v.lengthValue, stringVal.length),newValidStringsTillNow, resultSet, false);
    }
    return resultSet;

};

const find2 = (trieRoot, stringVal, listOfSkipCharsList=[]) => {
    let stringsArray = [];
    if (listOfSkipCharsList && listOfSkipCharsList.length > 0){
        for (let skipList of listOfSkipCharsList){
            let tmpString = "";
            for(let i=0; i<stringVal.length; i++){
                if(!skipList.includes(i)){
                    tmpString = tmpString + stringVal.substring(i,i+1)
                }
            }
            stringsArray.push(tmpString);
        }
    }else{
        stringsArray = [stringVal];
    }

    let resultList = [];

    for(let s of stringsArray){
        let resultSet = findAllWords(trieRoot, s,[],{}, true);

        for(let ele of Object.keys(resultSet)){
            let w = ele.split("-");

            if ((w.join("")).length === s.length){
                resultList.push(ele)
            }
        }
    }
    return resultList;
};

const getSkipLists = (stringLength, arr, number, result = []) => {
    for(let x = 0; x <stringLength; x++){
        if (number === 0){
            if( x < stringLength){
                arr[0] = x;
            }
        }else{
            arr[number] = arr[number - 1] + 2 + x
        }

        if(number + 1 < arr.length){
            getSkipLists(stringLength, arr, number + 1, result)
        }
        result.push([arr])
    }
    return result;
};

const getAllListsOfAllSkipChars = (stringVal, strLen, ele) =>{
    let size = ele;
    let arrayObj = [] ;
    for(let i =0 ; i < size; i++){
        arrayObj[i] = 0;
    }
    //while(size--) arrayObj[size] = 0;

    let result = getSkipLists(strLen, arrayObj, 0, []);
    let skipList = [];
    for(let r of result){
        if (r[r.length -1] < stringVal.length){
            skipList.push(r)
        }
    }
    return skipList
};

const executeGenerateCombinations =  (trieRoot, stringVal) =>{
    let strLength = stringVal.length;
    let result = find2(trieRoot, stringVal, []);

    if(result && result.length > 0){
        return result
    } else{
        for(let x = 1; x<strLength; x++){
            result = find2(trieRoot, stringVal, getAllListsOfAllSkipChars(stringVal, strLength -x, x));
        }
        return result;
    }
};

// const find = (trieRoot, stringVal, skipCharList=[]) => {
//     let stringsArray = [];
//     if (skipCharList && skipCharList.length > 0){
//         while(true){
//             let tmpString = "";
//             for(let i=0; i<stringVal.length; i++){
//                 if(!skipCharList.includes(i)){
//                     tmpString = tmpString + stringVal.substring(i,i+1)
//                 }
//             }
//             stringsArray.push(tmpString);
//             for(let j=0; j<skipCharList.length;j++){
//                 skipCharList[j] = skipCharList[j] + 1
//             }
//
//             if (skipCharList[0] >= stringVal.length){
//                 break
//             }
//             skipCharList.reverse()
//         }
//     }else{
//         stringsArray = [stringVal];
//     }
//
//     let resultList = [];
//
//     for(let s of stringsArray){
//         let resultSet = findAllWords(trieRoot, s,[],{}, true);
//
//         for(let ele of Object.keys(resultSet)){
//             let w = ele.split("-");
//
//             if ((w.join("")).length === s.length){
//                 resultList.push(ele)
//             }
//         }
//     }
//
//     if (resultList.length > 0){
//         return resultList
//     }else{
//         let skipList = [0];
//         for(let i=0; i< skipCharList.length; i++){
//             skipList.push((i+1)*2)
//         }
//         if(skipList.length >= Math.floor((stringVal.length+1)/2)){
//             return []
//         }
//         resultList = find(trieRoot, stringVal, skipList)
//     }
//     return resultList
// };

module.exports = {
    executeGenerateCombinations: executeGenerateCombinations
};
