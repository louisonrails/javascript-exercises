const palindromes = function (word) {
    const onlyLetters = word.toLowerCase().replace(/[^a-z0-9]/g, '').split('');
    
    const reverseWord = [...onlyLetters].reverse();
    
    return onlyLetters.join('') === reverseWord.join('');
};

// Do not edit below this line
module.exports = palindromes;
