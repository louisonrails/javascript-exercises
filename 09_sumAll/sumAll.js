const sumAll = function(a, b) {

    if(!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0){
        return "ERROR";
    }
    
    const firstNumber = Math.min(a , b);
    const lastNumber = Math.max(a, b);

    let sum = 0;
    for (let i = firstNumber; i <= lastNumber; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
