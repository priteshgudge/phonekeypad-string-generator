const appModule = require("../app/stringCombinationGenApp");
const expect = require('chai').expect;
const assert = require('chai').assert;

describe('Test API Layer scenarios', function() {
    before('Setup Before Run', function(){

        appModule.setupApp();
        this.combinationGenerator =  appModule.findArrayOfMatchingStrings;
        //const combinationGenerator = appModule.

    });

    context('Veriying for primary scenario 225563', function() {
        it('it should return [\n' +
            '        "a-all-me",\n' +
            '        "a-all-of",\n' +
            '        "ball-me",\n' +
            '        "call-me",\n' +
            '        "ball-of",\n' +
            '        "call-of"\n' +
            '    ]', function() {
            // expect(this.combinationGenerator("225563")[0]).to.equal("rode")
            const result = this.combinationGenerator("225563");
            const resultOptions = result.objects;
            assert.isArray(resultOptions, 'is array of numbers');
            assert.include(resultOptions, "a-all-me", 'a-all-me');
            assert.include(resultOptions, "a-all-of", 'a-all-of');
            assert.include(resultOptions, "ball-me", 'ball-me');
            assert.include(resultOptions, "call-me", 'call-me');
            assert.include(resultOptions, "ball-of", 'ball-of');
            assert.include(resultOptions, "call-of", 'call-of');
            //assert.include(resultOptions, "", '');

        })
    });

    context('Veriying for skipping scenario 1(primary) 7633', function() {
        it('it should return ["rode"]', function() {
            const result = this.combinationGenerator("7633");
            const resultOptions = result.objects;
            assert.isArray(resultOptions, 'is array of numbers');
            assert.include(resultOptions, "rode", 'rode');
            expect(resultOptions.length).to.equal(1);
        })
    });

    context('Veriying for skipping scenario 2 1716313', function() {
        it('it should return ["rode"]', function() {
            const result = this.combinationGenerator("1716313");
            const resultOptions = result.objects;
            assert.isArray(resultOptions, 'is array of numbers');
            assert.include(resultOptions, "rode", 'rode');
            expect(resultOptions.length).to.equal(1);
        })
    });

    context('Veriying for skipping scenario 3 17161313', function() {
        it('it should return ["rode"]', function() {
            const result = this.combinationGenerator("17161313");
            const resultOptions = result.objects;
            assert.isArray(resultOptions, 'is array of numbers');
            assert.include(resultOptions, "rode", 'rode');
            expect(resultOptions.length).to.equal(1);
        })
    });

    context('Veriying for skipping scenario 4 21255613', function() {
        it('it should return a-all-me...', function() {
            const result = this.combinationGenerator("21255613");
            const resultOptions = result.objects;
            assert.isArray(resultOptions, 'is array of numbers');
            assert.include(resultOptions, "a-all-me", 'a-all-me');
            assert.include(resultOptions, "a-all-of", 'a-all-of');
            assert.include(resultOptions, "ball-me", 'ball-me');
            assert.include(resultOptions, "call-me", 'call-me');
            assert.include(resultOptions, "ball-of", 'ball-of');
            assert.include(resultOptions, "call-of", 'call-of');
            expect(resultOptions.length).to.equal(6);
        })
    });

    context('Veriying for scenario 6 5613', function() {
        it('it should return ["me","of"]', function() {
            const result = this.combinationGenerator("5613");
            const resultOptions = result.objects;
            assert.isArray(resultOptions, 'is array of numbers');
            assert.include(resultOptions, "me", 'me');
            assert.include(resultOptions, "of", 'of');
            expect(resultOptions.length).to.equal(2);
        })
    });

    context('Veriying for scenario 7 1163', function() {
        it('it should return empty []', function() {
            const result = this.combinationGenerator("1163");
            const resultOptions = result.objects;
            assert.isArray(resultOptions, 'is array of numbers');
            expect(resultOptions.length).to.equal(0)
        })
    });

    context('Veriying for scenario 8 5623', function() {
        it('it should return  [lobe....]', function() {
            const result = this.combinationGenerator("5623");
            const resultOptions = result.objects;
            assert.isArray(resultOptions, 'is array of numbers');
            assert.include(resultOptions, "lobe", 'lobe');
            assert.include(resultOptions, "loaf", 'loaf');
            assert.include(resultOptions, "load", 'load');
        })
    });

});
