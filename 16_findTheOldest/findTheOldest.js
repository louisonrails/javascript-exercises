const findTheOldest = function(people) {
    const currentYear = 2025;
    let peopleAges = [];

    people.forEach(person => {
        let finalYear = person.yearOfDeath ? person.yearOfDeath : currentYear;
        let name = person.name;
        let age = finalYear - person.yearOfBirth;
        peopleAges.push({name: name, age: age});
    });

    older = peopleAges[0];

    peopleAges.forEach(personAge => {
        if (personAge.age > older.age){
            older = personAge;
        }
    });

    return older;

};

// Do not edit below this line
module.exports = findTheOldest;
