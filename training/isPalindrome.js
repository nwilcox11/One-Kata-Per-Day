const assert = require('assert');

/**
 * is a string a palindrome?
 * a word, phrase, or sequence that reads the same backward as forward
 * **/

/** start at each end and check each char 
 * O(n) **/
function isPalindrome(string) {
    const normalized = string.replace(/\s/g, '').toLowerCase(); // removes casing and spaces
    let start = 0;
    let end = normalized.length - 1;

    while(start < end) {
        if (normalized[start] !== normalized[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

assert.equal(isPalindrome('racecar'), true);
assert.equal(isPalindrome('madam'), true);
assert.equal(isPalindrome('civic'), true);
assert.equal(isPalindrome('nick'), false);
assert.equal(isPalindrome('wnickw'), false);
assert.equal(isPalindrome('Al lets Della call Ed Stella'), true);
assert.equal(isPalindrome('Ah Satan sees Natasha'), true);

/**
 * recursive palindrome
 * **/

function recursivePalindrome(string) {
    if (string.length <= 1) {
        return true
    }
    string = string.replace(/\s/g, '').toLowerCase();
    /** check first and last characters **/
    if (string.slice(0, 1) === string.slice(-1)) {
        /** return middle characters **/
        return recursivePalindrome(string.slice(1, -1))
    }
    return false;
}   
assert.equal(recursivePalindrome('racecar'), true);
assert.equal(recursivePalindrome('madam'), true);
assert.equal(recursivePalindrome('civic'), true);
assert.equal(recursivePalindrome('nick'), false);
assert.equal(recursivePalindrome('wnickw'), false);
assert.equal(recursivePalindrome('Al lets Della call Ed Stella'), true);
assert.equal(recursivePalindrome('Ah Satan sees Natasha'), true);

 /**
  * O(n/2)
  * **/

function halfIteration(string) {
    string = string.replace(/\s/g, '').toLowerCase();
    /** iterate through half of the characters **/
    let stop = Math.floor(string.length / 2);
    for(let i = 0; i < stop; i++) {
        /** find the second half of the chars by subtracting current iterator by string length **/
        if (string[i] !== string[(string.length - 1) - i]) {
            return false;
        }
    }
    return true;
}

assert.equal(halfIteration('racecar'), true);
assert.equal(halfIteration('madam'), true);
assert.equal(halfIteration('civic'), true);
assert.equal(halfIteration('nick'), false);
assert.equal(halfIteration('wnickw'), false);
assert.equal(halfIteration('Al lets Della call Ed Stella'), true);
assert.equal(halfIteration('Ah Satan sees Natasha'), true);

