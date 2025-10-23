const repeatString = function(greeting, number) {
    let output = "";
    for(let i = 0; i< number; i++){
        output += greeting;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
