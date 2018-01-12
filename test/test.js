const expect = require('chai').expect;
const platzom = require('..').default;



describe('#platzom',function(){
    it('- If word complies with: ending in \'ar\', ' +
        'remove the \'ar,Ar,aR or AR\' ending',function () {
        const translation = platzom('Programar');
        expect(translation).to.equal("Program");
    });

    it('- If word complies with: beginning with \'z\', add \'pe\' ' +
        'as the new word\'s ending',function () {
        const translation = platzom('Zorro');
        expect(translation).to.equal("Zorrope");
    });

    it('- If word complies with: a length of 10+ characters, ' +
        'split in two and add a hyphen between the parts',function () {
        const translation = platzom('Consultorio');
        expect(translation).to.equal("Consu-ltorio");
    });

    it('- If word complies with: being a palindrome, intercalate the word ' +
        'by a mixture of upper and lower case letters.',function () {
        const translation = platzom('sometemos');
        expect(translation).to.equal("SoMeTeMoS");
    });
});