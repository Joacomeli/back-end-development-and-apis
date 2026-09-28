const { __esModule } = require("@babel/generator");

function getUpperCase(word) {
    return word.toUpperCase();
}
function getLowerCase(word){
    return word.toLowerCase();
}
function getSentenceCase(sentenceCase){
    const words = sentenceCase.split(" ");
    for(let i= 0; i < words.length; i++){
        if(i == 0){
            words[0] = getUpperCase(words[0].charAt(0)) + getLowerCase(words[0].slice(1));
        } else {
            words[i] = getLowerCase(words[i]);
        }
    }
    return words.join(" ");
}
function getProperCase(sentenceCase){
    const words = sentenceCase.split(" ");
    for(let i= 0; i < words.length; i++){
        words[i] = getUpperCase(words[i].charAt(0)) + getLowerCase(words[i].slice(1));
    }
    return words.join(" ");
}

module.exports = {getUpperCase, getLowerCase, getSentenceCase, getProperCase};