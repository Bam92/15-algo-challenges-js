var assert = require('assert');
var truncateString =  require('./index');

describe('truncateString App', function() {
    describe('truncateString(“A-tisket a-tasket A green and yellow basket”, 8)', function() {
        it('should return "A-tisket…"', function() {
            assert.equal(truncateString("A-tisket a-tasket A green and yellow basket", 8), 'A-tisket...')
        });        
    });

    describe('truncateString(“Peter Piper picked a peck of pickled peppers”, 11)', function() {
        it('should return "Peter Piper…"', function() {
            assert.equal(truncateString("Peter Piper picked a peck of pickled peppers", 11), 'Peter Piper...')
        });        
    });

    describe('truncateString(“A-tisket a-tasket A green and yellow basket”, "A-tisket a-tasket A green and yellow basket”.length)', function() {
        it('should return "A-tisket a-tasket A green and yellow basket"', function() {
            assert.equal(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length), 'A-tisket a-tasket A green and yellow basket')
        });        
    });

    describe('truncateString(“A-tisket a-tasket A green and yellow basket”, "A-tisket a-tasket A green and yellow basket”.length + 2)', function() {
        it('should return "A-tisket a-tasket A green and yellow basket"', function() {
            assert.equal(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2), 'A-tisket a-tasket A green and yellow basket')
        });        
    });

    describe('truncateString(“A-”, 1)', function() {
        it('should return "A..."', function() {
            assert.equal(truncateString("A-", 1), 'A...')
        });        
    });

    describe('truncateString(“Absolutely Longer”, 2)', function() {
        it('should return "Ab…"', function() {
            assert.equal(truncateString("Absolutely Longer", 2), 'Ab...')
        });        
    });
});