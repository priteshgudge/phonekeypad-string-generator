const triePkg = require('../core/trie');
const expect = require('chai').expect;
const assert = require('chai').assert;

describe('Add retrieve from Trie', function() {
    // before('Setting up the Trie', function(done){
    //
    //
    //     done();
    //
    // });
    before('Setup before Each', function(){
        let trieRef = new triePkg.Trie();
        this.trieRef = trieRef;
        this.trieRef.add("2263",["acme", "acne", "band", "bane", "came", "cane"]);
        this.trieRef.add("2263243", ["bandage"]);
        this.trieRef.add("2263437", ["bandier", "candies"]);
        this.trieRef.add("2263943847", ["bandwidths"]);
        this.trieRef.add("2263943847", ["bandwidths"]);
        this.trieRef.add("2433",["aged", "aide", "bide", "chef"]);

        let trieEmpty = new triePkg.Trie();
        this.trieEmpty = trieEmpty;
    });

    context('Empty Trie', function() {
        it('it should return empty List', function() {
            expect(this.trieEmpty.findPrefix('12345').length).to.equal(0)
        })
    });

    context('Prefix match 2263', function() {
        it('It should return predefined list', function() {
            // expect(this.trieEmpty.findPrefix('2263').length).to.equal(0)
            let result = this.trieRef.findPrefix('2263');
            assert.isArray(result, 'is array of numbers');
            assert.include(result, "acne", 'array contains acne');
            assert.include(result,"came", "array contains came");
            assert.lengthOf(result, 6, 'array contains 5 numbers');
        })
    });

});
