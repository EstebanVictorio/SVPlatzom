# Platzom

Platzom is a language invented for the Javascript course on Platzi

## Language Description

- If word complies with: ending in 'ar', remove the 'ar,Ar,aR or AR' ending
- If word complies with: beginning with 'z', add 'pe' as the new word's ending
- If word complies with: a length of 10+ characters, split in two and add a hyphen between the parts
- If word complies with: being a palindrome, intercalate the word by a mixture of upper and lower case letters.


## Install

```
npm install platzom
```


## Usage


```javascript
import platzom from 'platzom'
platzom('sometemos')
```