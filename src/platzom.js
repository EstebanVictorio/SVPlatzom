let leadings = ['ar','Ar','AR','aR'];
//If word complies with this, remove the 'ar,Ar,aR or AR' ending
const isRuleOneCompliant = (word) => leadings.indexOf(word.substring(word.length-2,word.length)) > -1;
//If word complies with this, add 'pe' as the new word's ending
const isRuleTwoCompliant = (word) => word[0] == `z` || word[0] == `Z`;
//If word complies with this, split in two and add a hyphen between the parts
const isRuleThreeCompliant = (word) => word.length >= 10;
//If word complies with this, intercalate the word by a mixture of upper and lower case letters.
const isRuleFourCompliant = (word) => word == word.split('').reverse().join('');

const getUpdateByRuleOne = (word) => word.substring(0,word.length-2);
const getUpdateByRuleTwo = (word) => word + 'pe';
const getUpdateByRuleThree = (word) =>
{
    var trailing = word.substring(0,(word.length/2));
    var leading = word.replace(trailing,'');
    return `${trailing}-${leading}`;
};

const getUpdateByRuleFour = (word) =>
{
    var result = '';
    for(var i = 0 ; i < word.length ; i++){
        if(i%2==0)
            result+= word[i].toUpperCase();
        else
            result+= word[i].toLowerCase();
    }
    return result;
};

export default function platzom (str){
return platzomArr(str);
}

const platzomArr =
    (word) =>
    {
        var result = word;
        if(isRuleOneCompliant(result))
            result = getUpdateByRuleOne(result);
        if(isRuleTwoCompliant(result))
            result = getUpdateByRuleTwo(result);
        if(isRuleThreeCompliant(result))
            result = getUpdateByRuleThree(result);
        if(isRuleFourCompliant(result))
            result = getUpdateByRuleFour(result);
        return result;
    };