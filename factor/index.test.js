var assert = require('assert');
var factorialize =  require('./index');

describe('factorialize App', function() {
    describe('factorialize(5)', function() {
        it('should return a number', function() {
            assert.equal(typeof factorialize(5), 'number')
        });        
    });

    describe(' factorialize(5)', function() {
        it('should return 120', function() {
            assert.equal(factorialize(5), 120)
        });        
    });

    describe('factorialize(10)', function() {
        it('should return 3628800', function() {
            assert.equal(factorialize(10), 3628800)
        });        
    });

    describe('factorialize(20)', function() {
        it('should return 2432902008176640000', function() {
            assert.equal(factorialize(20), 2432902008176640000)
        });        
    });    
    
    describe('factorialize(0)', function() {
        it('should return 1', function() {
            assert.equal(factorialize(0), 1)
        });        
    }); 
});