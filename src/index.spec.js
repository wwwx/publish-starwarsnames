var expect = require("chai").expect
var starWars = require('./index')
describe('starwars-names', function() {
    
    describe('all', function() {
        it('should be an array of strings', function() {
            expect(starWars.all).to.satisfy(isArrayOfStrings);
            function isArrayOfStrings(array) {
                return array.every(function(item) {
                    return  typeof item === 'string';
                })
            }
        })

        it('shoud contain `Visas Marr` ', function() {
            expect(starWars.all).to.include('Visas Marr')
        })
    })

    describe('random', function() {
        it('should return a random item from the starWars.all', function() {
            var randomItem = starWars.random()
            expect(starWars.all).to.include(randomItem)
        })
    })

})