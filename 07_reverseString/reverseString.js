const reverseString = function(stringValue) {
    let stringLetters = stringValue.split('');
    let output = "";
    for(let i = stringLetters.length - 1; i >= 0; i--){
        output += stringLetters[i];
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
