var assert = require('assert');
var convertToF =  require('./index');

describe('Cel2Fah App', function() {
    describe('convertToF(0)', function() {
        it('should return a number', function() {
            assert.equal(typeof convertToF(0), 'number')
        });        
    });

    describe(' convertToF(-30)', function() {
        it('should return a value of -22', function() {
            assert.equal(convertToF(-30), -22)
        });        
    });

    describe('convertToF(-10)', function() {
        it('should return a value of 14', function() {
            assert.equal(convertToF(-10), 14)
        });        
    });

    describe('convertToF(0)', function() {
        it('should return a value of 32', function() {
            assert.equal(convertToF(0), 32)
        });        
    });

    describe('convertToF(20)', function() {
        it('should return a value of 68', function() {
            assert.equal(convertToF(20), 68)
        });        
    });

    describe('convertToF(30)', function() {
        it('should return a value of 86', function() {
            assert.equal(convertToF(30), 86)
        });        
    });
    
});