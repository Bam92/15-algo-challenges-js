var assert = require('assert');
var reverseString =  require('./index');

describe('reverseString App', function() {
    describe('reverseString("hello")', function() {
        it('should return a string', function() {
            assert.equal(typeof reverseString("hello"), 'string')
        });        
    });

    describe(' reverseString("hello")', function() {
        it('should become olleh', function() {
            assert.equal(reverseString("hello"), 'olleh')
        });        
    });

    describe('reverseString("Howdy")', function() {
        it('should become ydwoH', function() {
            assert.equal(reverseString('Howdy'), 'ydwoH')
        });        
    });

    describe('reverseString("Greetings from Earth")', function() {
        it('should become htraE morf sgniteerG', function() {
            assert.equal(reverseString('Greetings from Earth'), 'htraE morf sgniteerG')
        });        
    });     
});