if (Meteor.isServer) {
    Meteor.startup(function() {
        console.log("Checking if DB is Empty");
        if ( Collections.find().count() === 0 ) {
            var dt          = moment().format('MM/DD/YYYY'),
                time        = moment().format('h:mm a'),
                firstnames  = ['Arturo', 'Erik', 'Sagar', 'Sam', 'Bob', 'Melissa', 'Pancho', 'Loren', 'Elisa', 'Bella'],
                lastnames   = ['Montoya', 'Singh', 'Hills', 'Kennedy', 'Clinton', 'Trump', 'Quen', 'Storen', 'Villa', 'Luther'];
            for ( i = 1; i <= 10; i++ ) {
                var firstname = (firstnames[i % 10]).toString(),
                    lastname  = '',
                    dob       = ([i] % 12).toString() + '/' + ([i] % 28).toString() + '/1994';
                for ( j = 1; j < 11; j++ ) {
                    lastname = (lastnames[j % 10]).toString();
                    Collections.insert({
                        "firstName": firstname,
                        "lastName": lastname,
                        "dob": dob
                    });

                }
            }

            Accounts.createUser({
                password: 'test',
                email   : 'test@gmail.com',
                profile : {
                    firstname : 'test',
                    lastname  : 'test'
                }
            });
        }

    });

}