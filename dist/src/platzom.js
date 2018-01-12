'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = platzom;
var leadings = ['ar', 'Ar', 'AR', 'aR'];
//If word complies with this, remove the 'ar,Ar,aR or AR' ending
var isRuleOneCompliant = function isRuleOneCompliant(word) {
    return leadings.indexOf(word.substring(word.length - 2, word.length)) > -1;
};
//If word complies with this, add 'pe' as the new word's ending
var isRuleTwoCompliant = function isRuleTwoCompliant(word) {
    return word[0] == 'z' || word[0] == 'Z';
};
//If word complies with this, split in two and add a hyphen between the parts
var isRuleThreeCompliant = function isRuleThreeCompliant(word) {
    return word.length >= 10;
};
//If word complies with this, intercalate the word by a mixture of upper and lower case letters.
var isRuleFourCompliant = function isRuleFourCompliant(word) {
    return word == word.split('').reverse().join('');
};

var getUpdateByRuleOne = function getUpdateByRuleOne(word) {
    return word.substring(0, word.length - 2);
};
var getUpdateByRuleTwo = function getUpdateByRuleTwo(word) {
    return word + 'pe';
};
var getUpdateByRuleThree = function getUpdateByRuleThree(word) {
    var trailing = word.substring(0, word.length / 2);
    var leading = word.replace(trailing, '');
    return trailing + '-' + leading;
};

var getUpdateByRuleFour = function getUpdateByRuleFour(word) {
    var result = '';
    for (var i = 0; i < word.length; i++) {
        if (i % 2 == 0) result += word[i].toUpperCase();else result += word[i].toLowerCase();
    }
    return result;
};

function platzom(str) {
    return platzomArr(str);
}

var platzomArr = function platzomArr(word) {
    var result = word;
    if (isRuleOneCompliant(result)) result = getUpdateByRuleOne(result);
    if (isRuleTwoCompliant(result)) result = getUpdateByRuleTwo(result);
    if (isRuleThreeCompliant(result)) result = getUpdateByRuleThree(result);
    if (isRuleFourCompliant(result)) result = getUpdateByRuleFour(result);
    return result;
};