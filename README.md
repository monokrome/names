I got tired of doing this every time that I generate example data. Sure, I've only done
it 4 or 5 times - but it just takes an extra 20 minutes that I don't need it taking. So,
here is a set of 4 files which are composed of the following name lists:

* A list of the most common last names in the US
* A list of the most common female first names in the US
* A list of the most common male first names in the US

All items are organized by popularity with the most popular names at the top of the file.

You can also import this as a NodeJS module if you'd like, and you can use it in the ways
demonstrated in the following terminal session:

    > var names = require('./index'); names.random();
    [ [ 'Mauro', 'Burnley', 'male' ] ]

    > var names = require('./index'); names.random(10);
    [ [ 'Daryl', 'Scarpello', 'female' ],
      [ 'Brice', 'Belson', 'male' ],
      [ 'Gertude', 'Vieira', 'female' ],
      [ 'Tracee', 'Wiborg', 'female' ],
      [ 'Lincoln', 'Vacheresse', 'male' ],
      [ 'Diego', 'Bishard', 'male' ],
      [ 'Carol', 'Labarge', 'female' ],
      [ 'Raleigh', 'Annett', 'male' ],
      [ 'Gene', 'Nishimoto', 'male' ],
      [ 'Edward', 'Cripps', 'male' ] ]

    > var names = require('./index'); names.random(2, 'female');
    [ [ 'Tinisha', 'Yidiaris', 'female' ], [ 'Yolando', 'Ronan', 'female' ] ]

    > var names = require('./index'); names.random(3, 'male');
    [ [ 'Cruz', 'Trujillo', 'male' ],
      [ 'Adan', 'Orama', 'male' ],
      [ 'Enoch', 'Sharperson', 'male' ] ]

