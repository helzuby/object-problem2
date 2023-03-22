const person = [
    {
        firstName : 'Helen',
        lastName :   'Esther',
        age :  18
    },
    {
        firstName : 'Olivia',
        lastName :   'Ruth',
        age :  25
    },
    {
        firstName : 'ken',
        lastName :   'Tobi',
        age :  28
    },
    {
        firstName : 'Dennis',
        lastName :   'Collins',
        age :  39
    }
    ]
//example using #forEach. You can also use For loop in the same manner
function displayNameInfo(arrayOfObjects) {
    arrayOfObjects.forEach(function(a) {
        console.log(a.firstName + ' ' + a.lastName)
    });
}

displayNameInfo(person);