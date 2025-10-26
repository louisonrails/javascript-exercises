const fibonacci = function(number) {
    if (number < 0){
        return "OOPS";
    }

    let array = [0, 1];

    for(let i = 1; i <= number; i++){
        array.push(array[i - 1] + array[i]);
    }

    return array[number];
    
};

// Do not edit below this line
module.exports = fibonacci;
